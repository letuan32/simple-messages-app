
import {Divider} from "antd";

const ConnectedUsers = ({ users }) =>
    (
        <>

        <div className='user-list'>
            <b>Connected Users</b>
            {users.map((u, idx) => <div key={idx}>{u}</div>)}

        </div>
            <hr
                style={{
                    height: 2
                }}
            />
            </>
        )


export default ConnectedUsers;
