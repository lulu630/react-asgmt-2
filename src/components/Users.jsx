import { useState } from 'react'

const mockData = [
  { username: 'Ola Normann', email: 'ola.normann@norge.no' },
  { username: 'Torleif', email: 'torleif@kodehode.no' },
  { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
  { username: 'Sander', email: 'sander@kodehode.no' },
]


function Users() {
    const [users, setUsers] = useState(mockData)

    return (
    <section>
        <h2>Users</h2>
    </section>
    )
}

export default Users

