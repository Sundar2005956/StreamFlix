import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://streamflix-production-c42cb2b9.up.railway.app/api/movies/getMovie/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!movie) {
        return <p className="text-white p-4">Loading...</p>;
    }

    return (
        <div className="container  py-5 ">
            <div className="row">
                <div className="col-md-4">
                    <img src={movie.posterUrl} alt={movie.title}
                        className="img-fluid" />
                </div>

                <div className="col-md-8">
                    <h2 className="text-danger">{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>Release Year: {movie.releaseYear}</p>
                    <p>Rating: {movie.rating}</p>
                    
                    {movie.trailerUrl && (
                        <a href={movie.trailerUrl} target="_blank"
                            rel="noreferrer" className="btn btn-danger">
                            Watch Trailer
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;

// {movie.videoUrl && (
//     <div className="mt-3">
//         <h4>Watch Movie</h4>
//         <video width="100%" controls>
//             <source src={movie.videoUrl} type="video/mp4" />
//             Your browser does not support video playback.
//         </video>
//     </div>
// )}