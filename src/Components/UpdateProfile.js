import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../Assets/Styles/SignUp.css';
import { useAuth, AuthProvider } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        const promises = []
        if(emailRef.current.value !== currentUser.email){
            promises.push(AuthProvider.updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value !== currentUser.password){
            promises.push(AuthProvider.updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate('/home')
        }).catch(() => {
            setError('Failed to update account')
        }).finally()

        try{
            setError("")
            console.log("Aici ajunge");
            setLoading(true)
            console.log(passwordRef.current.value)
            //await signup(emailRef.current.value, passwordRef.current.value)
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
            <img src={ require("../Assets/Images/profile.jpg") } id="register" alt="logo" />
            <form id = "forms" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div id="email">
                    <label id="email" >Email: </label>
                    <input type="email" ref = { emailRef } required defaultValue={currentUser.email}/>
                
                </div>
                <div id="password">
                    <label id="password" >Password: </label>
                    <input type="password" ref = { passwordRef } placeholder='Leave blank to keep the same'/>
                </div>
                <div id="passconfirm">
                    <label id="passconfirm" >Password Confirmation: </label>
                    <input type="password" ref = { passwordConfirmRef } placeholder='Leave blank to keep the same'/>
                </div>
                <button type="submit" disabled={loading}>Update</button>
                <div className="login">
                    Already have an account? <Link id="login1" to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}