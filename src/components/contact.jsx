import React from 'react';

function Contact() {
  return (
    <div className='contact-container'>
      <div>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email, phone, or with the following form!
      	</p>
      </div>
			<div className='contact-info'>
				<h3>Email: <a href='mailto:RyseA@cwu.edu'>RyseA@cwu.edu</a></h3>
				<h3>Phone: <a href='tel:+15099923778'>509-992-3778</a></h3>
			</div>
			<div className='form-container'>
				<form id='contact-form'>
          <div className='contact-form-container'>
            <div className='input-info-container'>
              <input type='text' id='fname' placeholder='First Name'></input>
              <input type='text' id='lname' placeholder='Last Name'></input>
              <input type='text' id='email' placeholder='Email'></input>
					  </div>
            <textarea id='message' placeholder='Message'></textarea>
          </div>
					<div className='submit-container'>
						<button type='submit'><b>Send Message</b></button>
					</div>
				</form>
			</div>
    </div>
  );
}

export default Contact;