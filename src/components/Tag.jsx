import React from 'react'
// import { classNames } from 'primereact/utils'

const Tag = ({label, color}) => {
    const bg = `bg-${color}-100`;
    const border = `border-${color}-500`;
    const text = `text-${color}-500`;

    return (
        <div className={`pl-3 pr-3 mr-3 flex items-center justify-center h-8 rounded-full border-2 border-solid ${bg} ${border}` }>
            <div className={`align-middle font-medium whitespace-nowrap ${text}`}>
                {label}
            </div>
        </div>
    );
};

export default Tag