import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import "./styles.css"

function StarRating({numOfStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick =(currentIndex)=>{
    setRating(prev=> prev= currentIndex)
  }
  const handleMouseEnter =(currentIndex)=>{
    setHover(prev=> prev= currentIndex)
  }
  const handleMouseLeave =()=>{
    setHover(prev=> prev= rating)

  }
  console.log(rating)
  console.log(hover)


  return (
    <div className='star-rating'>
      {
        [...Array(numOfStars)].map((_,index)=>{
          index+=1
          return <FaStar className={index<= (hover|| rating)? 'active' :"notActive" } key={index} onClick={()=> handleClick(index)} onMouseMove={()=> handleMouseEnter(index)} onMouseLeave={handleMouseLeave} size={40}/>
        })
      }
    </div>
  )
}

export default StarRating
