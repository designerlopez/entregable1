import React from "react"
import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, bgObject, crObj}) => {
  return (
    <article className="quoteBox">
        <p style={crObj}>{quote.quote}</p>
        <h4 style={crObj}>{quote.author}</h4>
        <section className="quoteBox-footer">
        <QuoteButton getNewValues={getNewValues} bgObject={bgObject}/>
        <i style={crObj}className='bx bxs-quote-left'></i>
        </section>


    </article>
  )
}

export default QuoteBox