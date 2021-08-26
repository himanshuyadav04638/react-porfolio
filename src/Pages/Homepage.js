import React from 'react'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                      <span>Himanshu Yadav.</span>
                </h1>
                <p className="h-sub-txt">Fresher B.Tech looking for a job/internship with Frontend Development skills living in New Delhi.</p>
                <div className="icons">
                <Link className="icon-holder"><FontAwesomeIcon icon={faFacebook} className="icon fb"/></Link> 
                <Link className="icon-holder"> <FontAwesomeIcon icon={faGithub} className="icon gh"/></Link> 
                <Link className="icon-holder"><FontAwesomeIcon icon={faLinkedin} className="icon ld"/></Link>
                </div>

            </header>

        </div>
    )
}

export default Homepage;
