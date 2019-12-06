import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
    let isSendByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName)
        isSendByCurrentUser = true;

    return (
        isSendByCurrentUser
            ? (
                <section className="message send">
                    <p>{ReactEmoji.emojify(text)}</p>
                </section>
            )
            : (
                <section className="message receive">
                    <p className="message-username">{trimmedName}</p>
                    <p>{ReactEmoji.emojify(text)}</p>
                </section>
            )
    )
};

export default Message;