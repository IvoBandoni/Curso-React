import movies from "./movies.json"
import { Item } from "./Item";
import styles from "./itemGrid.css"

export function ItemList() {
    return(
    <ul className={styles.itemGrid}>
        {movies.map((movie) => (
             <Item key={movie.id} movie={movie} />
        ))}
    </ul>
    );
}