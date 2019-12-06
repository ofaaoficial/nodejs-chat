import React, {useEffect, useRef} from 'react';
import Message from "../Message/Message";

import './Messages.css';

const Messages = ({messages, name}) => {

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(scrollToBottom, [messages]);
    return (
            <section className="list-messages">
            {
                messages.map((message, i) =>
                        <Message
                            message={message}
                            name={name}
                            key={i}
                        />
                )
            }
            <article ref={messagesEndRef}/>
            </section>
    )
};

export default Messages;