import React, { useContext, useState } from 'react'
import { context } from '../Context/Context'

const Search = () => {
    const [text, setText] = useState("");
    const { getUsers } = useContext(context)

    const handleInput = e => {
        // getUsers(e.target.value)
        setText(e.target.value)
    }

    const handleSearch = e => {
        e.preventDefault()
        getUsers(text)
        setText('')
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={text} onChange={handleInput} />
            </form>
        </div>
    )
}

export default Search
