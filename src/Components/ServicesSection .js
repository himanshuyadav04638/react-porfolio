import React from 'react'

const ServicesSection  = ({image,text}) => {
    return (
        <div className="ServicesSection">
          <div class="card">
      <img src={image} alt="Avatar" style={{width:"100%"}} />
      <div class="container">
       <h4><b>{text}</b></h4>
       </div>
</div>
            
            
        </div>
    )
}

export default ServicesSection ;
