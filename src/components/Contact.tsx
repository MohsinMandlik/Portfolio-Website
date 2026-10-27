import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { personalInfo, socialLinks } from "../data/portfolio";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={`mailto:${personalInfo.email}`}
                data-cursor="disable"
              >
                {personalInfo.email}
              </a>
            </p>
            <h4>Specialization</h4>
            <p>{personalInfo.specialization}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{personalInfo.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {personalInfo.copyrightYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
