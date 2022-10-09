import React from 'react'
import  "../../components/carddisplay/CardDisplay.css"


function CardDispaly({category, price,per}) {
  return (
    <>
    <div className='card-container'>
        <div className='card-content'>
            <div>{category}</div>
            <div className='row-wrap'>
                
            <div>{price}</div>
           <div className={`${per > 0 ? 'active-green' : 'red'}`}> {per}</div> 
           </div>
        
        </div>
       
       
        </div>
        </>
  )
}

export default CardDispaly