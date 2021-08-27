import { Link } from "react-router-dom";
import styles from "./Item.css";

export function Item ({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;

    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
        <img 
        width={230} 
        height={345}
        className={styles.movieImage} 
        src={imageUrl} 
        alt={movie.title}
        />
        <div>{movie.title}</div>
        </Link>
        </li>
    );
}
