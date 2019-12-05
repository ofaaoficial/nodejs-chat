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
                <section>
                    <p>{ReactEmoji.emojify(text)}</p>
                    <span>me</span>
                </section>
            )
            : (
                <section>
                    <p>{trimmedName}</p>
                    <p>{ReactEmoji.emojify(text)}</p>
                    <span>other</span>
                </section>
            )

    )
};

export default Message;