// Write your code here.
import './index.css'

const FaqItem = props => {
  const {questionDetails, toggleIsCliked, isClicked} = props
  const {id, questionText, answerText} = questionDetails

  const btnStatusSrc = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const onClickBtnStatus = () => {
    toggleIsCliked(id)
  }

  return (
    <li className="list-card">
      <div className="show">
        <h1 className="heading2">{questionText}</h1>

        <button
          onClick={onClickBtnStatus}
          type="button"
          className="plus-minus-btn"
        >
          <img src={btnStatusSrc} className="plus-minus-img" alt="plus minus" />
        </button>
      </div>

      {isClicked ? (
        <div className="hide">
          <hr />
          <p className="paragraph2">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
