import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import UserBoard from './components/Boards/UserBoard/UserBoard';
import ModeratorBoard from './components/Boards/ModeratorBoard/ModeratorBoard';
import AdminBoard from './components/Boards/AdminBoard/AdminBoard';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import './App.css';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<UserBoard />} />
        <Route path="/mod" element={<ModeratorBoard />} />
        <Route path="/admin" element={<AdminBoard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
