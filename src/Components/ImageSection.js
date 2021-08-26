import React from 'react'
import avtar from '../img/him.jpeg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={avtar} alt="avtar" />
            </div>
            <div className="about-info " >
                <div className="subheading">
                <h4>I am
                    <span className="name">Himanshu Yadav.</span>
                </h4>

                </div>
                
                <p className="About-text">
                A dynamic, team spirited and performance driven professional ready to take a challenging and high-performance oriented role in the field of computer engineering to develop advanced projects with efficiency and quality.
                </p>
                <div className="about-details">
                    <div className="name-details">
                        <p>Full Name :<span>  Himanshu Yadav</span> </p>
                        
                    </div>
                    <div className="name-details">
                        <p>Age :24 </p>
                    
                    </div>
                    <div className="name-details">
                        <p>Nationality :Indian</p>
                        
                    </div>
                    <div className="name-details">
                        <p>language  : Eglish,hindi</p>
                      
                    </div>
                    <div className="name-details">
                        <p>Address :G-256D,phase-6,band road ,aya nagar,new delhi-110047</p>   
                  </div>
            </div>
            <button className="btn"> Download Cv</button>


            
       </div>
       </div>
    )
}

export default ImageSection
