import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Ensure scroll animations trigger at the right points
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Smooth scrolling behavior for links
    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const sectionId = target.getAttribute("data-href");

      if (sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: section, autoKill: true },
            ease: "power3.out",
          });
        }
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    // Cleanup function to remove event listeners
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Sahil Dev
        </a>
        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sharmasahil1880@mail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
