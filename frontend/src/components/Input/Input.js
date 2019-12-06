import React from 'react';

import './Input.css';
import sendIcon from './send.png';

const Input = ({message, setMessage, sendMessage}) => (
    <form className="input-message">
        <input
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            placeholder="Type a message..."
            autoFocus
            className="form-control"
        />
        <button
            className="btn btn-send-message"
            onClick={event => sendMessage(event)}>
            <img src={sendIcon} alt="Send icon"/>
        </button>
    </form>
);


export default Input;