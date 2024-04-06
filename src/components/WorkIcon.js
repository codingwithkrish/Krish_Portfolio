import React from 'react';

const WorkIcon = ({ width, height, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            className={className}
        >
            <path d="M12 2L1 9l3 13h16l3-13zm8 11H4l-2-8 10-4 10 4-2 8z" />
        </svg>
    );
};

export default WorkIcon;
