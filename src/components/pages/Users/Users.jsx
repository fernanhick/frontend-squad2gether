import React, { useEffect, useState } from 'react'
import UserService from '../../../services/user.service'
import './styles.css'
import UserList from './UserList/UserList'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("https://www.squadhunt.co.uk/api/v1/users").then((response) => response.json())
            .then((data) => {
                setUsers(data)
                console.log(data)
            });


        /*         UserService.getUsers().then((res) => {
                    setUsers(res.data)
                }, (error) => {
                    console.log(error)
                })
         */
    }, [])
    return (
        <main className='users_main_section'>
            <header> <h1>Users</h1></header>
            {users && users.map((user) => (<div>{user.username}</div>))}
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