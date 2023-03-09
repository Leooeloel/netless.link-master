import classNames from "classnames";
import { Link, navigate, PageProps } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import {
    CustomersLogoWrapper,
    CustomersWrapper,
    FeaturesWrapper,
    FooterWrapper,
    FullWindowPlayer,
    HeaderWrapper,
    IntrosWrapper,
    Nav,
    NextSectionTitle,
    RegisterWrapper,
    SectionTitle,
    VideosWrapper,
} from ".";
import { ExternalLink } from "../components/external-link";
import Layout from "../components/layout";
import agora from "../images/agora.png";
import arrow_down from "../images/arrow_down.svg";
import component_preview from "../images/component_preview@2x.png";
import feat_cursor from "../images/feat_cursor_en.svg";
import feat_doc from "../images/feat_doc_en.svg";
import feat_media from "../images/feat_media_en.svg";
import feat_page from "../images/feat_page_en.svg";
import feat_preview from "../images/feat_preview_en.svg";
import feat_scale from "../images/feat_scale_en.svg";
import feat_tool from "../images/feat_tool_en.svg";
import feat_undo from "../images/feat_undo_en.svg";
import home_0 from "../images/home_0.svg";
import home_1 from "../images/home_1.svg";
import home_2 from "../images/home_2.svg";
import home_3 from "../images/home_3.svg";
import home_4 from "../images/home_4.svg";
import home_5 from "../images/home_5.svg";
import home_6 from "../images/home_6.svg";
import home_7 from "../images/home_7.svg";
import home_8 from "../images/home_8.svg";
import logo from "../images/logo.png";
import menu_black from "../images/menu_black.svg";
import menu_white from "../images/menu_white.svg";
import netless_black from "../images/netless_black.svg";
import netless_white from "../images/netless_white.svg";
import play_circle_white from "../images/play_circle_white.png";
import static_0 from "../images/static_0.svg";
import static_1 from "../images/static_1.svg";
import static_2 from "../images/static_2.svg";
import static_3 from "../images/static_3.svg";
import Video0 from "../images/video_0.inline.svg";
import Video1 from "../images/video_1.inline.svg";
import Video2 from "../images/video_2.inline.svg";
import Video3 from "../images/video_3.inline.svg";
import { customers_logo, BeiAnLink } from "./index.zh-CN";

const shapes = [home_0, home_1, home_2, home_3, home_4, home_5, home_6, home_7, home_8];
const shapesSize = [
    [86, 98],
    [55, 61],
    [51, 57],
    [64, 74],
    [32, 36],
    [48, 54],
    [88, 93],
    [192, 107],
    [224, 52],
];
const shapesLoc: { top: number; left?: number; right?: number }[] = [
    { top: 267, left: 140 },
    { top: 268, left: 357 },
    { top: 257, right: 105 },
    { top: 138, right: 282 },
    { top: 0, right: 275 },
    { top: 147, left: 274 },
    { top: 43, right: 85 },
    { top: 22, left: 107 },
    { top: 295, right: 238 },
];

const marks = {
    cursor: feat_cursor,
    doc: feat_doc,
    media: feat_media,
    page: feat_page,
    preview: feat_preview,
    scale: feat_scale,
    tool: feat_tool,
    undo: feat_undo,
};

export const Navigation: React.FC<{ invert?: boolean }> = ({ invert = false }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Nav invert={invert}>
            <span className="icon">
                <img src={logo} alt="icon" />
            </span>
            <span className="logo">
                <Link to="/en/">
                    <img src={invert ? netless_black : netless_white} alt="logo" />
                </Link>
            </span>
            <span className="splitter" />
            <span className="menu" tabIndex={-1} onClick={() => setVisible(!visible)}>
                <img src={invert ? menu_black : menu_white} alt="menu" />
            </span>
            <span className={classNames("links", { visible })}>
                <Link to="/en/product">Product</Link>
                <ExternalLink to="https://developer.netless.link">Document</ExternalLink>
                <Link to="/en/price">Price</Link>
                <ExternalLink to="https://github.com/netless-io">GitHub</ExternalLink>
                <ExternalLink to="https://console.netless.link">Console</ExternalLink>
                {/* <Link to="/en/">English</Link> */}
            </span>
        </Nav>
    );
};

