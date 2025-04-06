import React from 'react';

function Contact() {
  return (
    <div className='contact-container'>
      <div>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email, phone, or in the following form!
      	</p>
      </div>
			<div className='contact-info'>
				<h3>Email: <a href='mailto:RyseA@cwu.edu'>RyseA@cwu.edu</a></h3>
				<h3>Phone: <a href='tel:+15099923778'>509-992-3778</a></h3>
			</div>
			<div className='form-container'>
				<form id='contact-form'>
					<div className='input-info-container'>
						<input type='text' id='fname' placeholder='First Name'></input>
						<input type='text' id='lname' placeholder='Last Name'></input>
						<input type='text' id='email' placeholder='Email'></input>
					</div>
					<div className='message-container'>
						<input type='text' id='message' placeholder='Message'></input>
					</div>
					<div className='submit-container'>
						<button type='submit'>Send Message</button>
					</div>
				</form>
			</div>
			<p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. 
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. 
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, 
        sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. 
        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. 
        Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. 
        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
      </p>
    </div>
  );
}

export default Contact;