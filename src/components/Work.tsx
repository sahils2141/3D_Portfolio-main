

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

const workData = [
  {
    title: "Electricity billing system",
    category: "Development",
    tools: "Java, AWT, Swing, MySQL",
    image: "/images/electric system.png",
    link: "https://github.com/sahils2141/Electricity-billing-system",
  },
  {
    title: "E-commerce website",
    category: "Design & Development",
    tools: "HTML, CSS, Javascript, Java, MySQL, BootStrap",
    image: "/images/ecommerce.png",
    link: "https://github.com/sahils2141/e-commerce-website",
  },
  {
    title: "Skin care E-commerce Website",
    category: "Design & Development",
    tools: "WordPress, Elementor Pro, GSAP, Javascript,PHP,HTML&CSS",
    image: "/images/nuuv.png",
    link: "https://nuuvessentials.com/",
  },
  {
    title: "Card E-commerce Website",
    category: "Design & Development",
    tools: "WordPress, Elementor Pro, GSAP, Javascript,PHP,HTML&CSS",
    image: "/images/unscriptedgames.png",
    link: "https://unskriptedgames.com/",
  },
  {
    title: "Dermatologist Website",
    category: "Frontend Development",
    tools: "WordPress, Elementor Pro, Javascript,HTML&CSS",
    image: "/images/dr marwah.png",
    link: "https://new-web.drmarwah.com/",
  },
  {
    title: "Agency portfolio Website",
    category: "Frontend Development",
    tools: "WordPress, Elementor Pro, GSAP, Javascript, MySql",
    image: "/images/agency website.png",
    link: "https://thesociallions.in/",
  },
  {
    title: "Mailing syatem",
    category: "Development",
    tools: "HTML, CSS, Javascript, PHP, JQuery, MySQL,Ajax",
    image: "/images/grupmail.png",
    link: "https://grupsautomation.info/gems/",
  },
  {
    title: "Email extractore syatem from web search",
    category: "Backend Development",
    tools: "HTML, CSS, Javascript, PHP, JQuery, MySQL",
    image: "/images/email-extractor.png",
    link: "https://grupsautomation.co.in/email-extract.php",
  },
  {
    title: "Bulk Mailing and tracking system",
    category: "Development",
    tools: "HTML, CSS, bootstrap, Javascript, PHP,JQuery, Ajax, MySQL",
    image: "/images/image.png",
    link: "https://grupsautomation.co.in/schedule-email/index.php",
  },
  {
    title: "Website Rank find system",
    category: "Backend Development",
    tools: "HTML, CSS, Javascript, PHP,Laravel, Phpmyadmin",
    image: "/images/ranking find.png",
    link: "https://grupsautomation.co.in//Rankcheckup/NEWRANK.php",
    
  },
  {
    title: "Automation Blog Website",
    category:"Frontend Development",
    tools: "HTML, CSS, Javascript, PHP",
    image: "/images/blog-website.png",
    link: "https://github.com/sahils2141/automaton-website-in-php",
  }
];

const Work = () => {
  const workRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
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
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={workRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workData.map((work, index) => (
            <div className="work-box" key={index}>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{work.tools}</p>
              </div>
              <WorkImage image={work.image} alt={work.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;


