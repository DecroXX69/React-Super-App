import React from 'react'
import styles from './CarouselPage.module.css'
import ProfileWidget from '../components/ProfileWidget'
import WeatherWidget from '../components/WeatherWidget'
import { useNavigate } from 'react-router-dom'
import BooksWidget from '../components/BooksWidget'
export default function CarouselPage() 

{

  const navigate= useNavigate()

  function handleLogOut(){

    const isLogout=confirm("Are you sure you want to log out?")

    if(isLogout)
   { localStorage.clear()
    window.location.href="/register"
   }
  else
  return
    

  }
  return (
    <div className={styles.container}>
    

<button className={styles.backbtn} onClick={()=>navigate("/genres")}>Back</button>

<button className={styles.btn} onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>


<button className={styles.logout} onClick={handleLogOut} > Logout</button>
    

	<div className={styles.profileWidget}>
        <ProfileWidget/>
    </div>


	<div className={styles.weatherWidget}>
    <WeatherWidget/>
  </div>


	<div className={styles.booksWidget}>
    <BooksWidget/>
  </div>

  
    </div>
  )
}
