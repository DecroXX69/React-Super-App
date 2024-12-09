import styles from "./RegisterPage.module.css";
import { useContext,useEffect,useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import validateForm from "../utils/validateForm";

export default function RegisterPage() {

  //extracting the user state its setter from Appcontext
  const { user, setUser } = useContext(AppContext);
  const [name,setName]= useState(user?.name||"")
  const [username,setUserName]= useState(user?.username)
  const [email,setEmail]= useState(user?.email)
  const [mobile,setMobile]= useState(user?.mobile)
  const[isChecked,setIsChecked]=useState(false)
  const [error,setError]= useState({})
  
 


const navigate= useNavigate()


  function handleSubmit(e){
    e.preventDefault()
     const{valid,invalid}=validateForm(name,email,username,mobile,isChecked)

    
     if(!valid)
     {
      setError(invalid)
      return
     }
    
        setError(null)
      setUser({name,email,username,mobile,isChecked})
      navigate('/genres')
      

  }



 

  return (
   
    <div className={styles.container}>

      <div className={styles.left}>
        
        <div className={styles.background}></div>
        <div className={styles.label}>Discover new things on Superapp</div>

      </div>


      <div className={styles.right}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Super app</h2>
          <p className={styles.subheading}>Create your new account</p>
        </header>


      <Form 
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            username={username}
            setUserName={setUserName}
            mobile={mobile}
            setMobile={setMobile}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            error={error}
            setError={setError}
            handleSubmit={handleSubmit}
            

      />

        <footer className={styles.footer}>
          
          <br />
          <small>
            By clicking on Sign up. you agree to Superapp{" "}
            <Link to="#">Terms and Conditions of Use</Link>
          </small>
          <br />
          <small>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please read Superapp{" "}
            <Link to="#">Privacy Policy</Link>
          </small>
        </footer>
      </div>
    </div>
  );
}
