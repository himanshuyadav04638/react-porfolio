import React from 'react'



const Categories = ({filter,categories}) => {
    return (
      <div className="buttons">
            {
            categories.map((cat,i)=>{
                return <button type="button" className="btn-port" onClick={()=>{filter(cat)}}>{cat}</button>
                
            })
        }
      </div>
       
    )
}

export default Categories
