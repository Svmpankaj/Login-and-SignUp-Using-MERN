import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <h1>login</h1>
            <form action="POST">
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' name='' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' name='' />

                <input type="submit" />
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Signup Page</Link>
        </div>
    )
}

export default Login
