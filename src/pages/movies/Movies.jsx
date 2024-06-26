import { useEffect, useState } from "react"
import styles from './Movies.module.css'
import axios from "axios"
import 'react-multi-carousel/lib/styles.css';

import { CarouselCards } from "../../components/carouselCards/CarouselCards";
export function Movies() {
    const [movies, setMovies] = useState([])
    const [moviesUncoming, setMoviesUncoming] = useState([])
    const [moviesPopular, setMoviesPopular] = useState([])


    async function getMovieList(){
        const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/", {headers: headers})
        console.log("response: ", data)
        setMovies(data.results)
    }

    async function getMoviesUncoming(){
        const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1", {headers: headers})
        console.log("response: ", data)
        setMoviesUncoming(data.results)
    }

    async function getMoviesPopular(){
        const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }
        const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {headers: headers})
        console.log("response: ", data)
        setMoviesPopular(data.results)
    }

    useEffect(() => {
        getMoviesUncoming()
        getMoviesPopular()
    }, [])
    return (
        <section class={styles.wrapperMovies}>
            <div class={styles.carouselMoviesGroup}>
                <h1>Filmes em cartaz</h1>
                <CarouselCards cardsItems={moviesUncoming}/>
            </div>
            <div class={styles.carouselMoviesGroup}>
                <h1>Mais populares</h1>
                <CarouselCards cardsItems={moviesPopular}/>
            </div>
        </section>
    )
}