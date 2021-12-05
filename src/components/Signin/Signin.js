import React from 'react'
import styles from './Signin.module.css';
import { useState } from 'react';

const Signin = () => {
    const [email, setemail] = useState(null);
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("clicked")
        let user = await loginFunc(email, username,password)
        console.log(user);
    }

   const loginFunc = async (email, username ,password)=>{

    // feed all the data and expect username from the server and returns it
     return "hello world"
   }

    return (
        <div className={styles.mainCard}>

           <div className={styles.loginTitle}>Signin</div>

           <div className={styles.inputs}>
               
               <input className={styles.inputs1} type="text" placeholder="Username" onChange={ e=> setusername(e.target.value)} />
            
               <input className={styles.inputs1} type="text" placeholder="Email" onChange={e=> setemail(e.target.value)} />

               <input className={styles.inputs1} type="text" placeholder="Password" onChange={ e=> setpassword(e.target.value)} />
               <div className={styles.btnWrapper}>
               <button onClick={handleSubmit} className={styles.loginBtn}>Sign in</button>
               </div>

           </div>
        </div>
    )
}

export default Signin;
