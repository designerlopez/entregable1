
const QuoteButton = ({getNewValues, bgObject}) => {
  return (
    <button onClick={getNewValues} style={bgObject}>
      <i className='bx bx-chevron-right'></i>
      
    </button>
    
    )
}

export default QuoteButton