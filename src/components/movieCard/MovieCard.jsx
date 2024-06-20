import { useNavigate } from "react-router-dom";
import styles from './MovieCard.module.css'
export function MovieCard({movie}) {
    const navigate= useNavigate();

    function goToMovieDetails() {
        navigate("/movies/"+movie.id);
    }

    return (
        <article className={styles.card} onClick={goToMovieDetails}>
            <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} title={movie.title} alt={"Poster do filme "+ movie.title}/>
        </article>
    )
}