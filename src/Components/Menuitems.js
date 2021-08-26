import React from 'react'

const Menuitems = ({menuItems}) => {
    return (
        <div className="projectfull">
            {menuItems.map((item)=>{
                return(
                    <div className='project' key={item.id}>
                        <div className="image-data">
                        <a href={item.Link} target="_blank"> <img src={item.image} alt="xyz" /></a>
                           
                            <ul className="hover-item">
                                <li>
                                    <a href={item.Link} target="_blank">{item.tittle}</a>
                                </li>
                            </ul>

                        </div>
                        <h5>{item.category}</h5>
                       
                     </div>
                )
            })}
            
        </div>
    )
}

export default Menuitems
