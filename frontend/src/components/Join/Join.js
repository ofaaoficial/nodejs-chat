import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = () => {
    //Hooks of reactjs
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <section className="join-form">
            <h1>Join</h1>
            <article className="form-group">
                <input
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                    className="form-control"
                />
            </article>
            <article className="form-group">
                <input
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                    placeholder="Room"
                    className="form-control"
                />
            </article>
            <Link
                onClick={event => (!name || !room) ? event.preventDefault() : null}
                to={`/chat?name=${name}&room=${room}`}>
                <button
                    className="btn btn-send"
                    type="submit">
                    Sign In
                </button>
            </Link>
        </section>
    )
};

export default Join;