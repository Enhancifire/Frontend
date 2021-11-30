import React from 'react';
import styles from './Post.module.css';

const Post = () => {
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
