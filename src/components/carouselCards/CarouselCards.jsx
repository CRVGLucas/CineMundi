import { motion } from 'framer-motion'
import { MovieCard } from '../movieCard/MovieCard'
import  styles  from './CarouselCards.module.css'
import { useEffect, useRef, useState } from 'react'
export function CarouselCards({ cardsItems }) {
    const cardRef = useRef()
    const [cardWidth, setCardWidth] = useState(0)
    useEffect(() => {
        console.log(cardRef.current?.offsetWidth)
        setCardWidth(cardRef.current?.scrollWidth - cardRef.current?.offsetWidth)
    }, [])
    return (
        <div className={styles.carouselWrapper}>
            {
                cardsItems
                && 
                <motion.div 
                    ref={cardRef} 
                    className={styles.carousel} 
                    whileTap={{cursor: 'grabbing'}}
                >
                    <motion.div 
                        className={styles.carouselInner} 
                        dragConstraints={{right: 0, left: -cardWidth}}
                        drag="x">
                    {
                        cardsItems.map((movie) => {
                            return (
                                <motion.div key={movie.title} className={styles.carouselItem}>
                                    <MovieCard movie={movie} key={movie.id}/>
                                </motion.div>
                            )
                        })
                    }
                    </motion.div>
                </motion.div>     
            }
        </div>
    )
}