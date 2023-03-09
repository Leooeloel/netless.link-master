import classNames from "classnames";
import { Link, PageProps } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import {
    ButtonWrapper,
    CardWrapper,
    CustomersLogoWrapper,
    CustomersWrapper,
    Description,
    HeaderWrapper,
    PresentationWrapper,
    SectionTitle,
    Space,
    StickyWrapper,
} from ".";
import { ExternalLink } from "../../components/external-link";
import Layout from "../../components/layout";
import product_1 from "../../images/product_1.svg";
import product_2 from "../../images/product_2.svg";
import product_3 from "../../images/product_3.svg";
import product_4 from "../../images/product_4.svg";
import product_5 from "../../images/product_5.svg";
import product_6 from "../../images/product_6.svg";
import product_7 from "../../images/product_7.svg";
import product_agora from "../../images/product_agora.png";
import whiteboard from "../../images/whiteboard.png";
import { Features, Footer, Navigation } from "../index.en";
import { customers_logo } from "../index.zh-CN";

const Header: React.FC = () => (
    <HeaderWrapper>
        <div className="container">
            <div className="wrapper">
                <h1 className="title">Interactive whiteboard, customized for educational scenes</h1>
                <div className="desc">
                    Support multi-person real-time online drawing of graffiti, provide a full set of
                    classroom teaching aids, and document transcoding, whiteboard recording,
                    playback and other functions, providing you with a smooth online teaching
                    experience
                </div>
            </div>
            <div className="actions">
                <ExternalLink className="btn" to="https://console.netless.link">
                    Try it Now
                </ExternalLink>
                <ExternalLink className="btn" to="https://demo.netless.link">
                    Experience Now
                </ExternalLink>
            </div>
        </div>
    </HeaderWrapper>
);

const anchors = ["whiteboard", "replay", "dynamic", "static"];
const sectionNames = [
    "Interactive whiteboard",
    "Whiteboard cloud recording",
    "Document to web",
    "Document to picture",
];

const findClosestIndex = (e: number, a: number[]) => {
    let i = 0,
        d = Infinity;
    for (let j in a) {
        const f = a[j];
        const c = Math.abs(e - f);
        if (d > c) {
            d = c;
            i = Number(j);
        }
    }
    return i;
};

const Sticky: React.FC<{ location: Location }> = ({ location }) => {
    const [index, setIndex] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [sections, setSections] = useState<HTMLHeadingElement[]>([]);

    useEffect(() => {
        if (wrapperRef.current == null) return;
        const indexFromHash = anchors.indexOf(location.hash.substring(1));
        if (indexFromHash >= 0) setIndex(indexFromHash);
    }, []);

    const onClick = (i: number) => {
        setIndex(i);
        let target = document.getElementById(anchors[i]);
        if (target == null) return;
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <StickyWrapper>
            <div className="container sticky" ref={wrapperRef}>
                {anchors.map((id, i) => (
                    <Link
                        to={`#${id}`}
                        className={classNames({ active: index === i })}
                        onClick={() => onClick(i)}
                        key={id}
                    >
                        {sectionNames[i]}
                    </Link>
                ))}
            </div>
        </StickyWrapper>
    );
};

const Presentation: React.FC = () => {
    return (
        <>
            <SectionTitle>Interactive whiteboard, suitable for multiple scenarios</SectionTitle>
            <Description>
                Interactive whiteboards can be widely used in online language training, K12 subject
                tutoring, STEAM Classroom scenarios such as education and adult training break down
                the barriers of information transmission between teachers and students in online
                teaching. Teachers can demonstrate courseware, outline and mark the main points, and
                students can operate synchronously online, and intuitively feedback the mastery of
                the course
            </Description>
            <PresentationWrapper>
                <img src={whiteboard} />
            </PresentationWrapper>
            <Features />
        </>
    );
};

const Card: React.FC<{ src: string; title: string; desc: string }> = ({ src, title, desc }) => {
    return (
        <CardWrapper>
            <img src={src} />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </CardWrapper>
    );
};

