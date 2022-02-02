import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../Assets/Styles/SignUp.css';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError("")
            console.log("Aici ajunge");
            setLoading(true)
            console.log(passwordRef.current.value)
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log(passwordRef.current.value)
            navigate("/home")
        }catch{
            console.log("acum ajungi aici?")
            setError('Failed to create an account')
        }
        console.log(error)
        setLoading(false)
    }

    return (
        <div id="register">
            <img src={ require("../Assets/Images/register.jpg") } id="register" alt="logo" />
            <form id = "forms" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div id="email">
                    <label id="email" >Email: </label>
                    <input type="email" ref = { emailRef } required/>
                
                </div>
                <div id="password">
                    <label id="password" >Password: </label>
                    <input type="password" ref = { passwordRef } required/>
                </div>
                <div id="passconfirm">
                    <label id="passconfirm" >Password Confirmation: </label>
                    <input type="password" ref = { passwordConfirmRef } required/>
                </div>
                <button type="submit" disabled={loading}>Sign Up</button>
                <div className="login1">
                    Already have an account? <Link id="login1" to="/Login">Log In</Link>
                </div>
            </form>
        </div>
    )
}
