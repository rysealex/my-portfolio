import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function Footer() {

	// get the current year
	const currYear = new Date().getFullYear();

  return (
		<div className='footer-container'>
			<div className='footer-row'>
				<div className='copyright-container'>
					<span>Copyright © Alex Ryse {currYear}</span>
					<br />
					<span id='last-upd'>Last Updated: April 2025</span>
				</div>
				<div className='socials' id='footer-socials'>
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/alex-ryse/">
								<FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
							</a>
						</li>
						<li>
							<a href="https://github.com/rysealex">
								<FontAwesomeIcon icon={faGithub} size="lg"/>
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-nav-container'>
					<ul>
						<li>
							<a href="#about"><b>About</b></a>
						</li>
						<li>
							<a href="#contact"><b>Contact</b></a>
						</li>
						<li>
							<a href="Resume Alex Ryse Upd 2.0.pdf" target='_blank'><FontAwesomeIcon icon={faFilePdf} /> <b>RESUME</b></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;