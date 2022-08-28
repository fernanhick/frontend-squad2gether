import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import Profile from './components/pages/Profile/Profile'
import UserBoard from './components/pages/Boards/UserBoard/UserBoard'
import Projects from './components/pages/Projects/Projects'
import Project from './components/pages/Projects/Project/Project'
import NavBar from './components/utils/NavBar/NavBar'
import About from './components/pages/About/About'
import FootBar from './components/utils/FootBar/FootBar'
import Users from './components/pages/Users/Users'
import UserProfile from './components/pages/Users/UserProfile/UserProfile'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='about' element={<About />} />
            <Route path='profile' element={<Profile />} />
            <Route path='users' element={<Users />} />
            <Route path='user' element={<UserBoard />} />
            <Route path='userprofile/:id' element={<UserProfile />} />
            <Route path='projects' element={<Projects />} />
            <Route path='project/:id' element={<Project />} />
        </Routes>
        <FootBar />
    </BrowserRouter>
    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
