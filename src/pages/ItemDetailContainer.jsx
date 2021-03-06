import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "./ItemDetail.module.css"


export function ItemDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    

    useEffect(() => {
        get("/movie/" + movieId ).then(data => {
            setMovie(data);
        })
        
    }, [movieId])

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img className={ `${styles.col}  ${styles.movieImage}`} 
        src={imageUrl} 
        alt={movie.title} 
        />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
             <strong>Genres:</strong>{" "}
                {movie.genres.map(genre => genre.name).join(", ")}
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
    </div>;
} 