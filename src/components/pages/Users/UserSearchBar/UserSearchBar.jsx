import React, { useState } from 'react'

function UserSearchBar({ handleSearch }) {

    const [user, setUser] = useState('')

    const handleLocation = (e) => {
        setUser(e.target.value)
    }

    return (
        <form
            onSubmit={(e) => handleSearch(e, user)}
        >
            <input

                name='searchBar'
                type='text'
                onChange={handleLocation}
                autoComplete='off'
            />
            <button >Search</button>
        </form>
    )
}

export default UserSearchBar