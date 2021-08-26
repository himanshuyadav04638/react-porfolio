import React,{useState} from 'react'
import "./App.css"
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'
import { Route,Switch } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import Portfolio from './Pages/Portfolio'
import contactPage from './Pages/contactPage'

const App = () => {
  const [navtogle,settogle]=useState(false);
  const navClick=()=>{
    settogle(!navtogle)
  }
  return (
    <div className="App">

      <div className={`sidebar ${navtogle ? 'nav-togle':''} `}>
        <NavBar/>
      </div>
       <div className="nav-btn" onClick={navClick}>
         <div className="lines-1"></div>
         <div className="lines-2"></div>
         <div className="lines-3"></div>
       </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
               <Homepage/>

            </Route>

          <Route path="/about" exact component={AboutPage} />
          
          <Route path="/Portfolio" exact component={Portfolio} />
  
          <Route path="/contact" exact component={contactPage} />
           
          
         
           

          </Switch>
           
        </div>
      
        
      
      </div>

    </div>
  )
}

export default App
