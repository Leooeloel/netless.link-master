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
import { Footer, Navigation } from "../index.en";
import { Section } from "../price";
import { StickyWrapper } from "../product";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="wrapper">
                <h1>Join Netless and discover your value</h1>
                <p>
                    If you are looking for career opportunities, you might as well come to Netless
                </p>
            </div>
        </HeaderWrapper>
    );
};

const anchors = ["job", "info", "work"];
const sectionNames = ["Hot jobs", "Learn about Netless", "People in Netless"];

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
        title: "Android Development Engineer",
        subtitle: "Hangzhou",
        children: (
            <>
                {`Job Responsibilities：
1. Development and maintenance of Android client applications
2. Serving customers, helping customers access products, helping customers locate and solve problems

job requirements:
1. Proficiency in relevant languages and tools for Android application development
2. Familiar with Git or other VCS tools
3. Familiar with theoretical knowledge related to computer science
4. Outstanding customer communication skills, love to share, good document writing skills and habits
5. Have a good self-driving ability, good at thinking, to complete the work efficiently
6. Have a good teamwork ability and can accept the team's norms of coding style and working methods
7. Have good learning ability and study habits, willing to learn new technologies
8. Have passion for technology and recognize the "engineer" culture

If you wish, please submit your resume to `}
                <a href="mailto:hr@netless.link">hr@netless.link</a>
                {`, We will reply within three working days`}
            </>
        ),
    },
    {
        title: "iOS Development Engineer",
        subtitle: "Hangzhou",
        children: (
            <>
                {`Job Responsibilities：
1. Development and maintenance of iOS client applications
2. Serving customers, helping customers access products, helping customers locate and solve problems

job requirements:
1. Proficiency in relevant languages and tools for iOS application development
2. Familiar with Git or other VCS tools
3. Familiar with theoretical knowledge related to computer science
4. Outstanding customer communication skills, love to share, good document writing skills and habits
5. Have a good self-driving ability, good at thinking, to complete the work efficiently
6. Have a good teamwork ability and can accept the team's norms of coding style and working methods
7. Have good learning ability and study habits, and be willing to learn new technologies. 8. Have enthusiasm for technology and recognize the "engineer" culture

If you wish, please submit your resume to `}
                <a href="mailto:hr@netless.link">hr@netless.link</a>
                {`, We will reply within three working days`}
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
                    See More
                </ExternalLink>
            </div>
        </Section>
    );
};

const SectionInfo: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[1]}-tab`} style={{ display: index === 1 ? "block" : "none" }}>
            <SectionTitle>The company's mission and vision</SectionTitle>
            <SectionDesc>
                Provide high-quality whiteboard technical services to lower the threshold of online
                teaching and collaboration
            </SectionDesc>
        </Section>
    );
};

const SectionWork: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[2]}-tab`} style={{ display: index === 2 ? "block" : "none" }}>
            <NextSectionTitle>Company benefits</NextSectionTitle>
            <SectionDesc style={{ marginBottom: 50 }}>
                In addition to fair and just opportunities for growth and development space for
                self-worth, Netless Can also give you a lot of "real" treatment
            </SectionDesc>
            <Grid>
                <div className="item">
                    Salary beyond the equivalent position in the local industry
                </div>
                <div className="item">Endless snacks</div>
                <div className="item">Perfect five social insurance and one fund system</div>
                <div className="item">Flexible working hours</div>
                <div className="item">Salary adjustment twice a year</div>
                <div className="item">Weekend weekend</div>
            </Grid>
            <Flex>
                <div className="sample">
                    <img src={join_wide} />
                </div>
            </Flex>
            <NextSectionTitle>Growth system</NextSectionTitle>
            <CardsWrapper>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">Entry guide</div>
                        <div className="text">
                            Help you understand the company's internal environment in the shortest
                            time, including the use of efficiency tools, internal structure, etc.,
                            to help you quickly integrate into the big family
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_2} />
                    <div className="right">
                        <div className="title">Newcomer training</div>
                        <div className="text">
                            Netless The values, products, as well as our product thinking and
                            industry perspective, the first lesson of the induction training will
                            let you know us more truly
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_3} />
                    <div className="right">
                        <div className="title">Daniel Tutor</div>
                        <div className="text">
                            Newcomers will be guided by one-to-one mentors to help you get started
                            quickly
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_4} />
                    <div className="right">
                        <div className="title">Roundtable Forum</div>
                        <div className="text">
                            There will be internal technology sharing sessions every week to share
                            opinions and grow together
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_5} />
                    <div className="right">
                        <div className="title">Flat management</div>
                        <div className="text">
                            The company advocates self-driven management and maximizes their own
                            advantages and specialties
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_6} />
                    <div className="right">
                        <div className="title">Incentives</div>
                        <div className="text">
                            Everyone has a standard amount of team building fee every quarter, free
                            organization for eating, drinking and playing, and independent
                            participation
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
        <Layout title="Join Us - Netless">
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
