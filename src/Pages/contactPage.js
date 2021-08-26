import React from 'react'
import Contactitem from '../Components/Contactitem';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import Tittle from '../Components/Tittle';





const ContactPage = () => {
    return (
        <> 
        <div className="cont">
        <Tittle tittle={'About me'} span={'about me'}/>
        </div>
          

        <div className="Contactpage">
           <div className="map-sect">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14029.727782437338!2d77.1370109!3d28.4665356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1629738028070!5m2!1sen!2sin" width="600" height="450" style={{border:0 }} allowFullScreen="" loading="lazy" />
           </div>
           <div className="contact-sect">
               <Contactitem text1={'7503643061'} icon={faPhoneSquare} title={"Phone"}/>
               <Contactitem text1={'hy04638@gmail.com'} icon={faEnvelope} title={"Email"}/>
               <Contactitem text1={'G-256D, phase-6 ,aya nagar,New Delhi-110047'} icon={faHome} title={"Address"}/>
           </div>


        </div>
        </>
    )
}

export default ContactPage
