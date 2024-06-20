import axios from "axios"
import { useEffect, useState } from "react"
import { MovieCard } from "../../components/movieCard/MovieCard"
import styles from './Home.module.css'


export function Home() {
    const [movies, setMovies] = useState([])

    async function getTopRelatedMovies() {
        const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }
        const {data} = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', {
            headers: headers
        })
        setMovies(data.results)
    }

    useEffect(() => {
        getTopRelatedMovies()
    }, [])
    
    return (
        <section className={styles.wrapperMovieList}>
            {
                movies.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id} />
                })
            }
        </section>
    )
}