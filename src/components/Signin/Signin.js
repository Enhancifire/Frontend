import React from 'react'
import styles from './Signin.module.css';
import { useState } from 'react';
import {Navigate} from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const notify = ()=>{
    toast("🦄: User Created, Please Login", {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       });
      
}

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

    const info = {
        email:email,
        password: password,
        username:username
    }

    const data = {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(info)
          }
          
        console.log(data);
    
     fetch(`/signup`,data)
     .then((resp)=>{
         console.log(resp);
         localStorage.setItem('username',username );
     })
     .then(()=>{
         console.log('hello')
        notify();
        
     })
     .catch((err)=>{console.log(err)});
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
