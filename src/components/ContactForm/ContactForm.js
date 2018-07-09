
import React, { Component } from 'react';


import './ContactForm.css';


class ContactForm extends Component {

  render() {

    return (
        <div>
        <div id="form-main">
        <div id="form-div">
       
          <form
          action="https://formspree.io/medbiennale20@gmail.com"
           className="form"
           method="POST"
            id="form1"
            
            >
            <input type="hidden" name="_next" value="/thanks" />

            <p className="name">
              <input name="user_name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
            </p>
            
            <p className="email">
              <input name="_replyto" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
            </p>
            
            <p className="text">
              <textarea name="message" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
            </p>
            
            
            <div className="submit">
              <input type="submit" value="SEND" id="button-blue"/>
              <div className="ease"></div>
            </div>
          </form>
        </div>
  </div>
  </div>
    );
  }
}

export default ContactForm;