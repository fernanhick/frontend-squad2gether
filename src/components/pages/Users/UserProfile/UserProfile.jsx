import React from 'react'
import { useParams } from 'react-router-dom'

function UserProfile({ userData }) {

    const params = useParams()

    return (
        <div>UserProfile</div>
    )
}

export default UserProfile