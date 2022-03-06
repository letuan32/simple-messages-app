
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import axios from  'axios'


import Lobby from './components/Lobby';

import {useState} from "react";
import ChatBox from "./components/ChatBox";

function App() {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState();
    
    const joinRoom = async (user,room)=>{
        try{
            console.log("werew")
            console.log(user)
            console.log(room)

            const connection = new HubConnectionBuilder()
                .withUrl("http://localhost:8081/chat",
                    )
                .configureLogging(LogLevel.Information)
                .build();
            connection.on("ReceiveMessage", (user, message)=>{
                setMessages(messages=> [...messages, {user, message}])
            })
            connection.on("UsersInRoom", (users) => {
                setUsers(users);
            });

            connection.onclose(e => {
                setConnection();
                setMessages([]);
                setUsers([]);
            });

            await connection.start();
            await connection.invoke("JoinRoom", { user, room });
            setConnection(connection);
        }catch (e) {
            console.log(e);
        }

    }
    
    

    const sendMessage = async (message) => {
        try {
            await connection.invoke("SendMessage", message);
        } catch (e) {
            console.log(e);
        }
    }

    const closeConnection = async () => {
        try {
            await connection.stop();
            console.log("stop")
        } catch (e) {
            console.log(e);
        }
    }



    return (
    <>
        <div className='app'>
            <h2>MyChat</h2>
            <hr className='line' />
            {!connection
                ? <Lobby joinRoom={joinRoom} />
                : <ChatBox sendMessage={sendMessage} messages={messages} users={users} closeConnection={closeConnection} />}
        </div>

    </>




  );
}

export default App;
