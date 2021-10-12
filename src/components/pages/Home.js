import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import styles from './Home.module.css';
import {BrowserRouter as Router,Link} from "react-router-dom";

const Home = () => {
    const [posts, setpost] = useState([]);
    useEffect(() => {
        loadposts();
    }, [])//[] empty array means function runs only once else it will run infinite times

    const loadposts = async () => {
        const result = await axios.get('https://api.tvmaze.com/search/shows?q=all'); //await is written so that this line of code runs until it is completed
        console.log(result.data);
        setpost(result.data);
    }
    
    const heart = (id) => {
        const elementsIndex = posts.findIndex(element => element.id == id);
        let newArray = [...posts];
        newArray[elementsIndex] = { ...newArray[elementsIndex], like: !newArray[elementsIndex].like };
        setpost(newArray);
    }
    return (
        <div className="container">
            <h1 className="text-center md-4">Shows</h1>
            {posts.map((posts, index) => (
                <div class="card" className={styles.card_style} key={posts.id}>
                    <img class="card-img-top imagee" className={styles.imagee} src={posts.show.image.medium} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{posts.show.name}</h5>
                        <p className="card-text">Language: {posts.show.language}</p>
                        <p className="card-text">Type: {posts.show.type}</p>

                        <Link to={`/details/${posts.show.id}`} href="#" class="btn btn-primary">View Details</Link>





                    </div>
                </div>
            ))}


        </div>
    )
}

export default Home;