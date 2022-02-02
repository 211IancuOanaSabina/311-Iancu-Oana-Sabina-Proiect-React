import React from 'react';
import {BrowserRouter as Router, Route,  Routes} from  'react-router-dom';
import Home from '../Pages/Home';
import Album from '../Pages/Album';
import Profile from './Profile';
import Error from '../Pages/Error';
import SignUp from './SignUp';
import { AuthProvider } from '../Context/AuthContext';
import Login from './Login';
import HomeAuth from '../Pages/HomeAuth'
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<HomeAuth/>}/>
          <Route path="/game" element={<Album/>}/>
          <Route path="/SignUp" element = {<SignUp/>}></Route>
          <Route path="/Login" element = {<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/update-profile" element={<UpdateProfile/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </Router >
    </AuthProvider>
  );
}

export default App;
