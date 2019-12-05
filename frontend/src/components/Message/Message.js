import React from 'react';

import './Message.css';

const Message = ({message: {user, text}, name}) => {
    let isSendByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();


    if (user === trimmedName)
        isSendByCurrentUser = true;


    return (
        isSendByCurrentUser
            ? (
                <section>
                    <p>{text}</p>
                    <span>me</span>
                </section>
            )
            : (
                <section>
                    <p>{trimmedName}</p>
                    <p>{text}</p>
                    <span>other</span>
                </section>
            )

    )
};

export default Message;