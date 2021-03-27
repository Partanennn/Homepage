import React from 'react';

import Icon from './Icon';

interface ColumnBoxProps {
    icons: Array<{
        source?: any,
        text: string,
    }>,
    headerText: string,
}

const ColumnBox = ({
    headerText,
    icons,
}: ColumnBoxProps) => {
    const iconMap = icons.map(({
        source,
        text,
    }) => {
        return (
            <Icon 
                source={source}
                text={text}
            />
        );
    });

    return (
        <div className="card col-1-3">
            <h2 className="card__header">{headerText}</h2>
            <ul className="list">
                {iconMap}
            </ul>
        </div>
    )
}

ColumnBox.defaultProps = {
    source: ''
}

export default ColumnBox;