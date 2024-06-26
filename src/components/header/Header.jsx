import { Link, Router, useNavigate } from "react-router-dom";
import styles from './Header.module.css'
import { useState } from "react";

export function Header() {
    //const navigate = useNavigate()
    const [isSearchEnabled, setIsSearchEnabled] = useState(false)
    const [searchMovieText, setSearchMovieText] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function redirectLink(link){
        //navigate(link)
    }

    function toggleMenuOpen(){
        setIsMenuOpen(!isMenuOpen)
    }

    function searchMovie() {

    }

    function toggleSearchButton(){
        if(!isSearchEnabled){
            setIsSearchEnabled(true)
        } else {
            if(searchMovieText.length === 0){
                setIsSearchEnabled(false)
            } else {
                searchMovie()
            }
            
        }
    }

    return (
        <aside class={styles.headerContainer}>
            {
                !isMenuOpen 
                && 
                <button onClick={toggleMenuOpen} className={styles.buttonOpenMenu}>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
            }

            {
                isMenuOpen
                &&
                <header className={styles.header}>
                <button className={styles.buttonCloseMenu} onClick={toggleMenuOpen}>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <li className={styles.flexRowCenter}>
                        {
                            isSearchEnabled && <input type="search" />
                        }
                        
                        <button onClick={toggleSearchButton} className={styles.buttonSearch}>
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </li>
                </nav>
            </header>
            }

        </aside>

    )
}