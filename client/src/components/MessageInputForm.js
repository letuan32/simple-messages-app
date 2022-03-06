const {useEffect, useState} = require("react");
const {Form,Input, Button} = require("antd");
const {TextArea} = Input
const MessageInputForm = ({sendMessage}) =>{
    const [message, setMessage] = useState('')
    const [form] = Form.useForm();
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("Send")
        console.log(message)
        sendMessage(message)
        setMessage('')
        form.resetFields()
    }


    return(
        <Form form={form}>
            <Input.Group compact>
                <TextArea
                    value={message}
                    onChange={(e)=>setMessage(prevState => e.target.value)} />
                <Button type="primary" disabled={!message}  onClick={onSubmit}>Send</Button>
            </Input.Group>
        </Form>

    )
}

export  default  MessageInputForm