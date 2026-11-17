
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMovie() {

    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        title: "",
        description: "",
        releaseYear: "",
        posterUrl: "",
        trailerUrl: "",
        videoUrl: "",
        rating: ""
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://streamflix-production-c42cb2b9.up.railway.app/api/movies/addMovie", {
                ...movie,
                releaseYear: Number(movie.releaseYear),
                rating: Number(movie.rating)
            });

            alert("Movie Added Successfully!");
            navigate("/");

        } catch (error) {
            alert("Failed to Add Movie!");
            console.log(error);
        }
    };

    return (
        <div className="container  mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card bg-dark text-white p-4">

                        <h2 className="text-danger text-center mb-4">
                            Add New Movie
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="title"
                                placeholder="Movie Title"
                                className="form-control mb-3"
                                value={movie.title}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="description"
                                placeholder="Movie Description"
                                className="form-control mb-3"
                                value={movie.description}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                name="releaseYear"
                                placeholder="Release Year"
                                className="form-control mb-3"
                                value={movie.releaseYear}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="posterUrl"
                                placeholder="Poster Image URL"
                                className="form-control mb-3"
                                value={movie.posterUrl}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="trailerUrl"
                                placeholder="Trailer URL"
                                className="form-control mb-3"
                                value={movie.trailerUrl}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="videoUrl"
                                placeholder="Movie Video URL"
                                className="form-control mb-3"
                                value={movie.videoUrl}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                className="form-control mb-3"
                                value={movie.rating}
                                onChange={handleChange}
                                required
                            />

                            <button className="btn btn-danger w-100">
                                Add Movie
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;
