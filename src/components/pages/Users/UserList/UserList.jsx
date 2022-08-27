import React from 'react'
import './styles.css'

function UserList({ userlist }) {
    return (<><div>UserList</div>
        {/*  {userlist && userlist.map((user) => (
            <h1>{user.username}</h1>
        ))} */}

        {userList ? 'hello' : 'no users'}
    </>

    )
}

export default UserList