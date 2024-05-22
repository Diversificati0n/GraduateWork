import React from 'react';

const SocialLink = ({ href, svgPath, label, width = "40", height = "auto" }) => (
    <li className="icon">
        <a href={href} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 448 512">
                <path d={svgPath} />
            </svg>
            {label}
        </a>
    </li>
);

export default SocialLink;
