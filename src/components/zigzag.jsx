import nommsLogo from '../nomms.jpg';
import tduLogo from '../tdu.jpg';
import cwuLogo from '../cwu-logo.png';

function ZigZag() {
    return (
        <div className="wrapper">
            <div className="experience-item item-one">
                <div className="text-content">
                    <p><b>Software Engineer Intern, Nomms</b></p>
                    <p>
                        Tutored university students and peers in multiple advanced mathematics courses.
                        Enhanced students’ conceptual understanding and challenged students to find solutions on their own.
                        Helped me develop strong analytical, problem-solving, and communication skills.
                    </p>
                </div>
                <div className="image-placeholder">
                    <a href='https://ordernomms.com/' target="_blank" rel="noopener noreferrer">
                        <img src={nommsLogo} alt='nomms-logo' className='item-icon' id='nomms-logo'></img>
                    </a>
                </div>
            </div>
            
            <div className="experience-item item-two">
                <div className="text-content">
                    <p><b>International Drone Competition, Tokyo Denki University</b></p>
                    <p>
                        Tutored university students and peers in multiple advanced mathematics courses.
                        Enhanced students’ conceptual understanding and challenged students to find solutions on their own.
                        Helped me develop strong analytical, problem-solving, and communication skills.
                    </p>
                </div>
                <div className="image-placeholder">
                    <a href='https://www.dendai.ac.jp/en/' target="_blank" rel="noopener noreferrer">
                        <img src={tduLogo} alt='tdu-logo' className='item-icon'></img>
                    </a>
                </div>
            </div>
            
            <div className="experience-item item-three">
                <div className="text-content">
                    <p><b>Teacher Assistant, Central Washington University</b></p>
                    <p>
                        Mentored students in applying advanced data structure concepts and file processing techniques under the
                        supervision of the course instructor. Graded assignments, diagnosed errors in student code, and provided actionable feedback to help debug
                        and improve code quality.
                    </p>
                </div>
                <div className="image-placeholder">
                    <a href='https://catalog.acalog.cwu.edu/preview_course_nopop.php?catoid=60&coid=135829' target="_blank" rel="noopener noreferrer">
                        <img src={cwuLogo} alt='cwu-logo' className='item-icon'></img>
                    </a>
                </div>
            </div>
            
            <div className="experience-item item-four">
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
            </div>
        </div>
    );
};

export default ZigZag;