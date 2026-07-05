import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-image-wrapper" data-cursor="disable">
          <img src="/images/rishav.jpg" alt="Rishav Kumar" className="about-image" />
          <div className="about-image-backdrop"></div>
        </div>
        <h3 className="title">About Me</h3>
        <p className="para">
          Results-driven Full Stack Developer and BCA student with hands-on experience building production-ready MERN stack web applications. Proficient in React.js, Node.js, Express.js, MongoDB, REST API development, JWT authentication, and cloud deployment on Render. Currently interning as a UI/UX Design Intern with practical Figma experience. Seeking Frontend Developer, React.js Intern, or MERN Stack Fresher roles.
        </p>
      </div>
    </div>
  );
};

export default About;
