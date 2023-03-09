import { Link, PageProps } from "gatsby";
import React, { useEffect, useRef } from "react";
import {
    BigFlex,
    Flex,
    HistoryWrapper,
    JoinWrapper,
    SectionDesc,
    SectionTitle,
    Stats,
    TitleWrapper,
} from ".";
import { GitHubAvatar } from "../../components/github-avatar";
import Layout from "../../components/layout";
import about_half from "../../images/about_half.png";
import about_wide from "../../images/about_wide.png";
import alwaysmavs from "../../images/staff/alwaysmavs.png";
import BlackHole1 from "../../images/staff/BlackHole1.png";
import Cheerego7 from "../../images/staff/Cheerego7.png";
import hyrious from "../../images/staff/hyrious.png";
import l1shen from "../../images/staff/l1shen.png";
import leavesster from "../../images/staff/leavesster.png";
import moskize91 from "../../images/staff/moskize91.png";
import { Footer, Navigation } from "../index.en";
import { CountTo } from "../index.zh-CN";

const Header: React.FC = () => {
    return (
        <>
            <TitleWrapper>
                <h1>Netless is a technology company driven by technology and products</h1>
                <p>
                    Currently, it is committed to providing online classroom technical solutions for
                    online education companies. The main product is an online interactive
                    whiteboard, which is a technical solution with all three terminals (Web, iOS,
                    Android)
                </p>
            </TitleWrapper>
            <Flex>
                <div className="sample">
                    <img src={about_half} />
                </div>
                <div className="desc-wrapper">
                    <div
                        className="desc"
                        style={{
                            textIndent: "2rem",
                        }}
                    >
                        <div>
                            During the 2020 epidemic, 70% of primary and middle school students in
                            Shanghai used our online interactive whiteboards to teach. As
                            technicians, we are very happy to use our products to do our part in the
                            fight against the epidemic.
                        </div>
                        <br />
                        <div>
                            The main members of our team come from well-known Internet companies
                            such as Alibaba and Qiniu Cloud. They have many years of work
                            experience, excellent technical strength and rigorous work attitude. We
                            provide a solid guarantee for the rapid development of your products
                            with strong technical strength and high-quality service.
                        </div>
                    </div>
                </div>
            </Flex>
            <Stats>
                <div className="col">
                    <div className="number">
                        <CountTo dist={2266} />
                    </div>
                    <div className="text">Educational institution</div>
                </div>
                <div className="col">
                    <div className="number">
                        <CountTo dist={450000} />
                    </div>
                    <div className="text">Concurrency peak</div>
                </div>
                <div className="col">
                    <div className="number">
                        <CountTo dist={2000000000} />
                    </div>
                    <div className="text">Service time</div>
                </div>
            </Stats>
        </>
    );
};

const Goal: React.FC = () => {
    return (
        <>
            <SectionTitle>Mission and vision</SectionTitle>
            <SectionDesc>
                Provide high-quality whiteboard technical services to lower the threshold of online
                teaching and collaboration
            </SectionDesc>
        </>
    );
};

const WidePicture: React.FC = () => {
    return (
        <Flex>
            <div className="sample">
                <img src={about_wide} />
            </div>
        </Flex>
    );
};

const History: React.FC = () => {
    const historyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (historyRef.current == null) return;
        const slider = historyRef.current;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const onMouseLeaveAndUp = (_e: MouseEvent) => {
            isDown = false;
            slider.classList.remove("active");
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mouseleave", onMouseLeaveAndUp);
        slider.addEventListener("mouseup", onMouseLeaveAndUp);
        slider.addEventListener("mousemove", onMouseMove);

        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mouseleave", onMouseLeaveAndUp);
            slider.removeEventListener("mouseup", onMouseLeaveAndUp);
            slider.removeEventListener("mousemove", onMouseMove);
        };
    }, [historyRef]);

    return (
        <>
            <SectionTitle>History</SectionTitle>
            <HistoryWrapper>
                <div className="wrapper" ref={historyRef}>
                    <div className="cell">
                        <div className="date">2018</div>
                        <div className="text">
                            The founding members leave Qiniu Cloud and Ant Financial to start the
                            Netless project
                        </div>
                    </div>
                    <div className="cell">
                        <div className="date">2019</div>
                        <div className="text">Received 1 million USD angel investment</div>
                    </div>
                    <div className="cell">
                        <div className="date">2020.3</div>
                        <div className="text">
                            The monthly usage time of the whiteboard exceeds 800 million minutes,
                            and the number of online users is 450,000
                        </div>
                    </div>
                </div>
                <div className="mask" />
            </HistoryWrapper>
        </>
    );
};

const Team: React.FC = () => {
    return (
        <>
            <SectionTitle>Our team</SectionTitle>
            <BigFlex>
                <div className="staff">
                    <GitHubAvatar src={moskize91} id="moskize91" display="TaoZeyu" />
                    <GitHubAvatar src={BlackHole1} id="BlackHole1" display="Black-Hole" />
                    <GitHubAvatar src={alwaysmavs} id="alwaysmavs" display="maverick" />
                    <GitHubAvatar src={Cheerego7} id="Cheerego7" />
                    <GitHubAvatar src={l1shen} id="l1shen" />
                    <GitHubAvatar src={hyrious} id="hyrious" />
                    <GitHubAvatar src={leavesster} id="leavesster" />
                </div>
            </BigFlex>
            <JoinWrapper>
                <div className="cell">
                    <h3>Join Us</h3>
                    <p>If you are creative, passionate, serious, and idealist, please contact us</p>
                    <Link className="btn" to="/en/join">
                        View Posts
                    </Link>
                </div>
                <div className="cell">
                    <h3>Contact Us</h3>
                    <p>
                        Your feedback is very important to us, we would love to hear your
                        suggestions or ideas
                    </p>
                    <Link className="btn" to="/en/contact">
                        Contact Us
                    </Link>
                </div>
            </JoinWrapper>
        </>
    );
};

export default function Index({ location }: PageProps) {
    return (
        <Layout title="About - Netless">
            <Navigation invert />
            <Header />
            <Goal />
            <WidePicture />
            <History />
            <Team />
            <Footer location={location} />
        </Layout>
    );
}
