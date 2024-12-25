import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1 from Context",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2 from Context",
      rating: 5,
    },
    {
      id: 3,
      text: "This is feedback item 3 from Context",
      rating: 1,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Confirm delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const updateFeedback = (id, newFeedbackData) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...newFeedbackData } : item,
      ),
    )
  }

  return (
    <FeedbackContext.Provider 
    value={{ 
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
        }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
