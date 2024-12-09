import React from 'react'
import styles from './MoviePage.module.css'
import iconAvatar from '../assets/iconAvatar.png'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import GenreRow from '../components/GenreRow'
import { useNavigate } from 'react-router-dom'




export default function MoviePage() {

const {selectedGenres}=useContext(AppContext)
const navigate =useNavigate()
  return (
    <div className={styles.container}>
        <div className={styles.header}>

                <h1>Super app</h1>
                <img src={iconAvatar} alt="icon" title="go to carousel" onClick={()=>navigate("/carousel")}/>
                
        </div>

        <div className={styles.movieList}>

          <h4>Entertainment according to your choice</h4>
          <br />

          <div className={styles.movies}>

            {selectedGenres?.map((genre,index)=>{
              return (<div key={index} className={styles.genre}>
                <p className={styles.genreName}>{genre}</p>
                <GenreRow genreIndex={selectedGenres.indexOf(genre)}/>
              </div>)
            })}

          </div>

        </div>
    </div>
  )
}
