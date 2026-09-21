import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faGraduationCap,
  faCircleNotch,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [errorMessages, setErrorMessages] = useState([]);
  const [messageState, setMessageState] = useState(""); // 'success' | 'error' | ''
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState("");

  const handleCopyEmail = (e, emailAddress, id) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedId(id);
    setTimeout(() => setCopiedId(""), 2500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = [];
    if (!fname.trim()) errors.push("Please enter your first name");
    if (!lname.trim()) errors.push("Please enter your last name");
    if (!email.trim() || !email.includes("@"))
      errors.push("Please enter a valid email address");
    if (!message.trim()) errors.push("Please enter your message");

    if (errors.length > 0) {
      setErrorMessages(errors);
      if (!fname.trim()) fnameRef.current?.focus();
      else if (!lname.trim()) lnameRef.current?.focus();
      else if (!email.trim()) emailRef.current?.focus();
      else messageRef.current?.focus();
      return;
    }

    setIsLoading(true);
    setErrorMessages([]);

    const params = {
      fname,
      lname,
      email,
      message,
    };

    emailjs
      .send("service_ucriuff", "template_06qotcl", params, "1z4WNU078pUmSgIFp")
      .then(() => {
        setMessageState("success");
        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
        setTimeout(() => setMessageState(""), 6000);
      })
      .catch(() => {
        setMessageState("error");
        setTimeout(() => setMessageState(""), 6000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-container" id="contact">
      {/* Section Header */}
      <div className="contact-header">
        <span className="section-eyebrow">GET IN TOUCH</span>
        <h2>Let's Connect & Collaborate</h2>
        <p className="section-subtitle">
          Whether you want to discuss full-time software engineering
          opportunities, distributed systems, research, or innovative technical
          challenges—my inbox is always open.
        </p>
      </div>

      {/* Main Split Layout */}
      <div className="contact-bento-grid">
        {/* Left Column: Channels & Availability */}
        <div className="contact-channels-card">
          {/* Live Status Pill Card */}
          <div className="contact-status-card">
            <span className="contact-live-dot" />
            <div className="contact-status-text">
              <strong>Open to Full-Time SWE Opportunities</strong>
              <p>Graduating Jun 2028 • Greater Seattle Area, WA</p>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="contact-channels-list">
            {/* Personal Email */}
            <div className="contact-channel-item">
              <div className="channel-icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Personal Email</span>
                <a href="mailto:aryse54@gmail.com" className="channel-link">
                  aryse54@gmail.com
                </a>
              </div>
              <button
                type="button"
                className={`copy-btn ${copiedId === "personal" ? "copied" : ""}`}
                onClick={(e) =>
                  handleCopyEmail(e, "aryse54@gmail.com", "personal")
                }
                title="Copy email to clipboard"
              >
                <FontAwesomeIcon
                  icon={copiedId === "personal" ? faCheck : faEnvelope}
                />
                <span>{copiedId === "personal" ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Academic Email */}
            <div className="contact-channel-item">
              <div className="channel-icon-box">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Academic Email</span>
                <a href="mailto:alexryse@uw.edu" className="channel-link">
                  alexryse@uw.edu
                </a>
              </div>
              <button
                type="button"
                className={`copy-btn ${copiedId === "academic" ? "copied" : ""}`}
                onClick={(e) =>
                  handleCopyEmail(e, "alexryse@uw.edu", "academic")
                }
                title="Copy email to clipboard"
              >
                <FontAwesomeIcon
                  icon={copiedId === "academic" ? faCheck : faEnvelope}
                />
                <span>{copiedId === "academic" ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="contact-channel-item">
              <div className="channel-icon-box">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Direct Phone</span>
                <a href="tel:+15099923778" className="channel-link">
                  (509) 992-3778
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-channel-item">
              <div className="channel-icon-box">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Location</span>
                <span className="channel-text">Greater Seattle Area, WA</span>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="contact-socials-card">
            <span className="socials-label">Professional Profiles</span>
            <div className="contact-social-buttons">
              <a
                href="https://www.linkedin.com/in/alex-ryse/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span>LinkedIn</span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mini-ext"
                />
              </a>
              <a
                href="https://github.com/rysealex"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn github"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mini-ext"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Frosted Glass Contact Form */}
        <div className="contact-form-glass-card">
          <div className="form-card-header">
            <h3>Send a Message</h3>
            <p>
              Fill out the form below and it will be delivered directly to my
              inbox.
            </p>
          </div>

          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row-two">
              <div className="form-field">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="John"
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
                  ref={fnameRef}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Doe"
                  onChange={(e) => setLname(e.target.value)}
                  value={lname}
                  ref={lnameRef}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ref={emailRef}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                placeholder="Hi Alex, I would like to discuss a potential collaboration..."
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                ref={messageRef}
                required
              />
            </div>

            {/* Error Alerts */}
            {errorMessages.length > 0 && (
              <div className="form-alert-box error">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="alert-icon"
                />
                <div className="alert-text">
                  <strong>Please check the following:</strong>
                  <ul>
                    {errorMessages.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Success Alert */}
            {messageState === "success" && (
              <div className="form-alert-box success">
                <FontAwesomeIcon icon={faCircleCheck} className="alert-icon" />
                <div className="alert-text">
                  <strong>Message Successfully Sent!</strong>
                  <p>
                    Thank you for reaching out! I'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            )}

            {/* Server Error Alert */}
            {messageState === "error" && (
              <div className="form-alert-box error">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="alert-icon"
                />
                <div className="alert-text">
                  <strong>Message Could Not Be Sent</strong>
                  <p>
                    Please reach out directly to{" "}
                    <a href="mailto:aryse54@gmail.com">aryse54@gmail.com</a>.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="form-submit-row">
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="btn-spin"
                    />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="btn-plane"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
