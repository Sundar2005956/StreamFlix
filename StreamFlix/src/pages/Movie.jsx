import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://streamflix-production-c42cb2b9.up.railway.app/api/movies/getMovie")
            .then(response => setMovies(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container text-white py-4 ">

            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <div className="card bg-black text-white p-3 h-100">
                            <img src={movie.posterUrl} alt={movie.title}
                                className="img-fluid" />

                            <h5 className="mt-3">{movie.title}</h5>
                            <p>{movie.releaseYear}</p>

                            <Link to={`/movies/${movie.id}`}
                                className="btn btn-danger">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movie;