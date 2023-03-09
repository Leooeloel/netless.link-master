import React from "react";
import { ExternalLink } from "./external-link";

interface GitHubAvatarProps {
    src?: string;
    id: string;
    display?: string;
}

export const GitHubAvatar: React.FC<GitHubAvatarProps> = ({ src, id, display = id }) => {
    return (
        <ExternalLink to={`https://github.com/${id}`}>
            <img src={src ?? `https://github.com/${id}.png`} alt={display} title={display} />
        </ExternalLink>
    );
};
