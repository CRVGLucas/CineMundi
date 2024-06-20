import { Link, Router, useNavigate } from "react-router-dom";
import styles from './Header.module.css'
import { useState } from "react";

export function Header() {
    //const navigate = useNavigate()
    const [isSearchEnabled, setIsSearchEnabled] = useState(false)
    const [searchMovieText, setSearchMovieText] = useState('')
    function redirectLink(link){
        //navigate(link)
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
        <header className={styles.header}>
            <nav>
                <li >Home</li>
                <li >Movies</li>
                <li>
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
    )
}