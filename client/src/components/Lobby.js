import {Form, Button, Input} from 'antd'
const { useState, useEffect } = require("react")


const Lobby = ({joinRoom}) =>{
    const [user, setUser] = useState();
    const [room, setRoom] = useState();



    const onSubmit = (e) =>{

        console.log(user)
        joinRoom(user,room)

    }

    return(
        <Form
        onFinish={onSubmit}
        >
            <Form.Item
                label="Name"
                name = "user"
                rules={[{required: true, message: "Input you nickname!!!"}]}
               
            >
                <Input onChange={e => setUser(e.target.value)} ></Input>
                
            </Form.Item>
            <Form.Item
                label="Room"
                name = "room"
                rules={[{required: true, message: "Input room!!!"}]}  
            >
                <Input onChange={e => setRoom(e.target.value)}></Input>
                
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>Submit</Button>
                
            </Form.Item>
        </Form>
    )
}

export default Lobby;