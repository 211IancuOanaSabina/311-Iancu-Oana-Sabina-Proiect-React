import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Assets/Styles/Profile.css'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            navigate('/')
        }catch{
            setError('Failed to log out')
        }
    }

    return (
        <>
        <div id="profile">
            <img src={ require("../Assets/Images/profile1.jpg") } id="profile" alt="logo" />
            <form id = "forms2">
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email: </strong>{ currentUser.email }
                <br></br>
                <Link id="update" to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                <div className="logout">
                <button type="submit" onClick={handleLogout}>Log out</button>
                </div>
            </form>
        </div>
        </>
    )
}
