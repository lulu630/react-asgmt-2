import { useState } from 'react'

const mockData = [
  { username: 'Ola Normann', email: 'ola.normann@norge.no' },
  { username: 'Torleif', email: 'torleif@kodehode.no' },
  { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
  { username: 'Sander', email: 'sander@kodehode.no' },
]


function Users() {
    const [users, setUsers] = useState(mockData)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")


    return (
    <section>
        <h2>Users</h2>
        <ul>
            {users.map((user) => (
                <li>
                    {user.username} - 
                    {user.email}
                </li>
                ))}
        </ul>

        <form action="">
            <label htmlFor="">Username
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>

            <label htmlFor="">Email
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value1)} />
            </label>
            
            <button type='submit'>
                Add user
            </button>


        </form>
    </section>
    )}

export default Users

