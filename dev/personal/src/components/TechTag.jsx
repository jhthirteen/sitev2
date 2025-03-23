import React from 'react';

const TechTag = ({ name, color }) => {
    return (
        <span
            classname={`px-3 py-1 text-sm font-semibold text-white rounded-full ${color}`}
        >
            {name}
        </span>
    );
};

export default TechTag;