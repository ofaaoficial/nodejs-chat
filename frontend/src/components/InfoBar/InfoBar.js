import React from 'react';
import {Link} from "react-router-dom";

import './InfoBar.css';

const InfoBar = ({room}) => (
    <section className="InfoBar">
        <h1>{room}</h1>
        <Link to={'/'} className="close">
            &times;
        </Link>
    </section>
);

export default InfoBar;