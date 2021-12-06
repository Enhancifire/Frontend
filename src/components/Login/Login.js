import React from 'react'
import styles from './Login.module.css';
import { useState } from 'react';


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const notify = ()=>{
    toast("🦄: Logged in, visit /posts", {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       });
      
}

const Login = ({setUsername}) => {
  
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("clicked")
        let user = await loginFunc(username,password)
        console.log(user)
       
    }

   const loginFunc = async (username ,password)=>{

    const info = {
        username:username,
        password: password,
       
    }

    const data = {
            method: 'GET',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(info)
          }
          
        console.log(data);
    
     fetch(`/login?email=${username}&password=${password}`)
     .then((resp)=>{
         console.log(resp.status);
         if(resp.status === 200){
             setUsername(username)
             localStorage.setItem('username',username );
             notify()
         }
    }) 
     .catch((err)=>{console.log(err)});
   }

    return (
        <div className={styles.mainCard}>

           <div className={styles.loginTitle}>Login</div>

           <div className={styles.inputs}>
               
               <input className={styles.inputs1} type="text" placeholder="Username" onChange={ e=> setusername(e.target.value)} />
            

               <input className={styles.inputs1} type="text" placeholder="Password" onChange={ e=> setpassword(e.target.value)} />
               <div className={styles.btnWrapper}>
               <button onClick={handleSubmit} className={styles.loginBtn}>Login</button>
               </div>

           </div>
        </div>
    )
}

export default Login
