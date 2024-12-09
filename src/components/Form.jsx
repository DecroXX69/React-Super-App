import styles from './Form.module.css'


export default function Form({name,setName,username,setUserName,email,setEmail,mobile,setMobile,error,handleSubmit,isChecked,setIsChecked}) {
 

  return (
    <div className={styles.container} >


        <form className={styles.form}  onSubmit={handleSubmit}>

           <input type="text"
            placeholder='Name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
           /> 

           {error?.name && <p className={styles.error}>Name is required</p>}

           <input type="text"
            placeholder='Username'
            value={username}
            onChange={(e)=>{setUserName(e.target.value)}}
           /> 
            {error?.username && <p className={styles.error}>Username is required</p>}
            

           <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
           /> 
            {error?.email && <p className={styles.error}>Valid Email is required</p>}

           <input type="text"
            placeholder='Mobile no'
            value={mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
           />
           
            {error?.mobile && <p className={styles.error}>Valid Mobile no. is required</p>}

           <div className={styles.checkbox}>
           <input type="checkbox"
                  checked={isChecked}
                  onChange={(e)=>
                    setIsChecked(e.target.checked)
                  }
              
            /> <label>Share my registration data with Superapp</label>

            {error?.isChecked && <p className={styles.error}>Kindly check this box to proceed</p>}
           </div>

           <button>SIGN UP</button>
        </form>
    </div>
  )
}