const WhiteBoard: React.FC = () => {
    return (
        <>
            <a id={anchors[0]} className="anchor" />
            <SectionTitle id={`${anchors[0]}-tab`}>Interactive whiteboard</SectionTitle>
            <Card
                src={product_1}
                title="Ultra-low time delay makes your teaching experience smoother"
                desc="Netless self-developed engine, the whiteboard operation delay is as low as 100ms, and it is still smooth in a weak network environment, creating a globally interconnected, truly non-perceptual super interactive experience"
            />
            <Card
                src={product_2}
                title="Full platform support to help you quickly build your own application"
                desc="The interactive whiteboard SDK fully covers mainstream platforms such as iOS, Android, and Web, while providing complete supporting functional services. Full platform SDK support, helping developers of various platforms to quickly integrate, and efficiently link R&D and business, so that products can reach the market quickly"
            />
            <Card
                src={product_3}
                title="Expand freely, match and combine as needed"
                desc="互The mobile whiteboard can be used simultaneously with real-time audio, video, IM and other services, and you can freely combine and match as needed"
            />
            <ButtonWrapper>
                <ExternalLink to="https://console.netless.link">start immediately</ExternalLink>
            </ButtonWrapper>
        </>
    );
};

const Replay: React.FC = () => {
    return (
        <>
            <a id={anchors[1]} className="anchor" />
            <SectionTitle id={`${anchors[1]}-tab`}>Whiteboard cloud recording</SectionTitle>
            <Card
                src={product_4}
                title="Whiteboard cloud recording, record wonderful moments in class"
                desc="Cloud recording whiteboard, dynamic PPT, audio and video and custom events, real-time recording of the wonderful moments of the classroom"
            />
            <Card
                src={product_5}
                title="Recorded and replayed, review the content of the class anytime and anywhere"
                desc="Whiteboard cloud recording supports multi-terminal playback, forward and backward progress bars, easily presents the whole process of the classroom, and helps students review classroom content anytime, anywhere"
            />
            <Space />
        </>
    );
};

const Dynamic: React.FC = () => {
    return (
        <>
            <a id={anchors[2]} className="anchor" />
            <SectionTitle id={`${anchors[2]}-tab`}>
                Convert documents to web pages to make your courseware move
            </SectionTitle>
            <Card
                src={product_6}
                title="Convert documents to web pages to make your courseware move"
                desc="Supports converting PPTX into web pages. Compared with static conversion, dynamic conversion can retain the animation effect in the courseware, the information transmission is more complete, and the look and feel is better"
            />
            <Space />
        </>
    );
};

const Static: React.FC = () => {
    return (
        <>
            <a id={anchors[3]} className="anchor" />
            <SectionTitle id={`${anchors[3]}-tab`}>
                Convert documents to pictures, enrich your blackboard materials
            </SectionTitle>
            <Card
                src={product_7}
                title="Convert documents to pictures, enrich your blackboard materials"
                desc="Static document conversion, support to convert PPT, PPTX, DOC, DOCX, PDF and other format files into pictures to enrich your blackboard materials"
            />
        </>
    );
};

const Customers: React.FC = () => {
    return (
        <>
            <SectionTitle style={{ paddingBottom: 16 }}>Our Clients</SectionTitle>
            <Description>2,000+ choices of online education institutions</Description>
            <CustomersWrapper>
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
            </CustomersWrapper>
        </>
    );
};

export const CustomersOnlyLogo: React.FC = () => {
    return (
        <>
            <SectionTitle>Our Clients</SectionTitle>
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

export default function Index({ location }: PageProps) {
    return (
        <Layout title="Product - Netless">
            <Navigation />
            <Header />
            <Sticky location={location} />
            <Presentation />
            <WhiteBoard />
            <Replay />
            <Dynamic />
            <Static />
            {/* <Customers /> */}
            <CustomersOnlyLogo />
            <Footer location={location} />
        </Layout>
    );
}
