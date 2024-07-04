import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./styles.css"

function ImageSlider({url,page, limit}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading ,setLoading] = useState(true)

  const fetchImages=async(getUrl)=>{
    setLoading(true);
    try {
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if(data){
        setImages(data)
        setLoading(false)
      }
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(url !== ''){
      fetchImages(url)
    }
  },[url]);
  
  console.log(images)

  if(loading){
    return <div>Loading data please wait...</div>
  }
  if(error !== null){
    return <div>Error Occured! {error}</div>
  }

  const handlePrev=()=>{
    setCurrentSlide(prev=>{
      if(prev === 0){
        return prev= images.length-1;
      }else{
        return prev=prev -1
      }
    })
  }

  const handleNext=()=>{
    setCurrentSlide((prev)=>{
      if(prev === images.length-1){
        return prev = 0
      }else{
        return prev = prev +1
      }
    })
  }

  return (
    <div className='container'>
      <FaArrowAltCircleLeft onClick ={handlePrev} className='arrow arrow-left'/>
      {
        images && images.length ? images.map((imageItem,index)=>(
          <img key={imageItem.id} alt={imageItem.download_url} src={imageItem.download_url} className={currentSlide === index ? "current-image" : "current-image hide-current-image"}/>
        )) : null
      }
      <FaArrowAltCircleRight onClick ={handleNext} className="arrow arrow-right"/>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={currentSlide === index?"current-indicator": "current-indicator inactive-indicator"}
                
              ></button>
            ))
          : null}
      </span>

    </div>
  )
}

export default ImageSlider