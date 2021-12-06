import React, {useEffect, useState} from 'react';
import styles from './Post.module.css';
import axios from "axios";

const Post = () => {


   const fetchPost = async ()=> {
       fetch('http://localhost:8080/')
       .then((resp)=>{
           console.log(resp);
       })
       .catch((err)=>{console.log(err)})
   }

// const fetchPost = async()=>{
//     console.log("flsjdflksjf");
//     axios.get('http://127.0.0.1:5000/post').then((resp)=>{
//         console.log(resp);
//     })
// }

//    "proxy": "http://127.0.0.1:5000/",

    useEffect(() => {
        fetchPost();

    }, []);
    return (
        <div className={styles.Post}>
            <div className={styles.posttitle}>Here's how I spent two years of my College</div>
            <div className={styles.postinfo}>
                Posted by  <div className={styles.blueText}>James Halliday</div> on <div className={styles.blueText}>11th Thursday</div>
            </div>
            <div className={styles.postbutton}>
                <button className={styles.button}>Read More</button>
            </div>

            
        </div>
    )
}

export default Post;
