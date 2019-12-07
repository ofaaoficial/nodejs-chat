import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = () => {
    //Hooks of reactjs
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <section className="join-form">
            <h1>Datos de acceso</h1>
            <article className="form-group">
                <input
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Nombre"
                    className="form-control"
                />
            </article>
            <article className="form-group">
                <input
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                    placeholder="Sala"
                    className="form-control"
                />
            </article>
            <Link
                onClick={event => (!name || !room) ? event.preventDefault() : null}
                to={`/chat?name=${name}&room=${room}`}>
                <button
                    className="btn btn-send"
                    type="submit">
                    Ingresar
                </button>
            </Link>
        </section>
    )
};

export default Join;