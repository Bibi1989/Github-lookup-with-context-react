import { useContext } from 'react'
import { context } from '../../Context/Context'
import DisplayUsers from './DisplayUsers'

const GetUsers = () => {
    const { state } = useContext(context)
    const { users } = state
    return (
        <div>
            {users.map(({login, avavtar_url, id, html_url}) => (<DisplayUsers />))}
        </div>
    )
}

export default GetUsers
