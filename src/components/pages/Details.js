import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Details.module.css";

const Details = () => {
    const { id } = useParams();
    const [posts, setpost] = useState({});
    const [postshow,setPostshow]=useState([]);
    const [postshowimg,setPostshowimg]=useState([]);

    useEffect(() => {
        loadshow();
    }, [])//[] empty array means function runs only once else it will run infinite times

    const loadshow = async () => {
        const result = await axios.get(`http://localhost:3003/shows/${id}`);
        console.log(result.data);
        console.log(result);
        setpost(result.data);
        setPostshow(result.data.show);
        setPostshowimg(result.data.show.image);
    }
  
    console.log(posts);

    return (

        <div className="container">
            <h1 className="text-center">Details</h1>
            
                <div className="container">
                <div class="col-sm-3" className={styles.details} >
                   <img src={postshowimg.medium}/>
                </div>
                <div class="col-sm-5" className={styles.details}>
                    <h1 className={styles.content}>{postshow.name}</h1>
                    <h5 className={styles.content}>Type: {postshow.type}</h5>
                    <h5 className={styles.content}> Language: {postshow.language}</h5>
                    <h5 className={styles.content}>Premiered: {postshow.premiered}</h5>
                    <p className={styles.content}>Summary: {postshow.summary}</p>
                </div>
            </div>
        
          
        </div>
            
    )
}

export default Details;