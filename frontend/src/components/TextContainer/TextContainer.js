import React from 'react';

import './TextContainer.css';

const TextContainer = ({users}) => {
    return(
        <section className="room-information">
            <h2>Lista de usuarios</h2>
            <ul>
            {
                users ? (
                    users.map(({name}) => <li key={name}>{name}</li> )
                ) : null
            }
            </ul>
        </section>
    )
}

export default TextContainer