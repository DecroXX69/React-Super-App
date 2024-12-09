import React from 'react'
import styles from './Dashboard.module.css'
import ProfileWidget from './../components/ProfileWidget';
import WeatherWidget from './../components/WeatherWidget';

import TimerWidget from '../components/TimerWidget';
import NotesWidget from '../components/NotesWidget';
import { useNavigate } from 'react-router-dom';
import BooksWidget from '../components/BooksWidget';



export default function Dashboard() {

	const navigate = useNavigate()
  return (
<div className={styles.container}>

<button className={styles.btn} onClick={()=>navigate("/movies")}>Browse</button>
	<div className={styles.profileWidget}>
		<ProfileWidget/>
	</div>
	<div className={styles.weatherWidget}><WeatherWidget/></div>
	<div className={styles.timerWidget}><TimerWidget/></div>
	<div className={styles.notesWidget}><NotesWidget/></div>
	<div className={styles.booksWidget}>
    <BooksWidget/>
  	</div>
     

</div>
  )
}
