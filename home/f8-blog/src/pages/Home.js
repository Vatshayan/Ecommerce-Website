import { useEffect, useState } from 'react'

function Home({ history }) {
    const [user, setUser] = useState()
    
    useEffect(() => {
        const token = window.localStorage.token
        if (!token) {
            history.push('/login')
            return
        }

        fetch('http://localhost:3000/api/auth/current-user', {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            {user && (
                <div>
                    <h1>Hi: {user.name}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Home
