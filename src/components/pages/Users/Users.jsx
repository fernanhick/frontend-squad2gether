import React, { useEffect, useState } from 'react'
import UserService from '../../../services/user.service'
import './styles.css'
import UserList from './UserList/UserList'
import UserSearchBar from './UserSearchBar/UserSearchBar'

const Users = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {

        fetch("https://www.squadhunt.co.uk/api/v1/users").then((response) => response.json())
            .then((data) => {
                setUsers(data)
                console.log(data)
            });
    }, [])

    const handleSearch = (event, input) => {
        event.preventDefault()
        setSearch(input)
        console.log(input)
    }

    return (
        <main className='users_main_section'>
            <header> <h1>Users</h1></header>
            {/*             {users && users.map((user) => (<div>{user.username}</div>))}
            
 */} <UserSearchBar handleSearch={handleSearch} />
            <UserList userlist={search} />
            {/* 1. Parent Component For users Display */}
            {/* 2. Child Components for  Users List
                ¬ Child component User List --> SearchBar
                ¬ Child component User List --> List of User
                    ¬ Child Component User List --> User Object  */}
        </main>
    )
}

export default Users