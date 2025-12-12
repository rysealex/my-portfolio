import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function Footer() {

	// get the current year
	const currYear = new Date().getFullYear();

  	return (
		<div className='footer-container'>
			<div className='footer-row'>
				<div className='socials' id='footer-socials'>
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/alex-ryse/" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faLinkedinIn} />
							</a>
						</li>
						<li>
							<a href="https://github.com/rysealex" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faGithub} />
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
							<a href="#experience"><b>Experience</b></a>
						</li>
						<li>
							<a href="#skills"><b>Skills</b></a>
						</li>
						<li>
							<a href="#projects"><b>Projects</b></a>
						</li>
						<li>
							<a href="#contact"><b>Contact</b></a>
						</li>
						<li>
							<a href="Resume Alex Ryse 3.2.pdf" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faFilePdf} /> <b>RESUME</b>
							</a>
						</li>
					</ul>
				</div>
				<div className='copyright-container'>
					<span id='last-upd'>Last Updated: December 2025</span>
					<br />
					<span>Copyright © Alex Ryse {currYear}</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;