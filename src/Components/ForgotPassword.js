import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../Assets/Styles/Login.css';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setError("")
            setMessage("")
            console.log("Aici ajunge");
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
            //console.log(passwordRef.current.value)
        }catch{
            console.log("acum ajungi aici?")
            setError('Failed to reset password')
        }
        console.log(error)
        setLoading(false)
    }

    return (
        <div id="register">
            <img src={ require("../Assets/Images/recover.jpg") } id="register" alt="logo" />
            <form id = "forms" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Password Reset</h2>
                {message && <Alert variant="succes">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <div id="email">
                    <label id="email" >Email: </label>
                    <input type="email" ref = { emailRef } required/>
                
                </div>
                <button type="submit" disabled={loading}>Reset Password</button>
                <div className="login">
                    Need an account? <Link id="register1" to="/SignUp">Sign Up</Link>
                </div>
                <div className="w-100 text-center mt-3">
                   <Link id="forgot" to="/Login">Login</Link>
                </div>
            </form>
        </div>
    )
}
