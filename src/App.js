import React from 'react'; //{ useEffect, useState }
import Nav from './Components/Nav';
import Home from './Components/Home'
import JokeFinder from './Components/JokeFinder'
import AnotherApi from './Components/AnotherApi'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  
  return (
    <>
        <BrowserRouter>
        <Nav/>
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route path="/JokeFinder" component={JokeFinder} />
            <Route path="/AnotherApi" component={AnotherApi}/>
        </Switch>
      </BrowserRouter>   
    </>
  );
}

export default App;
