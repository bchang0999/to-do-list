import useFetchQuote from '../Hooks/useFetchQuote';
import "../styles/Quote.css";

function Quote() {
  const {motivation} = useFetchQuote();

  return (
    <div className='motivation'>

    <div className='motivation__border'>
      <h4 className='motivation__text'>{motivation.text}</h4>
      <p className='motivation__author'>{motivation.author}</p>
    </div>

    </div>
  )
}

export default Quote