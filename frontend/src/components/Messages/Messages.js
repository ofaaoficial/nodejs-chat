import React from 'react';
import Message from "../Message/Message";
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Messages = ({messages, name}) => {

    return (
            <ScrollToBottom className="list-messages" followButtonClassName="list-messages-follow-button">
            {
                messages.map((message, i) =>
                        <Message
                            message={message}
                            name={name}
                            key={i}
                        />
                )
            }
            </ScrollToBottom>
    )
};

export default Messages;