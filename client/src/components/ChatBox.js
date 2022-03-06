import {Button} from "antd";
import ConnectedUsers from "./ConnectedUsers";
import MessageInputForm from "./MessageInputForm";
import MessageContainer from "./MessageContainer";


const Chat = ({ sendMessage, messages, users, closeConnection }) =>
    <div>
    <div className='leave-room'>
        <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
    </div>
    <ConnectedUsers users={users} />
    <div className='chat'>
        <MessageContainer messages={messages} />
        <MessageInputForm sendMessage={sendMessage} />
    </div>
</div>

export default Chat;
