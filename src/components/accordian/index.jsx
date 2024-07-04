import React, { useState } from 'react'
import data from './data';
import './styles.css'

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [openAll, setOpenAll] = useState(false)
  const [all,setAll] = useState([])
  
  console.log(selected)

  const handleOpenClick = (id)=>{
    
    setSelected(prev => {
      if (id !== prev){
        return prev = id
      }else{
        return null
      }
    })
  }

  const handleOpenAllClick=(id)=>{
    let copyAll = [...all];
    const findIndexOfCurrentId = copyAll.indexOf(id);
    if (findIndexOfCurrentId === -1) {
      copyAll.push(id);
    }else{
      copyAll.splice(findIndexOfCurrentId, 1);
    } 

    setAll(copyAll);
  }
 console.log(selected, all)
  return (
    <div className='wrapper'>
      <button onClick={()=>setOpenAll(prev=>!prev)}  className='button'>Open All Selection</button>
      <div className="accordian">
        {
          data && data.length > 0? (data.map((item)=>(
            <div className='item' key={item.id}>
              <div onClick={openAll ? ()=> handleOpenAllClick(item.id): ()=>handleOpenClick (item.id)} className='title'>
                <h3>{item.question}</h3>
                <span>{selected === item.id || all.indexOf(item.id) !== -1 ? <h1>-</h1>: <h1>+</h1> }</span>
              </div>
              {
                selected === item.id || all.indexOf(item.id) !== -1 ?  <div className='content'>{item.answer}</div> : null
              }
            </div>
          ))) :(<div>No Data Present</div>)
        }
       
      </div>
    </div>
  )
}

export default Accordian;