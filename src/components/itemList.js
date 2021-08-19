import { useEffect, useState } from "react";
import { Item } from "./Item";
import { get } from "../utils/httpClient"
import  styles from "./itemGrid.css"

export function ItemList() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        get("/discover/movie")
        .then(data => {
            setMovies(data.results);
        });
    }, []);
    return(
    <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
             <Item key={movie.id} movie={movie} />
        ))}
    </ul>
    );
}