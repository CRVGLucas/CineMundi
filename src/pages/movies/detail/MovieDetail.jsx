import { useEffect, useState } from 'react'
import styles from './MovieDetail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
export function MovieDetail() {
    const [movie, setMovie] = useState([]);
    let { id } = useParams();
    async function getMovieById(){
        const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, {
            headers: headers
        })
        setMovie(data)
    }

    useEffect(() => {
        getMovieById()
    }, [])

    return (
        <section className={styles.wrapper}>
            <div className={styles.movieContent}>
                <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt={movie.title} title={movie.title}/>
                <div>
                    <h1>{movie.title}</h1>
                    { movie.tagline && <i>{movie.tagline}</i>}
                    <p className={styles.movieDescription}>{movie.overview}</p>
                    <Rating
                        name="simple-controlled"
                        value={movie.vote_average}
                        readOnly 
                    />
                    <div className={styles.movieInformation}>
                        <h2>Produção</h2>
                        <small>Companhia: {movie.production_companies && movie.production_companies.map(company => {
                            return company.name
                        }).join(', ')}</small>
                        <small>País: {movie.production_countries && movie.production_countries.map(country => {
                            return country.name
                        }).join(', ')}</small>
                        <small>Gêneros: {
                            movie.genres && movie.genres.map(genre => {
                                return genre.name
                            }).join(', ')
                        }</small>
                    </div>
                </div>
            </div>
        </section>
    )
}