interface Rect {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

const isIntersect = (a: Rect, b: Rect) => {
    return !(b.right < a.left || b.left > a.right || b.bottom < a.top || b.top > a.bottom);
};

const CountTo: React.FC<{ dist: number; ratio?: number }> = ({ dist, ratio = 0.2 }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const step = ~~((dist - value) * ratio);
        if (step > 0) {
            const handler = setTimeout(() => {
                setValue(value + step);
            }, 1000 / 60);
            return () => clearTimeout(handler);
        } else if (value < dist) {
            const handler = setTimeout(() => {
                setValue(value + 1);
            }, 1000 / 60);
            return () => clearTimeout(handler);
        }
    }, [value]);

    return <>{value.toLocaleString("en-US")}</>;
};

export const Header: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    let lastScroll = 0;
    const scrollDown = () => {
        window.scrollTo({ top: headerRef.current?.scrollHeight, behavior: "smooth" });
    };
    const scrollDownPage = (e: Event) => {
        if (lastScroll == 0 && lastScroll < window.pageYOffset) {
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }
        lastScroll = window.pageYOffset;
    };

    const [positions, setPositions] = useState<Array<{ x: number; y: number; zoom?: number }>>([]);
    const nextPosition = (i: number) => {
        const hidden = { x: -130, y: -130 };
        if (headerRef.current == null || titleRef.current == null) return hidden;
        let { clientWidth: w, clientHeight: h } = headerRef.current;
        if (w < 425) return hidden;
        const deadZone = { top: 150, bottom: 180 };
        const loc = shapesLoc[i];
        let y = deadZone.top + loc.top + (h - 690) / 2;
        let x: number;
        if (loc.left) {
            x = loc.left;
        } else if (loc.right) {
            x = w - loc.right - shapesSize[i][0];
        } else {
            x = -130;
        }
        if (w < 1280) return hidden;
        return { x, y };
    };

    const onResize = () => {
        if (headerRef.current == null || titleRef.current == null) return;
        setPositions(shapes.map((_, i) => nextPosition(i)));
    };

    useEffect(() => {
        onResize();
        window.addEventListener("scroll", scrollDownPage);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", scrollDownPage);
            window.removeEventListener("resize", onResize);
        };
    }, [headerRef]);

    return (
        <HeaderWrapper ref={headerRef}>
            <div className="layer layer--beneath">
                {positions.map(({ x, y, zoom }, i) => (
                    <div key={i} className="shape" style={{ left: `${x}px`, top: `${y}px`, zoom }}>
                        <img src={shapes[i]} />
                    </div>
                ))}
            </div>
            <div className="layer layer--center">
                <h1 className="title" ref={titleRef}>
                    Professional interactive whiteboard SDK,
                    <wbr />
                    Boost online education
                </h1>
                <div className="buttons">
                    <ExternalLink to="https://console.netless.link">Sign up now</ExternalLink>
                    <ExternalLink to="https://demo.netless.link">Experience Now</ExternalLink>
                </div>
            </div>
            <div className="bottom">
                <div className="arrow" onClick={scrollDown}>
                    <img src={arrow_down} alt="scroll_down" />
                </div>
                <div className="stat">
                    <h2 className="number">{<CountTo dist={2266} />}</h2>
                    <div className="text">Educational institutions</div>
                </div>
                <div className="splitter" />
                <div className="stat">
                    <h2 className="number">{<CountTo dist={450000} />}</h2>
                    <div className="text">Peak concurrent</div>
                </div>
                <div className="splitter" />
                <div className="stat">
                    <h2 className="number">{<CountTo dist={2000000000} />}</h2>
                    <div className="text">Service time</div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

interface VideoProps {
    thumb?: string;
    src: string;
    icon: React.ReactElement;
}

const videos: Array<VideoProps> = [
    {
        thumb:
            "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/互动白板_缩略.mp4",
        icon: <Video0 />,
        src: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/互动白板_详.mp4",
    },
    {
        thumb:
            "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/录制与回放_缩略.mp4",
        icon: <Video1 />,
        src: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/录制与回放_详.mp4",
    },
    {
        thumb:
            "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/文档转网页_缩略.mp4",
        icon: <Video2 />,
        src: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/文档转网页_详.mp4",
    },
    {
        thumb:
            "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/文档转图片_缩略.mp4",
        icon: <Video3 />,
        src: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/1/文档转图片_详.mp4",
    },
];

export const Videos: React.FC = () => {
    const numberOfVideos = videos.length;
    const eachPercent = 100 / numberOfVideos;
    const videoRef = useRef<HTMLVideoElement>(null);
    const [index, setIndex] = useState(0);
    const [cover, setCover] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressLeft, setProgressLeft] = useState(0);
    const playerRef = useRef<HTMLDivElement>(null);

    const playIndex = (i: number) => {
        const video = videoRef.current;
        if (i < index && video != null) {
            const current = video ? video.currentTime / video.duration : 0;
            setProgress((index - i + current) * eachPercent);
        } else {
            setProgress(0);
        }
        setIndex(i);
    };

    useEffect(() => {
        if (videoRef.current == null) return;
        const video = videoRef.current;
        setProgressLeft((index * video.clientWidth * eachPercent) / 100);
        const updateProgress = () => {
            const current = video ? video.currentTime / video.duration : 0;
            setProgress(current * eachPercent);
        };
        const playNext = () => {
            playIndex((index + 1) % numberOfVideos);
        };
        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("ended", playNext);
        return () => {
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("ended", playNext);
        };
    }, [progress, index]);

    const playVideo = (e: React.MouseEvent) => {
        e.preventDefault();
        if (playerRef.current == null) return;
        const player = playerRef.current;
        const videoElement = player.querySelector("video");
        if (videoElement == null) return;
        const video = videoElement;
        videoRef.current?.pause();
        video.src = videos[index].src;
        player.style.display = "flex";
        video.play();
    };

    const onClickPlayer = (e: React.MouseEvent) => {
        if (e.target === playerRef.current) {
            const player = playerRef.current;
            const videoElement = player.querySelector("video");
            if (videoElement == null) return;
            const video = videoElement;
            videoRef.current?.play();
            player.style.display = "none";
            video.pause();
            video.src = "";
        }
    };

    const texts = [
        "Interactive whiteboard",
        "Recording and playback",
        "Document to web",
        "Document to picture",
    ];

    return (
        <>
            <SectionTitle data-appear>
                Complete product system to meet your different needs
            </SectionTitle>
            <VideosWrapper data-appear>
                <video
                    src={videos[index].thumb ?? videos[index].src}
                    muted
                    autoPlay
                    ref={videoRef}
                ></video>
                <ExternalLink
                    to={videos[index].src}
                    onClick={playVideo}
                    className={classNames("cover", { active: cover })}
                    onMouseEnter={() => setCover(true)}
                    onMouseLeave={() => setCover(false)}
                >
                    <img src={play_circle_white} alt="play" />
                </ExternalLink>
                <div className="control">
                    <div
                        className="progress"
                        style={{
                            left: progressLeft,
                            width: `${progress}%`,
                        }}
                    />
                    <div className="buttons">
                        {videos.map(({ icon }, i) => (
                            <div
                                className={classNames("button", { active: index === i })}
                                onClick={() => playIndex(i)}
                                key={i}
                            >
                                <div className="icon">{icon}</div>
                                <div className="text">{texts[i]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </VideosWrapper>
            <FullWindowPlayer ref={playerRef} onClick={onClickPlayer}>
                <video controls />
            </FullWindowPlayer>
        </>
    );
};

const features = [
    { title: "Overview", media: component_preview },
    {
        title: "Multi-page preview",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/多分页预览.mp4",
    },
    {
        title: "Paging control",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/分页控制.mp4",
    },
    {
        title: "Document Center",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/文档中心.mp4",
    },
    {
        title: "File Upload",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/文件上传.mp4",
    },
    {
        title: "Cursor tool",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/光标工具.mp4",
    },
    {
        title: "Page zoom",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/页面缩放.mp4",
    },
    {
        title: "Undo redo",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/撤销重做.mp4",
    },
    {
        title: "toolbar",
        media: "https://docs-assets.oss-cn-hangzhou.aliyuncs.com/common/website/2/工具栏.mp4",
    },
];

const renderMedia = (media: string, ref: React.RefObject<HTMLImageElement>) => {
    if (media.endsWith(".png")) {
        return (
            <img
                src={media}
                className={classNames({ first: media === component_preview })}
                ref={ref}
            />
        );
    }
    if (media.endsWith(".mp4")) {
        return (
            <div className="wrapper">
                <Player src={media} muted autoPlay />
            </div>
        );
    }
    return null;
};

const feat_marks: {
    name: keyof typeof marks;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}[] = [
    { name: "cursor", left: 73, top: 14 },
    { name: "doc", right: -5, top: 26 },
    { name: "page", right: 185, bottom: 45 },
    { name: "preview", right: 314, bottom: 45 },
    { name: "scale", left: 125, bottom: 45 },
    { name: "tool", left: -40, top: 180 },
    { name: "undo", left: 69, bottom: 45 },
];

const renderMarks = ({ w, h }: { w: number; h: number }) => {
    const ow = 926;
    const oh = 576;
    if (h === 0) h = (w * oh) / ow;
    const zoom = Math.min(w / ow, h / oh);
    const dw = (w - ow * zoom) / 2;
    const dh = (h - oh * zoom) / 2;
    return feat_marks.map(({ name, left, right, top, bottom }) => {
        const props: { [key in "left" | "right" | "top" | "bottom"]?: string } = {};
        if (top) props.top = top + dh + "px";
        if (left) props.left = left + dw + "px";
        if (right) props.right = right + dw + "px";
        if (bottom) props.bottom = bottom + dh + "px";
        return (
            <img
                src={marks[name]}
                style={{ position: "absolute", zoom, ...props }}
                className="mark"
                key={name}
                data-appear
            />
        );
    });
};

export const Features: React.FC = () => {
    const [index, setIndex] = useState(0);
    const mediaRef = useRef<HTMLImageElement>(null);
    const [refer, setRefer] = useState({ w: 0, h: 0 });

    const onResize = () => {
        if (mediaRef.current == null) return;
        const media = mediaRef.current;
        const { offsetWidth: w, offsetHeight: h } = media;
        setRefer({ w, h });
    };

    useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [mediaRef]);

    return (
        <>
            <NextSectionTitle data-appear>
                Featured components, designed for online education scenarios
            </NextSectionTitle>
            <FeaturesWrapper data-appear>
                <div className="left">
                    {features.map(({ title, media }, i) => (
                        <div
                            className={classNames("btn", { active: index === i })}
                            onClick={() => setIndex(i)}
                            key={i}
                        >
                            {title}
                        </div>
                    ))}
                </div>
                <div className="right">
                    {renderMedia(features[index].media, mediaRef)}
                    {index === 0 && renderMarks(refer)}
                </div>
            </FeaturesWrapper>
        </>
    );
};

const intros = [
    {
        icon: static_0,
        title: "Full platform support to help you quickly build your own application",
        description:
            "The interactive whiteboard SDK fully covers mainstream platforms such as iOS, Android, and Web, while providing complete supporting functional services. Full-platform SDK support helps developers on various platforms to quickly integrate, efficiently link R&D and business, and let products reach the market quickly.",
    },
    {
        icon: static_1,
        title: "Professional cloud service team to help you save time, effort and money",
        description:
            "The development and maintenance of the system is not a simple matter. Long-term investment is required for team building, development and joint debugging, iterative upgrades, and online operation and maintenance. Let a professional team handle these difficult problems, and use mature cloud services to accelerate the product iteration process, saving time, money, and effort.",
    },
    {
        icon: static_2,
        title: "Multi-node coverage, cross-region access acceleration",
        description:
            "Globally accelerating CDN, deploying a set of services to multiple nodes, bringing the same smooth product experience to users in different regions.",
    },
    {
        icon: static_3,
        title: "Cancel monthly function fee, pay as you go, dynamic billing on demand",
        description:
            "One-to-one small class, 45 minutes/class, the cost of using the whiteboard is only 0.864 yuan. One-to-many open class, 1000 people 45 minutes/class, the cost of using the whiteboard is about 0.2 yuan per person. Services such as recording and playback, document transcoding, etc. are all on-demand dynamic billing to help you save money.",
    },
];

export const Intros: React.FC = () => {
    return (
        <>
            <IntrosWrapper>
                {intros.map(({ icon, title, description }, i) => (
                    <div className="cell" key={i} data-appear>
                        <div className="icon">
                            <img src={icon} />
                        </div>
                        <div className="text">
                            <h1 className="title">{title}</h1>
                            <div className="desc">{description}</div>
                        </div>
                    </div>
                ))}
            </IntrosWrapper>
        </>
    );
};

export interface Card {
    logo: string;
    head: string;
    name: string;
    job: string;
    text: string;
}

const customers: Card[] = Array(8).fill({
    logo: agora,
    head: "https://via.placeholder.com/64x64",
    name: "taosiming",
    job: "Agora CTO",
    text:
        "The development and maintenance of the system is not a simple matter. Long-term investment is required for team building, development ",
}) as Card[];

export const Customers: React.FC = () => {
    const halfCardsNumber = (customers.length >> 1) - 1;

    type SwiperInstance = Parameters<Exclude<Swiper["onSwiper"], undefined>>[0];

    const swiperRef = useRef<SwiperInstance | null>(null);

    const [width, setWidth] = useState(1280);

    const handleClick = (i: number) => {
        if (swiperRef.current == null) return;
        const swiper = swiperRef.current;
        // Swiper loop cause there be (n - 1) + n + (n - 1) elmenets:
        // [dup1, dup2, dup3..., dup[n-1], 0, 1, 2, 3..., n - 1, dup0, dup1, dup2..., dup[n-2]]
        if (i < halfCardsNumber + 2) {
            swiper.slideTo(i + customers.length - 1);
        } else {
            swiper.slideTo(i - 1);
        }
    };

    const swiperRange = 1024;

    const onSlideChange = () => {
        if (swiperRef.current == null) return;
        const swiper = swiperRef.current;
        const a = swiper.slides[swiper.activeIndex];
        const isNoCards = window.innerWidth < swiperRange;
        for (const e of Array.from(swiper.slides)) {
            const i = swiper.slides.indexOf(e);
            const distance = Math.abs(i - swiper.activeIndex);
            const card = e.querySelector(".card") as HTMLDivElement;
            const zoom = isNoCards ? 1 : 0.8 ** distance;
            card.style.transform = `translateX(-50%) scale(${zoom}, ${zoom})`;
            card.style.zIndex = String(100 - distance);
        }
    };

    useEffect(() => {
        if (window.innerWidth) setWidth(window.innerWidth);
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth);
            onSlideChange();
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    const onSwiper = (swiper: SwiperInstance) => {
        swiperRef.current = swiper;
        onSlideChange();
    };

    return (
        <>
            <SectionTitle>
                Netless has provided services to more than 2,000 educational institutions
            </SectionTitle>
            <CustomersWrapper>
                <div className="logos">
                    {customers.map(({ logo }, i) => (
                        <div
                            className="logo"
                            style={{ order: (i + halfCardsNumber) % customers.length }}
                            key={i}
                            onClick={() => handleClick(i)}
                        >
                            <img src={logo} />
                        </div>
                    ))}
                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={width < swiperRange ? (width < 400 ? 1 : 2) : 7}
                    onSwiper={onSwiper}
                    onSlideChange={onSlideChange}
                    loop
                    centeredSlides
                    slideToClickedSlide
                >
                    {customers.map(({ head, name, job, text }, i) => (
                        <SwiperSlide key={i}>
                            <div className="card">
                                <div className="head">
                                    <img src={head} />
                                </div>
                                <div className="name">{name}</div>
                                <div className="job">{job}</div>
                                <div className="text">{text}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mask" />
            </CustomersWrapper>
        </>
    );
};

export const CustomersOnlyLogo: React.FC = () => {
    return (
        <>
            <SectionTitle>
                Netless has provided services to more than 2,000 educational institutions
            </SectionTitle>
            <CustomersLogoWrapper>
                <div className="wrapper">
                    {customers_logo.map((e, i) => {
                        return <img src={e} key={i} />;
                    })}
                </div>
            </CustomersLogoWrapper>
        </>
    );
};

export const Register: React.FC = () => {
    return (
        <RegisterWrapper>
            <h1 className="title">
                Just one step, get 10,000 minutes of interactive time for free
            </h1>
            <div className="input-container">
                <div className="input-wrapper">
                    <input type="email" placeholder="Please enter your email" />
                    <button onClick={() => navigate("https://console.netless.link")}>Start</button>
                </div>
            </div>
        </RegisterWrapper>
    );
};

const SmartLink: React.FC<{ to: string }> = ({ to, children }) => {
    if (to.startsWith("https://")) {
        return <ExternalLink to={to}>{children}</ExternalLink>;
    } else {
        return <Link to={to}>{children}</Link>;
    }
};

const footer = [
    {
        title: "Product",
        children: [
            { title: "Interactive whiteboard", to: "/en/product/#whiteboard" },
            { title: "Whiteboard recording", to: "/en/product/#replay" },
            { title: "Document to web page", to: "/en/product/#dynamic" },
            { title: "Document to picture", to: "/en/product/#static" },
        ],
    },
    {
        title: "Developers",
        children: [
            { title: "Demo", to: "https://demo.netless.link" },
            { title: "Developer Center", to: "https://developer.netless.link" },
            { title: "Open source project", to: "https://github.com/netless-io" },
            { title: "Submit a ticket", to: "https://support.netless.link" },
        ],
    },
    {
        title: "Company",
        children: [
            { title: "About Us", to: "/en/about" },
            { title: "Join Us", to: "/en/join" },
            { title: "Contact Us", to: "/en/contact" },
            { title: "Privacy and Terms", to: "/en/privacy" },
        ],
    },
];

export const Footer: React.FC<{ location: Location }> = ({ location }) => {
    return (
        <FooterWrapper>
            <div className="columns">
                <div className="col">
                    <div className="logo">
                        <img src={netless_black} alt="logo" />
                    </div>
                    <Link className="btn" to={location.pathname.replace("/en", "/zh-CN")}>
                        中文
                    </Link>
                </div>
                {footer.map((cell, i) => (
                    <div className="col" key={i}>
                        <div className="title">{cell.title}</div>
                        {cell.children.map(({ title, to }, i) => (
                            <div className="link" key={i}>
                                <SmartLink to={to}>{title}</SmartLink>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="beian">
                © 2020 Netless{" "}
                <ExternalLink className="beian-link" to="https://beian.miit.gov.cn/">
                    沪 ICP 备 19010127 号 - 2
                </ExternalLink>{" "}
                <BeiAnLink id="31011002004621" />
            </div>
        </FooterWrapper>
    );
};

export default function Index({ location }: PageProps) {
    return (
        <Layout>
            <Navigation />
            <Header />
            <Videos />
            <Features />
            <Intros />
            {/* <Customers /> */}
            <CustomersOnlyLogo />
            <Register />
            <Footer location={location} />
        </Layout>
    );
}
