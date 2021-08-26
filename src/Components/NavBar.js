import React from 'react'
import { NavLink } from 'react-router-dom'

import avtar from '../img/himanshu.jpg'

const NavBar = () => {
    return (
        <div className="navbar">
           
           <nav className="nav">
           <div className="profile">
                <img src={avtar} alt="himanshu" />
            </div>
               <ul className="nav-items">
                   <li className="nav-item">
                       <NavLink to="/" exact activeClassName="active">
                           Home

                       </NavLink>
                   </li>
                   <li className="nav-item">  
                        <NavLink to="/about" activeClassName="active">
                           about
                       </NavLink>
                       
                    </li>
                     <li className="nav-item">
                     <NavLink to="/Portfolio"  activeClassName="active">
                           prortfolios

                     </NavLink>

                     </li>
                     <li className="nav-item">
                     <NavLink to="/contact" exact activeClassName="active">
                           contact

                    </NavLink>


                     </li>
                       
                     

               </ul>
               <footer className="footer">
               <p>@2021 lorem ipsum</p>
           </footer>

           </nav>
           
            
        </div>
    )
}

export default NavBar
