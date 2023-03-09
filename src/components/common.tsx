import { css } from "styled-components";

export const brks = {
    desktop: "1080px",
    tablet: "768px",
    phone: "425px",
};

export const clrs = {
    white: "#ffffff",
    black: "#111111",
    primary: "#1890ff",
    dark: "#444e60",
    gray: "#7a7b7c",
    border: "#dbe1ea",
    outline: "#3381FF",
    invalid: "#FF4136",
};

export const container = css`
    max-width: ${brks.desktop};
    margin: 0 auto;
`;

export const button = css`
    display: inline-block;
    color: inherit;
    border: 1px solid;
    border-radius: 23px;
    padding: 10px 50px;
    white-space: nowrap;
    text-align: center;
    transition: 200ms;
    outline: 0;
    &:hover {
        opacity: 0.6;
        background-color: ${clrs.primary};
        color: ${clrs.white};
        text-decoration: none;
    }
    &:active {
        opacity: 1;
    }
    @media (max-width: ${brks.tablet}) {
        border-radius: 19px;
        padding: 8px 40px;
        font-size: 14px;
    }
    @media (max-width: ${brks.phone}) {
        padding: 6px 30px;
    }
`;
