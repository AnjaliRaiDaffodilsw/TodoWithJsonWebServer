import React, { useState } from 'react'

import '../assets/styles/Form.css';

const Form = (props) => {
  const {
    submitHandler,
    buttonTitle,
    placeholderValue,
    inputType,
    buttonType,
    cardHeader,
    initialValue
  } = props;

  const [textValue, setTextValue] = useState(initialValue);

  return (
    <div className="card border-0 shadow">
      <div className="card-header">{cardHeader}</div>
      <div className="card-body">
        <form onSubmit={(event) => submitHandler(event, textValue)}>
          <div className="form-group">
            <input
              type={inputType}
              className="form-control"
              placeholder={placeholderValue}
              value={textValue}
              autoFocus
              onChange={(event) => setTextValue(event.target.value)}
            />
          </div>
          <button className="btn btn-primary submit-btn" type={buttonType}>
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form;