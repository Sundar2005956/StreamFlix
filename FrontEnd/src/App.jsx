
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import "./App.css";

import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
import AddMovie from "./pages/AddMovie";
import Profile from "./pages/Profile";
import WatchHistory from "./pages/WatchHistory";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";

function App() {
    const [user, setUser] = useState(() =>
        JSON.parse(localStorage.getItem("user"))
    );

    const isAdmin = user?.roleid?.rolename === "ADMIN";

    return (
        <BrowserRouter basename="/StreamFlix">

            {isAdmin ? (
                <AdminNavbar onLogout={() => setUser(null)} />
            ) : (
                <Navbar />
            )}

            <div className="navbar-spacer"></div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userhome" element={<UserHome />} />

                <Route path="/login" element={<Login onLogin={setUser} />} />
                <Route path="/register" element={<Register />} />

                <Route path="/movies" element={<Movie />} />
                <Route path="/movies/:id" element={<MovieDetails />} />

                <Route path="/admin" element={<AdminHome />} />
                <Route path="/add-movie" element={<AddMovie />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/history" element={<WatchHistory />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
