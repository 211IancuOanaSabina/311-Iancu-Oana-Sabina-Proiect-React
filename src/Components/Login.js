import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../Assets/Styles/Login.css';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setError("")
            console.log("Aici ajunge");
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            console.log(passwordRef.current.value)
            navigate("/home")
        }catch{
            console.log("acum ajungi aici?")
            setError('Failed to Log In')
        }
        console.log(error)
        setLoading(false)
    }

    return (
        <div id="register">
            <img src={ require("../Assets/Images/login.jpg") } id="register" alt="logo" />
            <form id = "forms" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div id="email">
                    <label id="email" >Email: </label>
                    <input type="email" ref = { emailRef } required/>
                
                </div>
                <div id="password">
                    <label id="password" >Password: </label>
                    <input type="password" ref = { passwordRef } required/>
                </div>
                <button type="submit" disabled={loading}>Log In</button>
                <div className="login">
                    Need an account? <Link id="register1" to="/SignUp">Sign Up</Link>
                </div>
                <div className="w-100 text-center mt-3">
                   <Link id="forgot" to="/forgot-password">Forgot password?</Link>
                </div>
            </form>
        </div>
    )
}
