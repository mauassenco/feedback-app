import { useState } from "react";
import RatingSelect from "../RatingSelect";
import Button from "../shared/Button";
import Card from "../shared/Card";

function FeddbackForm({handleAdd}) {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [formValidationMessage, setFormValidationMessage] = useState('')
  const [rating, setRating] = useState(10)

  const handleTextChange = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setFormValidationMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setFormValidationMessage('Review message must have at least 10 characters')
    }else {
      setBtnDisabled(false)
      setFormValidationMessage(null)
    }    
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experince with us ?</h2>
        <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {formValidationMessage && <div className="message">{formValidationMessage}</div>}
    </Card>
  );
}

export default FeddbackForm;
