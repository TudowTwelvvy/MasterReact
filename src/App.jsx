import { useState } from 'react'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMore from './components/load-more-data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Accordian componenet*/}
      {/*<Accordian/>*/}
      {/*<RandomColor/>*/}
      {/*<StarRating/>*/}
      {/*<ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/>*/}
      <LoadMore/>
    </>
  )
}

export default App
