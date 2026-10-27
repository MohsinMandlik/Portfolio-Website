import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/portfolio";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const container = document.querySelector(".work-container");
      if (!container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX > 0 ? translateX : 800}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((proj) => (
            <div className="work-box" key={proj.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{proj.id}</h3>

                  <div>
                    <h4>{proj.title}</h4>
                    <p>{proj.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{proj.tools}</p>
                <p className="work-desc">{proj.description}</p>
                {(proj.link || proj.github) && (
                  <div className="work-links-bar">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn-link"
                        data-cursor="disable"
                      >
                        Live Demo <MdArrowOutward />
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn-link"
                        data-cursor="disable"
                      >
                        Code <MdArrowOutward />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <WorkImage
                image={proj.image}
                alt={proj.title}
                link={proj.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
