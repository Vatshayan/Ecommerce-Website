import { useState } from 'react'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(res => res.json())
            .then(res => {
                // 
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <label>Name:</label><br />
            <input value={name} onChange={(e) => setName(e.target.value)} /><br />

            <label>Email:</label><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />

            <label>Password:</label><br />
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} /><br />

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register
