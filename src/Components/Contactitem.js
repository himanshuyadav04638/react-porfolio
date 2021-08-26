import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contactitem = ({text1,icon,title}) => {
    return (
        <div className="ContactItem">
           <div className="contact">
               <FontAwesomeIcon icon={icon} className='ContactIcon' />
               <div className="right-item">
                   <h6>{title}</h6>
                   <p>{text1}</p>
               </div>
               
           </div>
            
        </div>
    )
}

export default Contactitem
