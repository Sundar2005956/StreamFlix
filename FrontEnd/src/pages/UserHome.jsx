
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserHome() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://streamflix-production-c42cb2b9.up.railway.app/api/movies/getMovie")
            .then(response => setMovies(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mt-4 text-white" >

            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <div className="card bg-dark text-white">
                            <img
                                src={movie.posterUrl}
                                className="card-img-top"
                                alt={movie.title}
                            
                            />

                            <div className="card-body">
                                <h5>{movie.title}</h5>
                                <p>Rating: {movie.rating}</p>

                                <Link
                                    to={`/movies/${movie.id}`}
                                    className="btn btn-danger"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserHome;
