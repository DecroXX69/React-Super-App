import React, { useContext } from 'react'
import styles from './ProfileWidget.module.css'
import { AppContext } from './../context/AppContext';
import avatar from '../assets/avatar.png'
export default function ProfileWidget() {

    const {user,selectedGenres}= useContext(AppContext)
  return (
    <div className={styles.container}>

        
            <img className={styles.left} src={avatar} alt="avatar" />
       

        <div className={styles.right}>
            <div className={styles.user}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <h1>{user.username}</h1>
            </div>
            <div className={styles.genres}>

                {selectedGenres.slice(0,4).map((genre,index)=>(<div key ={index} className={styles.genre}> {genre}</div>))}
                
            </div>
           
        </div>
    </div>
  )
}
