import { useEffect, useState } from 'react'

function Login({ history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = window.localStorage.token
        if (token) {
            history.push('/')
        }
    }, [])

    const handleSubmit = () => {
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res?.data?.token) {
                    window.localStorage.setItem('token', res.data.token)
                    alert('Đăng nhập thành công!')
                    history.push('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <label>Email:</label><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />

            <label>Password:</label><br />
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} /><br />

            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
