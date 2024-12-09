import axios from 'axios'

const BASE_URL= "https://www.googleapis.com/books/v1/volumes"

const API_KEY= import.meta.env.VITE_BOOKS_API_KEY 


const randomSearchTerms = ['fiction', 'adventure', 'science', 'history', 'fantasy', 'technology', 'mystery', 'romance'];

 
  const getRandomSearchTerm = () => {
    const randomIndex = Math.floor(Math.random() * randomSearchTerms.length);
    return randomSearchTerms[randomIndex];
  };

export default async function fetchBooks(){

    const searchTerm = getRandomSearchTerm();
    
   try{
    const data= await axios.get(BASE_URL,{

        params:{
            q:searchTerm,
            key:API_KEY  
        }
       
    })

    return(data)
   }
    catch(error){
        console.log(error)
    }

}