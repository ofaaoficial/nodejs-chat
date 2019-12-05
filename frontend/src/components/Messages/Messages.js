import React from 'react';
import ScrollTobottom from 'react-scroll-to-bottom';
import Message from "../Message/Message";

import './Messages.css';

const Messages = ({messages, name}) => {

    return (
        <ScrollTobottom>
            {
                messages.map((message, i) =>
                    <section key={i}>
                        <Message
                            message={message}
                            name={name}/>
                    </section>
                )
            }
        </ScrollTobottom>
    )
};

export default Messages;