import React from 'react';

const TechTag = ({ name, color }) => {
    return (
        <div className={`px-3 py-1 text-sm font-semibold text-white rounded-full inline-block ${color}`}>
            <p>{name}</p>
        </div>
    );
};

export default TechTag;