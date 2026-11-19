
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movie() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://streamflix-production-c42cb2b9.up.railway.app/api/movies/getMovie")
            .then(response => setMovies(response.data))
            .catch(error => console.log(error));
    }, []);

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container text-white py-4">

            <h2 className="text-danger fw-bold mb-4">
                Explore Movies
            </h2>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Movie List */}
            <div className="row">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <div className="col-md-3 mb-4" key={movie.id}>
                            <div className="card bg-black text-white p-3 h-100">

                                <img
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    className="img-fluid"
                                    style={{
                                        height: "300px",
                                        objectFit: "cover"
                                    }}
                                />

                                <h5 className="mt-3">{movie.title}</h5>
                                <p>{movie.releaseYear}</p>

                                <Link
                                    to={`/movies/${movie.id}`}
                                    className="btn btn-danger mt-auto"
                                >
                                    View Details
                                </Link>

                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-4">
                        <h5>No movies found!</h5>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Movie;
