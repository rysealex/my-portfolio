import { use, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  // contact info use states
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // error messages use state
  const [errorMessages, setErrorMessages] = useState([]);

  // message state use state
  const [messageState, setMessageState] = useState("");

  // is loading use state
  const [isLoading, setIsLoading] = useState(false);

  // event handlers to update state variables
  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // handle when the submit button clicked
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the page reload

    const errors = [];

    // check if any information is empty
    if (fname === "") {
      errors.push("Please enter your first name"); 
    }
    if (lname === "") {
      errors.push("Please enter your last name"); 
    }
    if (email === "") {
      errors.push("Please enter your email address"); 
    }
    if (message === "") {
      errors.push("Please enter your message"); 
    }

    // check for any errors
    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    // if all fields are filled
    if (fname, lname, email, message) {
      // set is loading to true
      setIsLoading(true);

      // paramaters for the email
      const params = {
        fname: fname,
        lname: lname,
        email: email,
        message: message
      };

      // send the email
      emailjs.send('service_ucriuff', 'template_06qotcl', params, '1z4WNU078pUmSgIFp')
        .then((result) => {
          setMessageState("Message Successfully Sent!\nThank You!");
          // delay the message state reset by 5 seconds
          setTimeout(() => {
            setMessageState("");
          }, 5000);
        })
        .catch((error) => {
          setMessageState("Error! Message could not be sent. Please try again.");
        })
        .finally(() => {
          setIsLoading(false); // stop is loading
          // clear the form and errors after successful send
          setFname("");
          setLname("");
          setEmail("");
          setMessage("");
          setErrorMessages([]);
        });
    }
  };

  return (
    <div className='contact-container'>
      <div>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email, phone, or with the following form!
      	</p>
      </div>
			<div className='contact-info'>
				<h3>Personal Email: <a href='mailto:aryse54@gmail.com'>aryse54@gmail.com</a></h3>
        <h3>School Email: <a href='mailto:RyseA@cwu.edu'>RyseA@cwu.edu</a></h3>
				<h3>Phone: <a href='tel:+15099923778'>509-992-3778</a></h3>
			</div>
			<div className='form-container'>
				<form id='contact-form' onSubmit={handleSubmit}>
          <div className='contact-form-container'>
            <div className='input-info-container'>
              <input type='text' id='fname' placeholder='First Name' onChange={handleFnameChange} value={fname}></input>
              <input type='text' id='lname' placeholder='Last Name' onChange={handleLnameChange} value={lname}></input>
              <input type='text' id='email' placeholder='Email' onChange={handleEmailChange} value={email}></input>
					  </div>
            <textarea id='message' placeholder='Message' onChange={handleMessageChange} value={message}></textarea>
          </div>
          <p className='error'>
            {errorMessages.map((err, index) => (
              <div key={index} style={{ color: 'red' }}>{err}</div>
            ))}
          </p>
          <p className='message-state'>
            <div>{messageState}</div>
          </p>
					<div className='submit-container'>
						<button type='submit' disabled={isLoading}>
              {isLoading ? 'Sending...': <b>Send Message</b>}
            </button>
					</div>
				</form>
			</div>
    </div>
  );
}

export default Contact;