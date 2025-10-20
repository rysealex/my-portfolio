// import nommsLogo from '../nomms.jpg';
// import tduLogo from '../tdu.jpg';
// import cwuLogo from '../cwu-logo.png';

function ZigZag() {
    return (
        <div className="wrapper">
            <div className="experience-item item-one">
                <div className="text-content">
                    <h3 className='job-title'>Software Engineer Intern, Nomms</h3>
                    <p className='exp-left-align'> 
                        My internship at Nomms provided hands-on experience in <b>full-stack software development</b>. 
                        I engineered a solution that dramatically improved application performance and user experience by reducing latency. 
                        I also managed database migrations and contributed to front-end features as part of a collaborative team. 
                        This opportunity helped me grow as a developer and taught me the importance of communication and agile practices in a professional setting.
                    </p>
                    <div className="link-group">
                        <p><i>Visit the official Nomms page and my resume to learn more:</i></p>
                        <a href='https://ordernomms.com/' target="_blank" rel="noopener noreferrer" className="experience-link">Nomms Official Page</a>
                        <span className="link-divider"> | </span>
                        <a href='Resume Alex Ryse 3.2.pdf' target="_blank" rel="noopener noreferrer" className="experience-link">Resume</a>
                    </div>
                </div>
                <div className="image-placeholder">
                    <a href='https://ordernomms.com/' target="_blank" rel="noopener noreferrer">
                        <img src='nomms.jpg' alt='nomms-logo' className='item-icon' id='nomms-logo'></img>
                    </a>
                </div>
            </div>
            
            <div className="experience-item item-two">
                <div className="text-content">
                    <h3 className='job-title'>International Drone Competition, Tokyo Denki University</h3>
                    <p className='exp-left-align'>
                        I had the unique opportunity to participate in an international drone competition at Tokyo Denki University, representing Central Washington University. 
                        In a collaborative, fast-paced environment, my team developed <b>Python-based algorithms for drone navigation and object detection</b>. 
                        We were able to leverage computer vision principles to successfully complete all challenges.
                        This experience was not only a fantastic technical challenge but also a lesson in cross-cultural teamwork and communication.
                    </p>
                    <div className="link-group">
                        <p><i>Visit the official university page and my LinkedIn post to learn more:</i></p>
                        <a href='https://www.dendai.ac.jp/about/international/gakunai.html/international_workshop_english.html' target="_blank" rel="noopener noreferrer" className="experience-link">TDU Official Page</a>
                        <span className="link-divider"> | </span>
                        <a href='https://www.linkedin.com/posts/alex-ryse_python-opencv-robotics-activity-7359496300502945792-6Qas/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQxvA8By1W3Eq1TwDOzvbiApA_mBZUc_Vo' target="_blank" rel="noopener noreferrer" className="experience-link">LinkedIn Post</a>
                    </div>
                </div>
                <div className="image-placeholder">
                    <a href='https://www.dendai.ac.jp/en/' target="_blank" rel="noopener noreferrer">
                        <img src='tdu.jpg' alt='tdu-logo' className='item-icon'></img>
                    </a>
                </div>
            </div>
            
            <div className="experience-item item-three">
                <div className="text-content">
                    <h3 className='job-title'>Teacher Assistant & Mathematics Tutor, Central Washington University</h3>
                    <p className='exp-left-align'>
                        As a student at Central Washington University, I have held multiple academic roles that have been foundational to my professional growth. 
                        As a <b>Teacher Assistant for Advanced Data Structures</b>, I honed my technical abilities by mentoring students and debugging code. 
                        As a <b>Mathematics Tutor</b>, I developed strong communication skills by guiding students through complex problems. 
                        These experiences taught me not only how to solve problems but also how to effectively teach others to do the same.
                    </p>
                    <div className="link-group">
                        <p><i>Visit the official university pages to learn more:</i></p>
                        <a href='https://catalog.acalog.cwu.edu/preview_course_nopop.php?catoid=67&coid=156420' target="_blank" rel="noopener noreferrer" className="experience-link">Teacher Assistant</a>
                        <span className="link-divider"> | </span>
                        <a href='https://www.cwu.edu/academics/academic-resources/learning-commons/tutoring/math-center/index.php' target="_blank" rel="noopener noreferrer" className="experience-link">Mathematics Tutor</a>
                    </div>
                </div>
                <div className="image-placeholder">
                    <a href='https://www.cwu.edu/' target="_blank" rel="noopener noreferrer">
                        <img src='cwu-logo.png' alt='cwu-logo' className='item-icon'></img>
                    </a>
                </div>
            </div>
            
            {/* <div className="experience-item item-four">
                <div className="text-content">
                    <p><b>Mathematics Tutor, Central Washington University</b></p>
                    <p>
                        Tutored university students and peers in multiple advanced mathematics courses.
                        Enhanced students’ conceptual understanding and challenged students to find solutions on their own.
                        Helped me develop strong analytical, problem-solving, and communication skills.
                    </p>
                </div>
                <div className="image-placeholder">
                    <a href='https://www.cwu.edu/academics/academic-resources/learning-commons/tutoring/math-center/index.php' target="_blank" rel="noopener noreferrer">
                        <img src={cwuLogo} alt='cwu-logo' className='item-icon'></img>
                    </a>
                </div>
            </div> */}
        </div>
    );
};

export default ZigZag;