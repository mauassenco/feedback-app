import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React.js app to leave feedbacks for a service or a product</p>
        </div>
        <p>
            <Link to="/">Back To Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage


