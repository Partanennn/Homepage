import React from 'react';

interface IconProps {
    source?: any,
    text: string,
};

const Icon = ({
    source,
    text,
}: IconProps) => {
    return (
        <div className="list__li-container">
            <img src={source} className="list__icon" alt={text}></img>
            <li className="list__li">{text}</li>
        </div>
    );
};

Icon.defaultProps = {
    source: '',
};

export default Icon;