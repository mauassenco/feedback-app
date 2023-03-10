import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "../FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedbacks yet !</p>;
  }

  
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: "fit-content"  }}
              exit={{ opacity: 0, scale: 0, height: 0}}
              transition={{ duration: 0.5 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item, index) => {
  //       return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />;
  //     })}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
