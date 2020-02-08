import React, { useContext, useState } from 'react'
import { dispatch, context } from '../Context/Context'
import { SEARCH } from '../Context/type'

const Search = () => {
    const [text, setText] = useState("");
    const { dispatch, getUsers } = useContext(context)

    const handleInput = e => {
        setText(e.target.value)
    }

    const handleSearch = e => {
        e.preventDefault()
        dispatch({ type: SEARCH, payload: text })
        getUsers()
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
