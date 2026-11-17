import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://streamflix-production-c42cb2b9.up.railway.app/api/movies/getMovie")
            .then(response => setMovies(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div  className="container text-white py-4 ">
            <div className="bg-black p-5 rounded">
                <h1 className="text-danger fw-bold">STREAMFLIX</h1>
               
                <h3>Unlimited Movies and Entertainment</h3>
                <p>Watch your favourite movies anytime.</p>

                <Link to="/movies" className="btn btn-danger">
                    Explore Movies
                </Link>
            </div>

            <h2 className="mt-5 mb-4">Popular Movies</h2>

            <div className="row">
                {movies.slice(0, 4).map(movie => (
                    <div className="col-md-3 mb-3" key={movie.id}>
                        <div className="card bg-black text-white p-3">
                            <img src={movie.posterUrl} alt={movie.title}
                                className="img-fluid" />
                            <h5 className="mt-3">{movie.title}</h5>
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

export default Home;