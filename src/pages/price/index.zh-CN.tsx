import classNames from "classnames";
import { Link, PageProps } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { Section, SectionTitle } from ".";
import Accordion from "../../components/accordion";
import { ExternalLink } from "../../components/external-link";
import { InputRange } from "../../components/input-range";
import Layout from "../../components/layout";
import { customers_logo, Footer, Navigation } from "../index.zh-CN";
import { CustomersLogoWrapper, HeaderWrapper, StickyWrapper } from "../product";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="container">
                <div className="wrapper">
                    <h1 className="title">定价</h1>
                    <div className="desc">取消月功能费，即用即付，按需动态计费</div>
                </div>
                <div className="actions">
                    <ExternalLink className="btn" to="https://console.netless.link">
                        立即试用
                    </ExternalLink>
                </div>
            </div>
        </HeaderWrapper>
    );
};

const anchors = ["plan", "calc", "faq"];
const sectionNames = ["价格方案", "计算器", "常见问题"];

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

const SectionPrice: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[0]}-tab`} style={{ display: index === 0 ? "block" : "none" }}>
            <SectionTitle>定价</SectionTitle>
            <p className="desc">取消月功能费，即用即付，按需动态计费</p>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>计费项</th>
                            <th>服务说明</th>
                            <th>单价</th>
                            <th>计费方式</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>双向实时互动</td>
                            <td>
                                支持多人同时在线勾划涂鸦、提供全套画笔标注工具，实时同步分享想法
                            </td>
                            <td>9.6元 / 千分钟</td>
                            <td>日结按量计费</td>
                        </tr>
                        <tr>
                            <td>单向直播订阅</td>
                            <td>支持大型在线公开课，一人主讲，千、万人实时观看，高效传递信息</td>
                            <td>4.8元 / 千分钟</td>
                            <td>日结按量计费</td>
                        </tr>
                        <tr>
                            <td>白板云录制</td>
                            <td>
                                白板录制服务方便您记录每堂课的完整过程，支持课堂质量分析和学生复习回顾等业务场景
                                <br />
                                <br />
                                支持同步的将各路音视频以及白板画面分别录制，并进行音视频与白板的音画对齐的能力
                            </td>
                            <td>12元 / 千分钟</td>
                            <td>日结按量计费</td>
                        </tr>
                        <tr>
                            <td>文档转网页</td>
                            <td>文档动态转码支持将 pptx 转码成 HTML5，可以保留 pptx 中的动效</td>
                            <td>600元 / 月</td>
                            <td>月结</td>
                        </tr>
                        <tr>
                            <td>文档转图片</td>
                            <td>
                                文档静态转码支持将 ppt / pptx / doc / docx / pdf
                                多种格式的课件转码成静态图片，让课件展示于白板
                            </td>
                            <td>120元 / 月</td>
                            <td>月结</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SectionTitle>计费示例</SectionTitle>
            <p className="desc">始终让您知道钱花在了哪儿</p>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>计费项</th>
                            <th>计费示例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>双向实时互动</td>
                            <td>
                                一节师生共 2 人、时长 45
                                分钟的小班课堂，老师和学生全程互动，则双向互动时长： 45 * 2 = 90
                                分钟；费用：( 90 * 9.6 ) / 1,000 = 0.864 元
                            </td>
                        </tr>
                        <tr>
                            <td>单向直播订阅</td>
                            <td>
                                一节师生共 1,000 人、时长 45
                                分钟的公开课，老师全程互动，学生全程观看，则双向互动时长：1 * 45 =
                                45 分钟、单向订阅时长：999 * 45 = 44955 分钟；总费用：( 45 * 9.6 +
                                44,955 * 4.8 ) / 1,000 = 216.216 元
                            </td>
                        </tr>
                        <tr>
                            <td>白板云录制</td>
                            <td>
                                录制一节时长 45 分钟的课程，费用：( 1 * 45 * 12 ) / 1,000 = 0.54
                                元。注意白板录制不包含音视频录制
                            </td>
                        </tr>
                        <tr>
                            <td>文档转网页</td>
                            <td>
                                默认配置一个月 600 元；如转码服务需要增加配置，按增加倍数乘以月费用
                            </td>
                        </tr>
                        <tr>
                            <td>文档转图片</td>
                            <td>
                                默认配置一个月 120 元；如转码服务需要增加配置，按增加倍数乘以月费用
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SectionTitle>我们的客户</SectionTitle>
            <p className="desc" style={{ marginBottom: 50 }}>
                2,000 + 在线教育机构的选择
            </p>
            {/* <CustomersWrapper>
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
            </CustomersWrapper> */}
            <CustomersLogoWrapper>
                <div className="wrapper">
                    {customers_logo.map((e, i) => {
                        return <img src={e} key={i} />;
                    })}
                </div>
            </CustomersLogoWrapper>
        </Section>
    );
};

const SectionCalc: React.FC<{
    index: number;
    minutes: number[];
    setMinutes: React.Dispatch<React.SetStateAction<number[]>>;
    players: number[];
    setPlayers: React.Dispatch<React.SetStateAction<number[]>>;
    subscribers: number[];
    setSubscribers: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ index, minutes, setMinutes, players, setPlayers, subscribers, setSubscribers }) => {
    const [white, setWhite] = useState(true);
    const playerPrice = (players[0] * 9.6 * minutes[0]) / 1000;
    const subscriberPrice = (subscribers[0] * 4.8 * minutes[0]) / 1000;
    const whitePrice = white ? (12 * minutes[0]) / 1000 : 0;
    const price = playerPrice + subscriberPrice + whitePrice;
    const users = players[0] + subscribers[0];
    const average = users > 0 ? price / users : 0;

    return (
        <Section id={`${anchors[1]}-tab`} style={{ display: index === 1 ? "block" : "none" }}>
            <SectionTitle>输入课程信息，计算白板费用</SectionTitle>
            <div className="grid">
                <div className="entry">是否开启白板录制</div>
                <div className="span3">
                    <input
                        id="wb_yes"
                        type="radio"
                        name="whiteboard"
                        defaultChecked
                        onChange={(e) => setWhite(e.target.checked)}
                    ></input>
                    <label htmlFor="wb_yes">是</label>
                    <input
                        id="wb_no"
                        type="radio"
                        name="whiteboard"
                        onChange={(e) => setWhite(!e.target.checked)}
                    ></input>
                    <label htmlFor="wb_no">否</label>
                </div>
                <div className="entry">课程时长</div>
                {InputRange(500, minutes, setMinutes, " (分钟)")}
                <div className="entry">互动总人数</div>
                {InputRange(500, players, setPlayers, " (人)")}
                <div className="entry">订阅总人数</div>
                {InputRange(10000, subscribers, setSubscribers, " (人)")}
            </div>
            <hr />
            <div className="flex">
                <div className="entry">总费用</div>
                <div className="right">
                    <div className="price">¥ {price.toFixed(2)}</div>
                    <small>平均使用成本仅 {average.toFixed(2)} 元/人</small>
                </div>
            </div>
            <div className="note">注：当前费用不包括转码服务，转码服务包月购买</div>
        </Section>
    );
};

const faq = [
    {
        title: "白板费用有哪几部分构成？",
        content:
            "白板费用 = 双向实时互动费用 + 单向直播订阅费用 + 白板云录制费用 + 文档转网页费用 + 文档转图片费用",
    },
    {
        title: "白板是如何计费的？",
        content:
            "双向实时互动、单向直播订阅、白板云录制，这三种服务是按照时长来计费，计费公式：费用 = 单价 * 使用时长。每一个活跃（有心跳）的长连接，每分钟会打一个点，累计打点数之和就是客户的总使用时长。",
    },
    {
        title: "是否从创建房间就开始收费？",
        content: "不是的，创建的房间中没有客户连入的情况下不收费。",
    },
    {
        title: "如果学生不退出房间是否会一直计费？",
        content:
            "会计费，因为白板底层只根据是否有活跃长连接来计量。可以在课程结束时调用 ban-api 强制所有人退出房间，来避免额外的费用。",
    },
    {
        title: "如何退出房间？",
        content: "可以调用 room 对象下的 disconnect() 方法来退出房间。",
    },
    {
        title: "如果不调用 disconnect() 白板会怎么处理？",
        content: "如果是客户端已经实际上断连，会走一个 30 秒的超时逻辑，然后停止计费。",
    },
    {
        title: "如何选择最合适的白板用法？",
        content:
            "以下三个建议可以帮你控制成本：1、房间里实时互动总人数不要超过 50 人，达到 50 人后建议开启单向订阅模式；2、离开房间时调用 disconnect()；3、课程结束后调用 ban-api 强制所有人退出。",
    },
];

const SectionFaq: React.FC<{ index: number; multiple?: boolean }> = ({ index, multiple }) => {
    const [faqIndex, setFaqIndex] = useState(-1);
    const [multi, setMulti] = useState<Array<number>>([]);

    return (
        <Section
            id={`${anchors[2]}-tab`}
            style={{ display: index === 2 ? "block" : "none", padding: "15px 0 25px" }}
        >
            {faq.map(({ title, content }, i) => (
                <Accordion
                    key={i}
                    title={title}
                    content={content}
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
        </Section>
    );
};

export default function Index({ location }: PageProps) {
    const [index, setIndex] = useState(0);
    const [minutes, setMinutes] = useState([189]);
    const [players, setPlayers] = useState([13]);
    const [subscribers, setSubscribers] = useState([8271]);

    const forwardToCalcProps = {
        minutes,
        setMinutes,
        players,
        setPlayers,
        subscribers,
        setSubscribers,
    };

    return (
        <Layout title="定价 - Netless">
            <Navigation />
            <Header />
            <Sticky index={index} setIndex={setIndex} location={location} />
            <SectionPrice index={index} />
            <SectionCalc index={index} {...forwardToCalcProps} />
            <SectionFaq index={index} multiple />
            <Footer location={location} />
        </Layout>
    );
}
