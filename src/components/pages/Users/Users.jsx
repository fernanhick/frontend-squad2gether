import React from 'react'
import './styles.css'
import UserList from './UserList/UserList'

const Users = () => {
    return (
        <main className='users_main_section'>
            <header> <h1>Users</h1></header>

            <UserList />
            {/* 1. Parent Component For users Display */}
            {/* 2. Child Components for  Users List
                ¬ Child component User List --> SearchBar
                ¬ Child component User List --> List of User
                    ¬ Child Component User List --> User Object  */}
        </main>
    )
}

export default Users