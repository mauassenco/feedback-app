import React, {useState} from "react"
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbakStats"
import FeedbackForm from "./components/FeedbackForm"

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id)=> {
    if(window.confirm('Confirm delete ?')){
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  const addFeedback = (newFeedback)=> {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
    console.log(newFeedback);
    

  }

  return (
      <>
        <Header/>
        <div className="container">
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>      
        </div>
      </>
    
  )
}

export default App