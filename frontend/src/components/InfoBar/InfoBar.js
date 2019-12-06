import React from 'react';

import './InfoBar.css';

const InfoBar = ({room}) => (
    <section className="room-information">
        <h1>{room}</h1>
    </section>
);

export default InfoBar;