import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import UserBoard from './components/Boards/UserBoard/UserBoard'
import Projects from './components/Projects/Projects'
import Project from './components/Projects/Project/Project'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import FootBar from './components/FootBar/FootBar'

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
            <Route path='user' element={<UserBoard />} />
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
