import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubscript, faCircleNodes, faMicrochip } from '@fortawesome/free-solid-svg-icons'; // Added faMicrochip for a relevant icon

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
                    {/* Placeholder for an image or icon */}
                    <FontAwesomeIcon icon={faMicrochip} className='item-icon' /> 
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
                    {/* Placeholder for an image or icon */}
                    <FontAwesomeIcon icon={faSubscript} className='item-icon' />
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
                    {/* Placeholder for an image or icon */}
                    <FontAwesomeIcon icon={faCircleNodes} className='item-icon' />
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
                    {/* Placeholder for an image or icon */}
                    <FontAwesomeIcon icon={faSubscript} className='item-icon' />
                </div>
            </div>
        </div>
    );
};

export default ZigZag;