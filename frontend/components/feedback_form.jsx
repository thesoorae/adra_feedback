import React from 'react';
require('./feedback_form.css');

class FeedbackForm extends React.Component {
  constructor(props){
    super(props)
    this.optional = this.optional.bind(this)
    this.render_suggestion_form = this.render_suggestion_form.bind(this)
    this.render_response_form = this.render_response_form.bind(this)
    this.render_personnel_form = this.render_personnel_form.bind(this)
    this.render_contact_form = this.render_contact_form.bind(this)
    this.render_position_form = this.render_position_form.bind(this)
    this.render_button = this.render_button.bind(this)
  }

  optional(str){
    return (
      <div className="optional_row">
        <div className="optional">
        {"(اختياري) "}  
        
        </div>
        <div className="label_text">
          {str}
        </div>
      </div>
    )
  }

  render_personnel_radios(name){
    return(
      <div className="radio_rows">
        <div className="radio_row">
            <label for="staff">موظف </label>
            <input className="radio" type="radio" id="staff" name={name} value="staff"/>
          </div>
          <div className="radio_row">
            
            <label for="community">زميل مشارك </label>
            <input className="radio" type="radio" id="community" name={name} value="community"/>
          </div>
          <div className="radio_row">
            
            <label for="government">مسؤول حكومي </label>
            <input className="radio" type="radio" id="government" name={name} value="government"/>
          </div>
          <div className="radio_row">
            <input type="text" className="input_text" name="other_recipient"/>
            <label for="other">آخر </label>
            <input className="radio" type="radio" id="other" name={name} value="other"/>
          </div>
        </div>
    )
  }
  
  render_suggestion_form(){
    return(
      <div className="question_col">
        <label for="suggestion_text"> ما هو اقتداحك او شكوه؟ </label>
        <div className="text_container">
          <textarea id="suggestion_text" name="suggestion_text" className="suggestion_textarea" />
        </div>
      </div>
    )
  }

  render_response_form(){
    return (
      <div className="question_col">
        <label for="action_requested"> {this.optional("الاستجابة المطلوبة")}</label>
        <div className="text_container">
          <textarea id="action_requested" name="action_requested" className="action_textarea" />
        </div>
      </div>
      )
  }

  render_personnel_form(){
    return(
      <div className="question_col">
        <div className="radio_question"> {this.optional("لمن توجه تعليقك؟")}  </div>
        {this.render_personnel_radios("recipient")}
      </div>
    )
  }

  render_contact_form(){
    return(
      <div className="question_row">
        <div className="question_row">
          <input type="text" className="input_text" name="telephone" id="telephone" />
          <label for="telephone"> {this.optional("رقم هاتف")}</label>
        </div>

        <div className="question_row">
          <input type="text" className="input_text" name="location" id="location" />
          <label for="location"> {this.optional("مدينه")}</label>
        </div>

      </div>
    )
  }

  render_position_form(){
    return (
      <div className="question_col">
        <div className="radio_question"> {this.optional("ما هو منصبك؟")}  </div>
        {this.render_personnel_radios("reporter_position")}
      </div>
    )
  }

  render_button(){
    return(
      <input type="submit" value="إرسال" className="submit_btn" />
    )
  }
  render(){
    return (
      <form className="feedback_form"> 
        {this.render_response_form()}
        {this.render_suggestion_form()}
        {this.render_personnel_form()}
        {this.render_contact_form()}
        {this.render_position_form()}
        {this.render_button()}
      </form>
    )
  }
}

export default FeedbackForm;