import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from "../InfoBar/InfoBar";
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from "../TextContainer/TextContainer";

import './Chat.css';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, error => {
            if(error)
                alert(error)
        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({users}) => {
            setUsers(users);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();

        if(message)
            socket.emit('sendMessage', message, () => setMessage(''));
    };

    return (
        <section className="chat">
            <InfoBar room={room}/>
            <Messages
                messages={messages}
                name={name}/>
            <Input 
                message={message} 
                setMessage={setMessage} 
                sendMessage={sendMessage}/>

            <TextContainer users={users}/>
        </section>
    )
};

export default Chat;