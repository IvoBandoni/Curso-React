import { useEffect, useState } from "react";
import { Item } from "./Item";
import { get } from "../utils/httpClient";
import  styles from "./itemGrid.module.css";
import { Spinner } from "./Spinner";
import { useLocation } from "react-router";

function useQuery() {
    return new URLSearchParams(useLocation().search); 
}

export function ItemList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const query = useQuery();
    const search = query.get("search");
    console.log(search);
    

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
         ? "/search/movie?query=" + search 
         : "/discover/movie";
        get(searchUrl)
        .then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if(isLoading) {
        return <Spinner />;
    }

    return(
    <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
             <Item key={movie.id} movie={movie} />
        ))}
    </ul>
    );
}