import React from 'react';

import './InfoBar.css';

const InfoBar = ({room}) => {
    return (
        <section>
            <h1>{room}</h1>            
        </section>
    )
};

export default InfoBar;