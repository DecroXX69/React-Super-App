import React, { useEffect, useState } from 'react';
import fetchBooks from '../api/fetchBooks';
import styles from './BooksWidget.module.css';
import { Link } from 'react-router-dom';

const BooksWidget = () => {
  const [book, setBook] = useState(null);

  const truncateDescription = (description, maxWords) => {
    if (!description) return "No description available";
    const wordsArray = description.split(' ');
    return wordsArray.length > maxWords 
      ? wordsArray.slice(0, maxWords).join(' ') + '...'  
      : description;
  };

  useEffect(() => {
    fetchBooks().then((response) => {
      const randomIndex =  Math.floor(Math.random()*10)
      setBook(response.data.items ? response.data.items[randomIndex] : null); 
    });
  }, []); 

  return (

    
   
        <div className={styles.container}>
            {!book?"Loading......":( <div className={styles.header}>
          <p className={styles.recommend}> Recommended Book</p>
            <img
                  src={book?.volumeInfo.imageLinks?.smallThumbnail}
                  alt={book?.volumeInfo.title}
                 
                />
  
       <div className={styles.about}>
                <h3>{book?.volumeInfo.title}</h3>
                <p>Author: {book?.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}</p>
       </div> 
  
      </div>)}
       
       {!book?"":( <article>Description: {truncateDescription(book?.volumeInfo.description, 70)}</article>)}
       {!book?"":( <Link to={book?.volumeInfo.canonicalVolumeLink } target="_blank">Read more</Link>)}
       
      </div>
        
  );
};

export default BooksWidget;
