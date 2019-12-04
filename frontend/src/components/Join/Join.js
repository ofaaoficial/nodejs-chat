import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Join = () => {
    //Hooks of reactjs
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <section>
            <h1>Join</h1>
            <article><
                input type="text" onChange={(event) => setName(event.target.value)} placeholder="Name"/>
            </article>
            <article>
                <input type="text" onChange={(event) => setRoom(event.target.value)} placeholder="Room"/>
            </article>
            <Link
                onClick={event => (!name || !room) ? event.preventDefault() : null}
                to={`/chat?name=${name}&room=${room}`}>
                <button type="submit">Sign In</button>
            </Link>
        </section>
    )
};

export default Join;