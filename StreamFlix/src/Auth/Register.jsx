import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/users/register", user);
            alert("Registration Successful!");
            navigate("/login");
        } catch (error) {
            alert("Registration Failed!");
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="col-md-5 mx-auto card bg-dark text-white p-4">
                <h2 className="text-danger text-center">Register</h2>

                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3" name="fullName"
                        placeholder="Full Name" value={user.fullName}
                        onChange={handleChange} required />

                    <input className="form-control mb-3" name="email"
                        type="email" placeholder="Email" value={user.email}
                        onChange={handleChange} required />

                    <input className="form-control mb-3" name="password"
                        type="password" placeholder="Password" value={user.password}
                        onChange={handleChange} required />

                    <button className="btn btn-danger w-100">Register</button>
                </form>

                <p className="mt-3 text-center">
                    Already registered? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;