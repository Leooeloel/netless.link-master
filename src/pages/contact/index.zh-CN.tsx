import classNames from "classnames";
import { PageProps } from "gatsby";
import React, { useRef, useState } from "react";
import {
    ContactWrapper,
    FlexEx,
    gatherEmailData,
    HeaderWrapper,
    makeQueryStringForEmail,
    ModalWrapper,
} from ".";
import { clrs } from "../../components/common";
import { ExternalLink } from "../../components/external-link";
import Layout from "../../components/layout";
import check2 from "../../images/check2.svg";
import close_black from "../../images/close-black.svg";
import contact_1 from "../../images/contact_1@2x.png";
import contact_2 from "../../images/contact_2@2x.png";
import { SectionDesc, SectionTitle } from "../about";
import { Footer, Navigation } from "../index.zh-CN";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="wrapper">
                <h1>联系我们</h1>
                <p>请告诉我们可以帮您做什么</p>
            </div>
        </HeaderWrapper>
    );
};

export const checkVaidation = (container: HTMLDivElement) => {
    const inputs = [
        ...Array.from(container.querySelectorAll("input")),
        container.querySelector("textarea"),
    ];
    return inputs.every((e) => e?.checkValidity());
};

const Contact: React.FC = () => {
    const [sell, setSell] = useState(false);
    const [help, setHelp] = useState(false);
    const [thank, setThank] = useState(false);
    const sellRef = useRef<HTMLDivElement>(null);
    const helpRef = useRef<HTMLDivElement>(null);

    const onSell = () => {
        // TODO: POST
        if (sellRef.current != null && checkVaidation(sellRef.current)) {
            const subject =
                "售前咨询 " +
                gatherEmailData(sellRef.current, "sell_", "name", "phone", "company")
                    .filter(Boolean)
                    .join(" ");
            const body = gatherEmailData(sellRef.current, "sell_", "desc").join("");
            window.open(`mailto:support@netless.link?${makeQueryStringForEmail(subject, body)}`);
            setSell(false);
            setThank(true);
        }
    };

    const onHelp = () => {
        // TODO: POST
        if (helpRef.current != null && checkVaidation(helpRef.current)) {
            const subject =
                "技术支持 " +
                gatherEmailData(helpRef.current, "help_", "phone", "company")
                    .filter(Boolean)
                    .join(" ");
            const body = gatherEmailData(helpRef.current, "help_", "desc").join("");
            window.open(`mailto:support@netless.link?${makeQueryStringForEmail(subject, body)}`);
            setHelp(false);
            setThank(true);
        }
    };

    return (
        <>
            <ContactWrapper>
                <div className="cell">
                    <h3>销售</h3>
                    <p>我们非常乐意与您讨论我们的合作方式</p>
                    <button className="btn" onClick={() => setSell(true)}>
                        联系销售
                    </button>
                </div>
                <div className="cell">
                    <h3>帮助和支持</h3>
                    <p>如有任何问题，我们随时为您提供帮助</p>
                    <button className="btn" onClick={() => setHelp(true)}>
                        获取支持
                    </button>
                </div>
            </ContactWrapper>
            <ModalWrapper className={classNames({ active: sell })} ref={sellRef}>
                <div className="wrapper">
                    <span className="close" onClick={() => setSell(false)}>
                        <img src={close_black} alt="close" />
                    </span>
                    <h1>售前咨询</h1>
                    <p>
                        我们的团队将非常乐意回答您有关销售方面的问题。
                        请填写下表，我们会尽快与您联系
                    </p>
                    <div className="grid">
                        <label htmlFor="sell_name">姓名</label>
                        <input id="sell_name" type="text" required placeholder="请输入您的姓名" />
                        <label htmlFor="sell_phone">手机</label>
                        <input
                            id="sell_phone"
                            type="tel"
                            required
                            placeholder="请输入您的手机号码"
                        />
                        <label htmlFor="sell_email">邮箱</label>
                        <input id="sell_email" type="email" required placeholder="请输入您的邮箱" />
                        <label htmlFor="sell_company">公司</label>
                        <input id="sell_company" type="text" placeholder="请输入公司名称" />
                        <label htmlFor="sell_desc">描述</label>
                        <textarea
                            id="sell_desc"
                            placeholder="请描述您的需求或其他更多信息"
                            rows={7}
                            required
                        />
                    </div>
                    <div className="action">
                        <button onClick={onSell}>联系销售</button>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper className={classNames({ active: help })} ref={helpRef}>
                <div className="wrapper">
                    <span className="close" onClick={() => setHelp(false)}>
                        <img src={close_black} alt="close" />
                    </span>
                    <h1>技术支持</h1>
                    <p>描述您的问题，我们的技术顾问会尽快帮您解答</p>
                    <div className="grid">
                        <label htmlFor="help_desc">描述</label>
                        <textarea
                            id="help_desc"
                            placeholder="请描述您的需求或其他更多信息"
                            rows={7}
                            required
                        />
                        <label htmlFor="help_phone">手机</label>
                        <input
                            id="help_phone"
                            type="tel"
                            required
                            placeholder="请输入您的手机号码"
                        />
                        <label htmlFor="help_email">邮箱</label>
                        <input id="help_email" type="email" required placeholder="请输入您的邮箱" />
                        <label htmlFor="help_company">公司</label>
                        <input id="help_company" type="text" placeholder="请输入公司名称" />
                    </div>
                    <div className="action">
                        <button onClick={onHelp}>发送</button>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper className={classNames({ active: thank })}>
                <div className="wrapper">
                    <div className="check">
                        <div className="circle">
                            <img src={check2} />
                        </div>
                    </div>
                    <h1>谢谢</h1>
                    <p>我们会通过 admin@netless.com 尽快回复您</p>
                    <div className="close-thank">
                        <button onClick={() => setThank(false)}>关闭</button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

const Info: React.FC = () => {
    return (
        <>
            <SectionTitle>一般性沟通</SectionTitle>
            <SectionDesc>
                如有关于包括合作机会在内的一般问题，请发送电子邮件至{" "}
                <ExternalLink style={{ color: clrs.primary }} to="mailto:bd@netless.com">
                    bd@netless.com
                </ExternalLink>
            </SectionDesc>
            <SectionTitle style={{ marginBottom: 24 }}>办公地址</SectionTitle>
            <FlexEx>
                <div className="sample">
                    <img src={contact_1} />
                    <div className="text">杭州</div>
                </div>
                <div className="sample">
                    <img src={contact_2} />
                    <div className="text">上海</div>
                </div>
            </FlexEx>
            <FlexEx>
                <div className="desc">浙江省杭州市余杭区海创·绿谷 5 座 205 室</div>
                <div className="desc">上海市杨浦区五角场万达广场 C 座（政通路）</div>
            </FlexEx>
        </>
    );
};

export default function Index({ location }: PageProps) {
    return (
        <Layout title="联系我们 - Netless">
            <Navigation invert />
            <Header />
            <Contact />
            <Info />
            <Footer location={location} />
        </Layout>
    );
}
