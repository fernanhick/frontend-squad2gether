import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import UserBoard from "./components/Boards/UserBoard/UserBoard";
import ModeratorBoard from "./components/Boards/ModeratorBoard/ModeratorBoard";
import AdminBoard from "./components/Boards/AdminBoard/AdminBoard";
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
            </Routes>
        </div>
    );
}

export default App;
