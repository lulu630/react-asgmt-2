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

    function handleSubmit(event) {
        event.preventDefault()

        const newUser = {
            username: username,
            email: email,
        }

         setUsers([...users, newUser])
         setUsername("")
         setEmail("")

    }

    return (
    <section className='user-section'>
        <h2>Users</h2>
        <ul className='user-list'>
            {users.map((user) => (
                <li key={user.email}>
                    {user.username} 
                    {user.email}
                </li>
                ))}
        </ul>

        <form onSubmit={handleSubmit}>
            <label>Username
                <input 
                type='text'
                placeholder='John Doe'
                value={username} 
                onChange={(event) => setUsername(event.target.value)} 
                required/>
            </label>

            <label>Email
                <input 
                type='email' 
                placeholder='johndoe@email.com'
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                required/>
            </label>

            
            <button type='submit'>
                Add user
            </button>


        </form>
    </section>
    )}

export default Users

