import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../../context/FeedbackContext"
import FeedbackItem from "../FeedbackItem"
import Spinner from "../shared/Spinner"

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedbacks yet !</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: "fit-content" }}
              exit={{ opacity: 0, scale: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item, index) => {
  //       return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />;
  //     })}
  //   </div>
  // );
}

export default FeedbackList
