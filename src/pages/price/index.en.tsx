import classNames from "classnames";
import { Link, PageProps } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { Section } from ".";
import Accordion from "../../components/accordion";
import { ExternalLink } from "../../components/external-link";
import { InputRange } from "../../components/input-range";
import Layout from "../../components/layout";
import { Footer, Navigation } from "../index.en";
import { customers_logo } from "../index.zh-CN";
import { CustomersLogoWrapper, HeaderWrapper, SectionTitle, StickyWrapper } from "../product";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="container">
                <div className="wrapper">
                    <h1 className="title">Price</h1>
                    <div className="desc">
                        Cancel monthly function fee, pay as you go, dynamic billing on demand
                    </div>
                </div>
                <div className="actions">
                    <ExternalLink className="btn" to="https://console.netless.link">
                        Try it now
                    </ExternalLink>
                </div>
            </div>
        </HeaderWrapper>
    );
};

const anchors = ["plan", "calc", "faq"];
const sectionNames = ["Price plan", "Calculator", "FAQ"];

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
            <SectionTitle>Price</SectionTitle>
            <p className="desc">
                Cancel monthly function fee, pay as you go, dynamic billing on demand
            </p>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Billing item</th>
                            <th>Service Description</th>
                            <th>unit price</th>
                            <th>Billing method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Two-way real-time interaction</td>
                            <td>
                                Support multiple people to draw graffiti online at the same time,
                                provide a full set of brush marking tools, and share ideas in real
                                time
                            </td>
                            <td>1.4 $ / 1000 minute</td>
                            <td>Daily billing</td>
                        </tr>
                        <tr>
                            <td>One-way live subscription</td>
                            <td>
                                Support large-scale online public classes, one person will give a
                                lecture, thousands or 10,000 people will watch it in real time, and
                                deliver information efficiently
                            </td>
                            <td>0.7 $ / 1000 minute</td>
                            <td>Daily billing</td>
                        </tr>
                        <tr>
                            <td>Whiteboard cloud recording</td>
                            <td>
                                Whiteboard recording service allows you to record the complete
                                process of each class, and supports business scenarios such as
                                classroom quality analysis and student review
                                <br />
                                <br />
                                Support the ability to simultaneously record each channel of audio
                                and video and the whiteboard screen separately, and align the audio
                                and video with the audio and video of the whiteboard
                            </td>
                            <td>2 $ / 1000 minute</td>
                            <td>Daily billing</td>
                        </tr>
                        <tr>
                            <td>Document to web</td>
                            <td>
                                Document dynamic transcoding supports transcoding pptx into HTML5,
                                which can retain the dynamic effects in pptx
                            </td>
                            <td>100 $ / month</td>
                            <td>Monthly billing</td>
                        </tr>
                        <tr>
                            <td>Document to picture</td>
                            <td>
                                Document static transcoding supports ppt / pptx / doc / docx / pdf
                                Transcode courseware in multiple formats into static pictures, and
                                display the courseware on the whiteboard
                            </td>
                            <td>20 $ / month</td>
                            <td>Monthly billing</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SectionTitle>Billing example</SectionTitle>
            <p className="desc">Always let you know where the money is spent</p>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Billing item</th>
                            <th>Billing example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Two-way real-time interaction</td>
                            <td>
                                There are 2 teachers and students in a section, 45 hours Minutes in
                                a small class, where the teacher and students interact throughout
                                the whole process, the two-way interaction duration: 45 * 2 = 90
                                Minutes; cost: (90 * 1.4) / 1,000 = 0.126 $
                            </td>
                        </tr>
                        <tr>
                            <td>One-way live subscription</td>
                            <td>
                                A total of 1,000 teachers and students, 45 hours Minutes of open
                                class, the teacher interacts the whole process, the students watch
                                the whole process, the two-way interaction time: 1 * 45 = 45
                                minutes, one-way subscription duration: 999 * 45 = 44955 minutes;
                                total cost: (45 * 1.4 + 44,955 * 0.7) / 1,000 = 31.5315 $
                            </td>
                        </tr>
                        <tr>
                            <td>Whiteboard cloud recording</td>
                            <td>
                                To record a 45-minute course, the cost: (1 * 45 * 2) / 1,000 = 0.09
                                $. Note that whiteboard recording does not include audio and video
                                recording
                            </td>
                        </tr>
                        <tr>
                            <td>Document to web</td>
                            <td>
                                The default configuration is 100 $ a month; if the transcoding
                                service requires additional configuration, multiply the monthly fee
                                by the increase multiple
                            </td>
                        </tr>
                        <tr>
                            <td>Document to picture</td>
                            <td>
                                The default configuration is 20 $ a month; if the transcoding
                                service needs additional configuration, multiply the monthly fee by
                                the increase multiple
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SectionTitle>Our Client</SectionTitle>
            <p className="desc" style={{ marginBottom: 50 }}>
                2,000+ choices of online education institutions
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
    const playerPrice = (players[0] * 1.4 * minutes[0]) / 1000;
    const subscriberPrice = (subscribers[0] * 0.7 * minutes[0]) / 1000;
    const whitePrice = white ? (2 * minutes[0]) / 1000 : 0;
    const price = playerPrice + subscriberPrice + whitePrice;
    const users = players[0] + subscribers[0];
    const average = users > 0 ? price / users : 0;

    return (
        <Section id={`${anchors[1]}-tab`} style={{ display: index === 1 ? "block" : "none" }}>
            <SectionTitle>
                Enter course information and calculate the cost of the whiteboard
            </SectionTitle>
            <div className="grid">
                <div className="entry">Whether to enable whiteboard recording</div>
                <div className="span3">
                    <input
                        id="wb_yes"
                        type="radio"
                        name="whiteboard"
                        defaultChecked
                        onChange={(e) => setWhite(e.target.checked)}
                    ></input>
                    <label htmlFor="wb_yes">Yes</label>
                    <input
                        id="wb_no"
                        type="radio"
                        name="whiteboard"
                        onChange={(e) => setWhite(!e.target.checked)}
                    ></input>
                    <label htmlFor="wb_no">No</label>
                </div>
                <div className="entry">Course duration</div>
                {InputRange(500, minutes, setMinutes, " (minute)")}
                <div className="entry">Total number of interactions</div>
                {InputRange(500, players, setPlayers, " (people)")}
                <div className="entry">Total number of subscribers</div>
                {InputRange(10000, subscribers, setSubscribers, " (people)")}
            </div>
            <hr />
            <div className="flex">
                <div className="entry">Total cost</div>
                <div className="right">
                    <div className="price">$ {price.toFixed(2)}</div>
                    <small>Average usage cost only {average.toFixed(2)} $ / person</small>
                </div>
            </div>
            <div className="note">
                Note: The current fee does not include transcoding service, which is purchased
                monthly
            </div>
        </Section>
    );
};

