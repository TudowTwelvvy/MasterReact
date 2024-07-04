import React, { useEffect, useState } from 'react'

function RandomColor() {
  const [typeOfColor, setTypeOfColor] =useState('hex');
  const [color, setColor] = useState('#000000')

  useEffect(()=>{
    if(typeOfColor==='rgb'){
      handleRandomRgbColorClick
    }else{
      handleRandomHexColorClick
    }
  },[typeOfColor])

   
  const randomColorUtility=(length)=>{
    return Math.floor(Math.random()*length)
  }
  const handleRandomHexColorClick=()=>{
    const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i=0;i<6; i++){
      hexColor+= hex[randomColorUtility(hex.length)];
      
    }
    setColor(hexColor)
  }
  const handleRandomRgbColorClick=()=>{
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`)
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: color,
    }}>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={()=>setTypeOfColor('hex')} >Create HEX Color</button>
      <button onClick={typeOfColor==='hex'?  handleRandomHexColorClick : handleRandomRgbColorClick}>Generate Radom Color</button>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
        flexDirection: 'column',
        gap:'20'
      }}>
        <h3>{typeOfColor === 'hex'?"HEX Color:" : "RGB Color:  "}  </h3>
        <h3>  { color}</h3>
      </div>
    </div>
  )
}

export default RandomColor