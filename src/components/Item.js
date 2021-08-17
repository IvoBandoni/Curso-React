import styles from "./Item.css"

export function Item ({ movie }) {
    const imageUrl = "https://image.tmbd.org/t/p/w300" + movie.poster_path;

    return (
        <li ClassName={styles.movieCard}>
        <img 
        width={230} 
        height={345}
        className={styles.movieImage} 
        src={imageUrl} 
        alt={movie.title}
        />
        <div>{movie.title}</div>
        </li>
    );
}