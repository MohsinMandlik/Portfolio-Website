import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { personalInfo } from "../data/portfolio";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {personalInfo.firstName}
              <br />
              <span>{personalInfo.lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Specializing in</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{personalInfo.primaryRole}</div>
              <div className="landing-h2-2">{personalInfo.secondaryRole}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{personalInfo.primaryRole}</div>
              <div className="landing-h2-info-1">{personalInfo.secondaryRole}</div>
            </h2>
            <p className="landing-support-text">
              {personalInfo.heroSupportingText}
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

