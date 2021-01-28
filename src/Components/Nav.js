import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
       <nav>
           <h1>Chuch Norris Jokes</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/JokeFinder">Joke finder</Link>
                    </li>
                </ul>
       </nav>
    )
}

export default Nav
