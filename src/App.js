import React from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbakStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from "./context/FeedbackContext"

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}

export default App
