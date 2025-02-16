import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer Developer</h4>
                <h5>Self Employeed</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            In 2022, I worked as a freelancer, developing dynamic websites and custom web solutions using PHP, MySQL, and front-end technologies. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PHP Web Developer</h4>
                <h5>Grups Automation</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            In 2023, I worked as a PHP web developer at Grups Automation, where I developed and maintained web applications, integrated APIs, and optimized backend performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PHP Web Developer</h4>
                <h5>The Social Lions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            I am currently working as a PHP web developer at The Social Lions, where I develops and maintains dynamic websites, optimizes backend performance, and integrates advanced web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
