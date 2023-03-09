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
import { CountTo, Footer, Navigation } from "../index.zh-CN";

const Header: React.FC = () => {
    return (
        <>
            <TitleWrapper>
                <h1>Netless 是一家以技术和产品驱动的科技公司</h1>
                <p>
                    目前致力于为在线教育企业提供在线课堂的技术解决方案。主打产品是在线互动白板，这是一个三端（Web、iOS、Android）皆通的技术方案
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
                            在今年疫情期间，上海 70%
                            的中小学生使用我们的在线互动白板上课。作为技术人，我们很高兴能用我们的产品为抗疫事业尽自己的一份力
                        </div>
                        <br />
                        <div>
                            我们团队主要成员来自于阿里巴巴、七牛云等知名互联网公司，具备多年的工作经验、优秀的技术实力和严谨的工作态度。我们以强大的技术实力和优质的服务为您产品的快速发展提供坚实保障
                        </div>
                    </div>
                </div>
            </Flex>
            <Stats>
                <div className="col">
                    <div className="number">{<CountTo dist={2266} />}</div>
                    <div className="text">教育机构</div>
                </div>
                <div className="col">
                    <div className="number">{<CountTo dist={450000} />}</div>
                    <div className="text">并发峰值</div>
                </div>
                <div className="col">
                    <div className="number">{<CountTo dist={2000000000} />}</div>
                    <div className="text">服务时长</div>
                </div>
            </Stats>
        </>
    );
};

const Goal: React.FC = () => {
    return (
        <>
            <SectionTitle>使命与愿景</SectionTitle>
            <SectionDesc>提供优质的白板技术服务，降低线上教学和协作的门槛</SectionDesc>
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
        let autoScroll = true;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            autoScroll = false;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const onMouseLeaveAndUp = (_e: MouseEvent) => {
            isDown = false;
            autoScroll = true;
            slider.classList.remove("active");
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        };

        const handler = setInterval(() => {
            if (!autoScroll) return;
            slider.scrollLeft += 1.8;
        }, 1000 / 60);

        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mouseleave", onMouseLeaveAndUp);
        slider.addEventListener("mouseup", onMouseLeaveAndUp);
        slider.addEventListener("mousemove", onMouseMove);

        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mouseleave", onMouseLeaveAndUp);
            slider.removeEventListener("mouseup", onMouseLeaveAndUp);
            slider.removeEventListener("mousemove", onMouseMove);
            clearInterval(handler);
        };
    }, [historyRef]);

    return (
        <>
            <SectionTitle>发展历程</SectionTitle>
            <HistoryWrapper>
                <div className="wrapper" ref={historyRef}>
                    <div className="cell">
                        <div className="date">2018</div>
                        <div className="text">创始成员离开七牛云与蚂蚁金服启动 Netless 项目</div>
                    </div>
                    <div className="cell">
                        <div className="date">2019</div>
                        <div className="text">获得 100 万美元天使投资</div>
                    </div>
                    <div className="cell">
                        <div className="date">2020.3</div>
                        <div className="text">
                            白板单月使用时长超过 8 亿分钟，同时承担在线人数 45 万人
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
            <SectionTitle>我们团队</SectionTitle>
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
                    <h3>加入我们</h3>
                    <p>如果你才思敏捷、富有激情、认真严谨、具有理想主义者的气质，请联系我们</p>
                    <Link className="btn" to="/zh-CN/join">
                        查看岗位
                    </Link>
                </div>
                <div className="cell">
                    <h3>联系我们</h3>
                    <p>你的反馈对我们来说很重要，我们非常希望听到你的建议或想法</p>
                    <Link className="btn" to="/zh-CN/contact">
                        联系我们
                    </Link>
                </div>
            </JoinWrapper>
        </>
    );
};

export default function Index({ location }: PageProps) {
    return (
        <Layout title="关于我们 - Netless">
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
