
import { Link } from "react-router-dom";

function AdminNavbar() {

    const handleLogout = () => {
        localStorage.removeItem("user");
          navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 fixed-top ">
            <Link className="navbar-brand text-danger fw-bold" to="/admin">
                STREAMFLIX ADMIN
            </Link>

            <div className="ms-auto d-flex gap-3 align-items-center">
                <Link className="nav-link text-white" to="/admin">
                    Dashboard
                </Link>

                <Link className="nav-link text-white" to="/add-movie">
                    Add Movie
                </Link>

                <Link className="nav-link text-white" to="/movies">
                    Movies
                </Link>

                <Link className="nav-link text-white" to="/profile">
                    Profile
                </Link>

                <button
                    onClick={handleLogout}
                    className="btn btn-danger"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default AdminNavbar;
