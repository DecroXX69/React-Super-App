import React from 'react'
import styles from './NotFoundPage.module.css'
import { useNavigate } from 'react-router-dom'
export default function NotFoundPage() {
    const navigate=useNavigate()
  return (
    <div className={styles.container}>
        <div className={styles.box}>
<h1>404</h1>
<h2>Oops! Page not found.</h2>
<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. </p>
<button onClick={()=>navigate("/")}>Go to Homepage</button>
    </div>
    </div>
  )
}
