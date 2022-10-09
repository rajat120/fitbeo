import React, { useState } from 'react'
import sidedata from '../sidebar/sidebardata'
import "../../components/sidebar/Sidebar.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardSection from '../cardsection/cardSection';
import Card from '../card/Card.jsx';



function Sidebar() {
  const [click, setClick] = useState(false)
  const handleArrowClick=()=>{
    setClick(!click);
}
  return (
    <>
    <div className='sidebar-container'>
      <div className='sidebar-header row'>
      <p className={`${click ? 'active ' : 'header-title'}`}>Dashboard</p>
   {click ? <KeyboardArrowUpIcon onClick= {handleArrowClick}/> :  <ExpandMoreIcon onClick= {handleArrowClick}/>}   
    </div>
    {click && sidedata.map(data=> (
    <div>
       {data.Dashboard.map(item=>
       <div className='sideoptions'>{item.options}</div>
       )
        }
  
    </div>
  )
     )}
     <div>
    <p className='sideoptions'>Applications</p>
    
  </div>
  {sidedata.map(item=>item.Applications.map(data=>(
    <div className={`${data.icon ? 'row': 'sideoptions'}`}>
   {data.options}
   {data.icon}
    </div>
  )))}

  <div>
    <p className='sideoptions'>Layouts</p>
  </div>
  <div>
    <p className='sideoptions'>Pages</p>
    {sidedata.map(item=>item.Pages.map(data=>(
    <div className={`${data.icon ? 'row': 'sideoptions'}`} >
   {data.options} {data.icon}
    </div>
  )))}
  </div>
  <div>
    <p className='sideoptions'>Components</p>
    {sidedata.map(item=>item.Components.map(data=>(
    <div className={`${data.icon ? 'row': 'sideoptions'}`}>
   {data.options} {data.icon}
    </div>
  )))}
  </div>

    </div>
    
    </>
  )
}

export default Sidebar