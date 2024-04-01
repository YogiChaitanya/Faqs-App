// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isClicked: false}

  toggleIsCliked = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachQuestion => {
        if (id === eachQuestion.id) {
          return {...eachQuestion, isClicked: !eachQuestion.isClicked}
        }
        return eachQuestion
      }),
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachQuestion => (
              <FaqItem
                key={eachQuestion.id}
                questionDetails={eachQuestion}
                isClicked={isClicked}
                toggleIsCliked={this.toggleIsCliked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
