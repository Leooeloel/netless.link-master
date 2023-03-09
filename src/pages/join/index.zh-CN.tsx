import classNames from "classnames";
import { Link, PageProps } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { CardsWrapper, Grid, HeaderWrapper } from ".";
import { NextSectionTitle } from "..";
import Accordion from "../../components/accordion";
import { ExternalLink } from "../../components/external-link";
import Layout from "../../components/layout";
import join_1 from "../../images/join_1.svg";
import join_2 from "../../images/join_2.svg";
import join_3 from "../../images/join_3.svg";
import join_4 from "../../images/join_4.svg";
import join_5 from "../../images/join_5.svg";
import join_6 from "../../images/join_6.svg";
import join_wide from "../../images/join_wide.png";
import { Flex, SectionDesc, SectionTitle } from "../about";
import { Footer, Navigation } from "../index.zh-CN";
import { Section } from "../price";
import { StickyWrapper } from "../product";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="wrapper">
                <h1>加入 Netless，发现你的价值</h1>
                <p>如果你正在寻找职业生涯的机遇，不妨来 Netless 看看</p>
            </div>
        </HeaderWrapper>
    );
};

const anchors = ["job", "info", "work"];
const sectionNames = ["热招职位", "了解 Netless", "人在 Netless"];

const Sticky: React.FC<{
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    location: Location;
}> = ({ index, setIndex, location }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current == null) return;
        const wrapper = wrapperRef.current;
        const indexFromHash = anchors.indexOf(location.hash.substring(1));
        if (indexFromHash >= 0) setIndex(indexFromHash);
    }, []);

    return (
        <StickyWrapper>
            <div className="container" ref={wrapperRef}>
                {anchors.map((id, i) => (
                    <Link
                        to={`#${id}`}
                        className={classNames({ active: index === i })}
                        onClick={() => setIndex(i)}
                        key={id}
                    >
                        {sectionNames[i]}
                    </Link>
                ))}
            </div>
        </StickyWrapper>
    );
};

const job = [
    {
        title: "安卓开发工程师",
        subtitle: "杭州",
        children: (
            <>
                {`岗位职责：
1、Android 客户端应用的开发和维护
2、服务客户，帮助客户接入产品，帮助客户定位问题和解决问题

岗位要求：
1、熟练掌握 Android 应用开发的相关语言和工具
2、熟练掌握 Git 或其他 VCS 工具
3、熟悉计算机科学相关的理论知识
4、出众的客户沟通能力，热爱分享，较好的文档写作能力与习惯
5、具有良好的自驱力，善于思考，以高效地完成工作
6、具有良好的团队协作能力，能接受团队对编码风格和工作方式的规范
7、具有良好的学习能力和学习习惯，愿意学习新技术
8、对技术有热情，认可“工程师”文化

如有意愿请提交简历至 `}
                <a href="mailto:hr@netless.link">hr@netless.link</a>
                {`，我们会在三个工作日内回复`}
            </>
        ),
    },
    {
        title: "iOS 开发工程师",
        subtitle: "杭州",
        children: (
            <>
                {`岗位职责：
1、iOS 客户端应用的开发和维护
2、服务客户，帮助客户接入产品，帮助客户定位问题和解决问题

岗位要求：
1、熟练掌握 iOS 应用开发的相关语言和工具
2、熟练掌握 Git 或其他 VCS 工具
3、熟悉计算机科学相关的理论知识
4、出众的客户沟通能力，热爱分享，较好的文档写作能力与习惯
5、具有良好的自驱力，善于思考，以高效地完成工作
6、具有良好的团队协作能力，能接受团队对编码风格和工作方式的规范
7、具有良好的学习能力和学习习惯，愿意学习新技术 8、对技术有热情，认可“工程师”文化

如有意愿请提交简历至 `}
                <a href="mailto:hr@netless.link">hr@netless.link</a>
                {`，我们会在三个工作日内回复`}
            </>
        ),
    },
];

const SectionJob: React.FC<{ index: number; multiple?: boolean }> = ({ index, multiple }) => {
    const [faqIndex, setFaqIndex] = useState(-1);
    const [multi, setMulti] = useState<Array<number>>([]);

    return (
        <Section id={`${anchors[0]}-tab`} style={{ display: index === 0 ? "block" : "none" }}>
            {job.map(({ title, subtitle, children }, i) => (
                <Accordion
                    key={i}
                    title={title}
                    subtitle={subtitle}
                    children={children}
                    active={multiple ? multi.includes(i) : faqIndex === i}
                    onClick={(e) => {
                        if (multiple) {
                            if (e) setMulti(multi.filter((j) => j !== i));
                            else setMulti([...multi, i]);
                        } else {
                            if (e) setFaqIndex(-1);
                            else setFaqIndex(i);
                        }
                    }}
                />
            ))}
            <div className="center">
                <ExternalLink
                    to="https://www.zhipin.com/gongsi/65a62ecdf48bd1663nZ60t24Ew~~.html"
                    className="btn"
                >
                    查看更多
                </ExternalLink>
            </div>
        </Section>
    );
};

const SectionInfo: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[1]}-tab`} style={{ display: index === 1 ? "block" : "none" }}>
            <SectionTitle>公司的使命与愿景</SectionTitle>
            <SectionDesc>提供优质的白板技术服务，降低线上教学和协作的门槛</SectionDesc>
        </Section>
    );
};

const SectionWork: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[2]}-tab`} style={{ display: index === 2 ? "block" : "none" }}>
            <NextSectionTitle>公司福利</NextSectionTitle>
            <SectionDesc style={{ marginBottom: 50 }}>
                除了公平公正的上升机会，发挥自我价值的发展空间，Netless
                还能给你很多「实实在在」的待遇
            </SectionDesc>
            <Grid>
                <div className="item">超出当地行业同等岗位的薪资</div>
                <div className="item">吃不完的零食</div>
                <div className="item">完善的五险一金体系</div>
                <div className="item">弹性的工作时间</div>
                <div className="item">一年两次调薪</div>
                <div className="item">周末双休</div>
            </Grid>
            <Flex>
                <div className="sample">
                    <img src={join_wide} />
                </div>
            </Flex>
            <NextSectionTitle>成长体系</NextSectionTitle>
            <CardsWrapper>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_2} />
                    <div className="right">
                        <div className="title">新人培训</div>
                        <div className="text">
                            Netless
                            的价值观、产品，以及我们的产品思维和行业视角，入职培训第一课，会让你更加真实的了解我们
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_3} />
                    <div className="right">
                        <div className="title">大牛导师</div>
                        <div className="text">新人会有一对一导师引导，帮你快速上手工作</div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_4} />
                    <div className="right">
                        <div className="title">圆桌论坛</div>
                        <div className="text">每周都会有内部技术分享会，分享观点，共同成长</div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_5} />
                    <div className="right">
                        <div className="title">扁平管理</div>
                        <div className="text">公司倡导大家自驱管理，最大化发挥自己的优势和特长</div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_6} />
                    <div className="right">
                        <div className="title">激励政策</div>
                        <div className="text">
                            每季度每人都有标准额度的团建费，吃喝玩乐随意组织，自主参与
                        </div>
                    </div>
                </div>
            </CardsWrapper>
        </Section>
    );
};

export default function Index({ location }: PageProps) {
    const [index, setIndex] = useState(0);

    return (
        <Layout title="加入我们 - Netless">
            <Navigation invert />
            <Header />
            <Sticky index={index} setIndex={setIndex} location={location} />
            <SectionJob index={index} />
            <SectionInfo index={index} />
            <SectionWork index={index} />
            <Footer location={location} />
        </Layout>
    );
}
