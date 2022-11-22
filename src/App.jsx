
import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"
import { useState } from "react"

function App() {
  const getRandomElement=(array)=>{
    const randomIndex=Math.floor(array.length*Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote]=useState(getRandomElement(quoteDB))
  const [color, setColor]=useState(getRandomElement(colors))

  const getNewValues=()=>{
    const newQuote=getRandomElement(quoteDB)
    const newColor=getRandomElement(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const bgObject={
    backgroundColor:color
  }

  const crObj={
    color:color
  }
  

  return (
    <div className="App" style={bgObject}>
      <QuoteBox 
      quote={quote} 
      getNewValues={getNewValues} 
      bgObject={bgObject}
      crObj={crObj}
      />
    </div>
  )
}

export default App
