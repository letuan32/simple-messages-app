import { useEffect, useRef } from 'react';

const MessageContainer = ({ messages }) => {
    const messageRef = useRef();
    console.log("messages", messages)

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
            console.log("change")
            console.log(messages)
        }
    }, [messages]);

    return <div ref={messageRef} >
        {messages.map((m, index) =>
            <div key={index} className='user-message'>
                <div className='message bg-primary'>{m.user}: {m.message}</div>
            </div>
        )}
    </div>
}

export default MessageContainer;
