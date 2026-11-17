
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role?.rolename || user?.role;
    const isAdmin = String(role).toUpperCase() === "ADMIN";

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 fixed-top mb-5">

            <Link className="navbar-brand text-danger fw-bold" to="/">
                STREAMFLIX
            </Link>

            <div className="ms-auto d-flex gap-3 align-items-center">

                <Link className="nav-link text-white" to="/">
                    Home
                </Link>

                {user ? (
                    <>
                        <Link className="nav-link text-white" to="/movies">
                            Movies
                        </Link>
                         

                        {isAdmin ? (
                            <Link className="nav-link text-white" to="/add-movie">
                                Add Movie
                            </Link>

                        ) : (
                            <Link className="nav-link text-white" to="/history">
                                History
                            </Link>
                        )}

                        <Link className="nav-link text-white" to="/profile">
                            Profile
                        </Link>

                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="nav-link text-white" to="/login">
                            Login
                        </Link>

                        <Link className="nav-link text-white" to="/register">
                            Register
                        </Link>
                    </>
                )}

            </div>
        </nav>
    );
}

export default Navbar