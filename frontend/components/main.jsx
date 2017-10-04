import React from 'react';
import FeedbackForm from './feedback_form';
require('./main.css');

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="global_wrapper">
        <h1>{" اهلا اقتراحات "}</h1>
      <FeedbackForm />
      </div>
    )
  }
}

export default Main;