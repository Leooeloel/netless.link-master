import { Link } from "gatsby";
import React from "react";
import { Wrapper } from ".";
import Layout from "../../components/layout";
import image from "../../images/404.svg";

export default function Index() {
    return (
        <Layout title="404 - Netless">
            <Wrapper>
                <img src={image} />
                <div className="right">
                    <h1>Sorry, the page you want to visit does not exist</h1>
                    <p>The link address may be wrong, the page has been removed or hidden</p>
                    <Link to="/en/">Back to homepage</Link>
                </div>
            </Wrapper>
        </Layout>
    );
}
