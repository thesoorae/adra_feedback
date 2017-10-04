import React from 'react';
require('./feedback_form.css');

class FeedbackForm extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <form className="feedback_form"> 

        <div className="question_col">
          
          <label for="suggestion_text"> ما هو اقتداحك او شكوه؟ </label>
          <div className="suggestion_container">  
            <textarea id="suggestion_text" name="suggestion_text" className="suggestion_textarea"/>
          </div>
        </div>

        <div className="question_col">
          
          
            <div className="radio_question"> لمن توجه تعليقك؟ </div>
            <div className="radio_row">
              <label for="staff">موظف </label>
              <input className="radio" type="radio" id="staff" name="recipient" value="staff"/>
            </div>
            <div className="radio_row">
              
              <label for="community">زميل مشارك </label>
              <input className="radio" type="radio" id="community" name="recipient" value="community"/>
            </div>
            <div className="radio_row">
              
              <label for="government">مسؤول حكومي </label>
              <input className="radio" type="radio" id="government" name="recipient" value="government"/>
            </div>
            <div className="radio_row">
              <input type="text" name="other_recipient"/>
              <label for="other">آخر </label>
              <input className="radio" type="radio" id="other" name="recipient" value="other"/>
            </div>
          </div>
        

      </form>
    )
  }
}

export default FeedbackForm;