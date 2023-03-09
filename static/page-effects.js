(function () {
    "use strict";

    const _ = document;
    const $ = _.querySelector.bind(_);
    const $$ = (x) => Array.from(_.querySelectorAll(x));

    // fix /product/ page navigation
    function lastElemenet(array) {
        return array[array.length - 1];
    }
    function lastPathName() {
        return lastElemenet(window.location.pathname.split("/").filter(Boolean));
    }
    if (lastPathName() === "product") {
        for (const a of $$("footer a")) {
            if (!a.href) continue;
            const url = new URL(a.href);
            if (url.pathname.endsWith("/product/") && url.hash) {
                a.addEventListener("click", () => {
                    const anchor = $(url.hash);
                    if (anchor) {
                        window.scrollTo({
                            top: anchor.offsetTop,
                            behavior: "smooth",
                        });
                    }
                });
            }
        }

        // track scrolling
        function throttle(handler, delay = 200, ...args) {
            let throttleHandler = null;
            let first = true;
            return () => {
                if (first) {
                    first = false;
                    return handler(...args);
                }
                if (throttleHandler) return;
                throttleHandler = setTimeout(() => {
                    clearTimeout(throttleHandler);
                    throttleHandler = null;
                    handler(...args);
                }, delay);
            };
        }
        const sections = ["whiteboard", "replay", "dynamic", "static"];
        function onScroll() {
            let closest = null;
            let distance = Infinity;
            for (const e of sections) {
                const tab = $(`#${e}-tab`);
                if (tab == null) continue;
                const dis = Math.abs(tab.offsetTop - window.pageYOffset);
                if (distance > dis) {
                    distance = dis;
                    closest = `#${e}`;
                }
            }
            if (closest) {
                window.history.replaceState(null, "", closest);
                for (const a of $$(".sticky a")) {
                    const active = a.href.includes(closest);
                    a.classList.toggle("active", active);
                }
            }
        }
        window.addEventListener("scroll", throttle(onScroll));
    }

    // animations
    function applyAnimation(element) {
        element.animate(
            [
                {
                    transform: "translateY(16px)",
                    opacity: 0,
                },
                {
                    transform: "translateX(0)",
                    opacity: 1,
                },
            ],
            { duration: 1000 }
        );
    }

    let observer;
    function createIntersectionObserver(element) {
        if (observer == null) {
            observer = new IntersectionObserver((entries, observer) => {
                for (const entry of entries) {
                    applyAnimation(entry.target);
                    if (entry.target.dataset["ob"] == null) {
                        entry.target.dataset["ob"] = 1;
                    } else {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }
        observer.observe(element);
    }

    let flagAddListener = true;
    const observingElements = new Set();
    function onScroll() {
        const rejected = [];
        for (const e of observingElements) {
            if (e.offsetTop < window.scrollY + window.innerHeight) {
                applyAnimation(e);
                rejected.push(e);
            }
        }
        for (const e of rejected) {
            observingElements.delete(e);
        }
        if (observingElements.size === 0) {
            window.removeEventListener("scroll", onScroll);
        }
    }
    function createOnScrollObserver(element) {
        if (flagAddListener) {
            window.addEventListener("scroll", onScroll);
            flagAddListener = false;
        }
        observingElements.add(element);
    }

    function createObserver(element) {
        if (window.IntersectionObserver) {
            createIntersectionObserver(element);
        } else {
            createOnScrollObserver(element);
        }
    }

    const targets = $$("[data-appear]");
    for (const element of targets) {
        createObserver(element);
    }
})();
