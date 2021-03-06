import React, { useEffect, useState } from 'react';
import axios from 'axios';
import chuckNorris from '../images/chuckNorris.jpg'

const Home = () => {
    const [random, setRandom] = useState ( [ ] );

    useEffect( () => {
      fetchApi();
  }, [] );
  
  const  fetchApi = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(res.data.value);
  
    setRandom(res.data.value)
  }   

  
    return (
        <div>
                <h1>Chuck Norris Jokes</h1>
                <h4>Random Chuck Norris Joke</h4>
                <h3>Random: {random} </h3>
                <img className="chuckNorris-image image" src={chuckNorris} alt="Chuck Norris log"></img>
        </div>
    )
}

export default Home
