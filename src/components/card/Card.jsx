import React from 'react'
import "../card/Card.css"
import  carddata from "../card/card"
import CardDispaly from '../carddisplay/CardDispaly'
import CardSection from '../cardsection/CardSection.jsx'


function Card() {
  return (
    <>  
    <div className='card'>
      
        <div className="card-row">
       {carddata.map(item=>
       
        <CardDispaly category={item.category} price={item.price} per={item.percent} />
        )}
          
        </div>
      
       <CardSection/>
       
        <div>
      
      </div>
    
</div>

<div>

</div>
    </>
  )
}

export default Card