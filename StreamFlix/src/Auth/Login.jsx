import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://streamflix-production-c42cb2b9.up.railway.app/api/users/login", user
            );

            localStorage.setItem("user", JSON.stringify(response.data));

            alert("Login Successful!");
            
    window.location.href = "/";
        } catch (error) {
            alert("Invalid Email or Password!");
        }
    };

    return (
        <div className="container mt-5">
            <div className="col-md-5 mx-auto card bg-dark text-white p-4">
                <h2 className="text-danger text-center">Login</h2>

                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3" name="email"
                        type="email" placeholder="Email" value={user.email}
                        onChange={handleChange} required />

                    <input className="form-control mb-3" name="password"
                        type="password" placeholder="Password" value={user.password}
                        onChange={handleChange} required />

                    <button className="btn btn-danger w-100">Login</button>
                </form>

                <p className="mt-3 text-center">
                    New user? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;