const faq = [
    {
        title: "What are the components of the whiteboard cost?",
        content:
            "Whiteboard fee = two-way real-time interaction fee + one-way live broadcast subscription fee + whiteboard cloud recording fee + document transfer fee + document transfer fee",
    },
    {
        title: "How is the whiteboard billed?",
        content:
            "Two-way real-time interaction, one-way live subscription, whiteboard cloud recording, these three services are billed according to the length of time, the billing formula: cost = unit price * duration of use. For each active (heartbeat) long connection, one point will be hit every minute, and the sum of the accumulated points is the total usage time of the customer.",
    },
    {
        title: "Do you start charging as soon as the room is created?",
        content: "No, there is no charge if there is no client connected in the created room.",
    },
    {
        title: "If the student does not leave the room, will the bill always be charged?",
        content:
            "Will be billed, because the bottom layer of the whiteboard is only measured according to whether there is an active long connection. You can call ban-api at the end of the course to force everyone to leave the room to avoid additional costs.",
    },
    {
        title: "How to exit the room?",
        content: "You can call the disconnect() method under the room object to exit the room.",
    },
    {
        title: "What happens to the whiteboard if disconnect() is not called?",
        content:
            "If the client has actually disconnected, it will go through a 30-second timeout logic, and then stop charging.",
    },
    {
        title: "How to choose the most suitable whiteboard usage?",
        content:
            "The following three suggestions can help you control costs: 1. The total number of people interacting in real time in the room should not exceed 50. After reaching 50 people, it is recommended to turn on the one-way subscription mode; 2. Call disconnect() when leaving the room; 3. Call after the course is over ban-api forces everyone to quit.",
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
        <Layout title="Price - Netless">
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
