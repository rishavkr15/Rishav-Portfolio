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
                <h4>Intermediate & Matriculation</h4>
                <h5>BSEB / CBSE</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Intermediate (XII) in Science stream at BMP7 Inter College, Katihar and Matriculation (X) at Pratibha Public School, Katihar, building a solid analytical foundation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>CIMAGE Professional College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing my BCA degree from Patna, Bihar. Actively studying computer science fundamentals and building MERN stack projects like WISHLY.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Design Intern</h4>
                <h5>Casa Chic Interior</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing user-friendly client interfaces and high-fidelity wireframes in Figma, improving visual consistency and creating modular component libraries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
