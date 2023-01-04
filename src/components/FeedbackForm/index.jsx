import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";

function FeddbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [formValidationMessage, setFormValidationMessage] = useState('')

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

  return (
    <Card>
      <form>
        <h4>How would you rate your experince with us ?</h4>
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
