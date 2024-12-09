import React, { useEffect, useState } from "react";
import defaultGenres from "../data/genres";
import styles from "./GenrePage.module.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
library.add(fas);

export default function GenrePage() {
    const [minCategory, setMinCategory] = useState(false);
    const [activeGenres, setActiveGenres] = useState([]); // 
    const navigate = useNavigate();
    const { selectedGenres, setSelectedGenres } = useContext(AppContext);

   
    useEffect(() => {
        const savedGenres = JSON.parse(localStorage.getItem('activeGenres')) || [];
        setActiveGenres(savedGenres);
        setSelectedGenres(savedGenres);
    }, [setSelectedGenres]);

    useEffect(() => {
        if (selectedGenres.length >= 3) {
            setMinCategory(false);
        }
    }, [selectedGenres]);

    
    function saveToLocalStorage(updatedGenres) {
        localStorage.setItem('activeGenres', JSON.stringify(updatedGenres));
    }

   
    function handleSelectGenre(genre) {
        let updatedActiveGenres;
        if (activeGenres.includes(genre)) {
            updatedActiveGenres = activeGenres.filter((active) => active !== genre);
        } else {
            updatedActiveGenres = [...activeGenres, genre];
        }
        setActiveGenres(updatedActiveGenres);
        saveToLocalStorage(updatedActiveGenres); 
        
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((selected) => selected !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    }

    function handleNext() {
        if (selectedGenres.length >= 3) {
            setMinCategory(false);
            navigate("/carousel");
            return;
        }
        setMinCategory(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.heading}>Super app</h1>
                <h2 className={styles.subheading}>
                    Choose your entertainment category
                </h2>

                <div className={styles.selectedGenres}>
                    {selectedGenres.map((genre, index) => (
                        <div
                            key={index}
                            className={styles.selectedGenre}
                            onClick={() => handleSelectGenre(genre)}
                        >
                            {genre} <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.cross} />
                        </div>
                    ))}
                </div>
                <br />
                {minCategory && (
                    <p className={styles.minCategory}>
                        <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
                        Minimum three categories required
                    </p>
                )}
            </div>

            <div className={styles.right}>
                <div className={styles.defaultGenres}>
                    {defaultGenres.map((genre, index) => (
                        <div
                            key={index}
                            className={`${styles.defaultGenre} ${activeGenres.includes(genre) ? styles.active : ""}`}
                            onClick={() => handleSelectGenre(genre)}
                        >
                            {genre}
                        </div>
                    ))}
                </div>
                <button onClick={handleNext}>Next Page</button>
            </div>
        </div>
    );
}
