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
import { Footer, Navigation } from "../index.en";
import { checkVaidation } from "./index.zh-CN";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="wrapper">
                <h1>contact us</h1>
                <p>Please tell us what we can do for you</p>
            </div>
        </HeaderWrapper>
    );
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
                "Sell Help " +
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
                "Tech Help " +
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
                    <h3>Sales</h3>
                    <p>We are very happy to discuss our cooperation with you</p>
                    <button className="btn" onClick={() => setSell(true)}>
                        Contact sales
                    </button>
                </div>
                <div className="cell">
                    <h3>Help and support</h3>
                    <p>If you have any questions, we are here to help you</p>
                    <button className="btn" onClick={() => setHelp(true)}>
                        Get support
                    </button>
                </div>
            </ContactWrapper>
            <ModalWrapper className={classNames({ active: sell })} ref={sellRef}>
                <div className="wrapper">
                    <span className="close" onClick={() => setSell(false)}>
                        <img src={close_black} alt="close" />
                    </span>
                    <h1>Pre-sales advice</h1>
                    <p>
                        Our team will be happy to answer your questions about sales. Please fill in
                        the form below and we will contact you as soon as possible
                    </p>
                    <div className="grid">
                        <label htmlFor="sell_name">Name</label>
                        <input
                            id="sell_name"
                            type="text"
                            placeholder="please enter your name"
                            required
                        />
                        <label htmlFor="sell_phone">Cell phone</label>
                        <input
                            id="sell_phone"
                            type="tel"
                            placeholder="please enter your phone number"
                            required
                        />
                        <label htmlFor="sell_email">mailbox</label>
                        <input
                            id="sell_email"
                            type="email"
                            placeholder="Please enter your email"
                            required
                        />
                        <label htmlFor="sell_company">the company</label>
                        <input
                            id="sell_company"
                            type="text"
                            placeholder="Please enter company name"
                        />
                        <label htmlFor="sell_desc">description</label>
                        <textarea
                            id="sell_desc"
                            placeholder="Please describe your needs or other more information"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="action">
                        <button onClick={onSell}>Contact sales</button>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper className={classNames({ active: help })} ref={helpRef}>
                <div className="wrapper">
                    <span className="close" onClick={() => setHelp(false)}>
                        <img src={close_black} alt="close" />
                    </span>
                    <h1>Technical Support</h1>
                    <p>
                        Describe your problem, our technical consultant will help you answer as soon
                        as possible
                    </p>
                    <div className="grid">
                        <label htmlFor="help_desc">description</label>
                        <textarea
                            id="help_desc"
                            placeholder="Please describe your needs or other more information"
                            rows={4}
                        />
                        <label htmlFor="help_phone">Cell phone</label>
                        <input
                            id="help_phone"
                            type="tel"
                            placeholder="please enter your phone number"
                        />
                        <label htmlFor="help_email">mailbox</label>
                        <input id="help_email" type="email" placeholder="Please enter your email" />
                        <label htmlFor="help_company">the company</label>
                        <input
                            id="help_company"
                            type="text"
                            placeholder="Please enter company name"
                        />
                    </div>
                    <div className="action">
                        <button onClick={onHelp}>send</button>
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
                    <h1>Thank you</h1>
                    <p>We will reply you as soon as possible via admin@netless.com</p>
                    <div className="close-thank">
                        <button onClick={() => setThank(false)}>shut down</button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

const Info: React.FC = () => {
    return (
        <>
            <SectionTitle>General Communication</SectionTitle>
            <SectionDesc>
                For general questions including cooperation opportunities, please send an email to{" "}
                <ExternalLink style={{ color: clrs.primary }} to="mailto:bd@netless.com">
                    bd@netless.com
                </ExternalLink>
            </SectionDesc>
            <SectionTitle style={{ marginBottom: 24 }}>Address</SectionTitle>
            <FlexEx>
                <div className="sample">
                    <img src={contact_1} />
                    <div className="text">Hangzhou</div>
                </div>
                <div className="sample">
                    <img src={contact_2} />
                    <div className="text">Shanghai</div>
                </div>
            </FlexEx>
            <FlexEx>
                <div className="desc">
                    Room 205, Block 5, Haichuang Green Valley, Yuhang District, Hangzhou City,
                    Zhejiang Province
                </div>
                <div className="desc">
                    Block C (Zhengtong Road), Wanda Plaza, Wujiaochang, Yangpu District, Shanghai
                </div>
            </FlexEx>
        </>
    );
};

export default function Index({ location }: PageProps) {
    return (
        <Layout title="Contact Us - Netless">
            <Navigation invert />
            <Header />
            <Contact />
            <Info />
            <Footer location={location} />
        </Layout>
    );
}
