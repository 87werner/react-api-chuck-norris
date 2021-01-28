import React, { useEffect, useState } from "react";
import axios from "axios";


function JokeFinder() {
  // const [category,  setCategory] = useState ( " " );

  const [joke, setJokes] = useState({
    category: "",
    joke: "",
  });

  // const [search, setSearch] = useState(`${category}`)

  useEffect(() => {
    console.log("page loaded");
  }, []);

  const fetchApi = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${joke.category}`
    );
    console.log(res.data.value);

    setJokes({ joke: res.data.value }); 
  };

  const changeHandler = (e) => {
    setJokes({ category: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="form">
        <input className="form-input" onChange={changeHandler} placeholder="search...." type="search">
          {/* {category} */}
        </input> <br/>
        <button className="btn-search" onClick={fetchApi}>Search Jokes</button>
        <p className="joke">{joke.joke}</p>
      </form>
      
      </div>
     
    
  );
}

export default JokeFinder;

// class Addpost extends React.Component {
//     state = {
//       input: "",
//       numberList: [],

//     };

//     addToList = (input) =>{
//         const temp = [...this.state.numberList]
//         temp.push(input)
//         this.setState({numberList: temp})
//     };

//    chnageHandler = (event) => {
//       this.setState({input: event.target.value })

//    };

//     render(){
//     return (

//      <div>
//               <form >
//                   <input
//                     className ="input-task"
//                     placeholder = "Tasks"
//                     type="text"
//                     onChange={this.chnageHandler}
//                     value={this.state.input}>
//                 </input>
//               </form>

//               <button
//                   className="task-button"
//                   onClick={() => this.addToList(this.state.input)}>
//                         Add Task
//               </button>
//          </div>
//       );
//     };
//   };
