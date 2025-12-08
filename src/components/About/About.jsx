import React from 'react';
import "./About.css";
import { FaCode, FaGlobe, FaLaptopCode, FaDatabase, FaUsers, FaFileDownload, FaGraduationCap, FaRocket, FaHeart, FaTrophy, FaMedal, FaVolleyballBall, FaLaptop, FaCertificate } from 'react-icons/fa';

function About() {
  // Function to handle resume download from Google Drive
  const handleResumeDownload = () => {
    // Convert Google Drive share link to direct download link
    const fileId = '1l4S21jTr4ZxG_mFtCGUzrZ8P9mg2NGJz';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Open in new tab to trigger download
    window.open(downloadUrl, '_blank');
  };

  return (
    <div id="about">
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="rightAbout">
        <h2>About Me</h2>
        
        {/* Concise Introduction Cards */}
        <div className="intro-grid">
          <div className="intro-card">
            <FaGraduationCap className="intro-icon" />
            <h4>Background</h4>
            <p>BTech CSE Student specializing in UI/UX, Full-Stack Development, and Modern Web Technologies</p>
          </div>

          <div className="intro-card">
            <FaRocket className="intro-icon" />
            <h4>Strengths</h4>
            <p>Problem-solving, Building Interactive UIs, and Creating Meaningful User Experiences</p>
          </div>

          <div className="intro-card">
            <FaHeart className="intro-icon" />
            <h4>Passion</h4>
            <p>Exploring AI innovations and crafting responsive, creative web applications and Generative AI</p>
          </div>
        </div>

        <div className="goal-section">
          <p className="goal-text">
            <strong>Goal:</strong> Aspiring Full-Stack Developer passionate about building scalable solutions with AI and Generative AI.
          </p>
        </div>

        {/* Skill Cards Section */}
        <h3 className="skills-heading">Technical Skills</h3>
        <div className="skills-grid">
          {/* Programming Languages Card */}
          <div className="skill-card">
            <div className="card-icon"><FaCode /></div>
            <h3>Programming Languages</h3>
            <p className="card-description">Core programming languages I use to build robust applications</p>
            <div className="skill-tags">
              <span>C</span>
              <span>C++</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* Web Technologies Card */}
          <div className="skill-card">
            <div className="card-icon"><FaGlobe /></div>
            <h3>Web Technologies</h3>
            <p className="card-description">Modern web technologies for creating responsive interfaces</p>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Frameworks & Libraries Card */}
          <div className="skill-card">
            <div className="card-icon"><FaLaptopCode /></div>
            <h3>Frameworks & Libraries</h3>
            <p className="card-description">Powerful frameworks for full-stack development</p>
            <div className="skill-tags">
              <span>Node.js</span>
            </div>
          </div>

          {/* Tools & Databases Card */}
          <div className="skill-card">
            <div className="card-icon"><FaDatabase /></div>
            <h3>Tools & Databases</h3>
            <p className="card-description">Essential tools and databases for scalable applications</p>
            <div className="skill-tags">
              <span>Git</span>
              <span>MongoDB</span>
            </div>
          </div>

          {/* ------RESUME SECTION------ */}
          <div className="resume-card">
            <div className="card-icon"><FaFileDownload /></div>
            <h3>Resume</h3>
            <p className="card-description">Brief description of mine is here in my resume.</p>
            <div className="skill-tags">
              <button onClick={handleResumeDownload} className="download-btn">
                Download Resume
              </button>
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="skill-card">
            <div className="card-icon"><FaUsers /></div>
            <h3>Soft Skills</h3>
            <p className="card-description">Essential skills for successful project delivery</p>
            <div className="skill-tags">
              <span>Problem Solving</span>
              <span>Team Collaboration</span>
              <span>Communication</span>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <h3 className="achievements-heading">Achievements & Recognition</h3>
        <div className="achievements-grid">
          {/* Rajya Puraskar */}
          <div className="achievement-card">
            <div className="achievement-icon"><FaTrophy /></div>
            <h4>Rajya Puraskar</h4>
            <p>Awarded the highest honor in Scout & Guides for exceptional leadership and community service</p>
          </div>

          {/* National Volleyball */}
          <div className="achievement-card">
            <div className="achievement-icon"><FaVolleyballBall /></div>
            <h4>National-Level Volleyball Player</h4>
            <p>Competed at national level, demonstrating teamwork, discipline, and athletic excellence</p>
          </div>

          {/* Hackathons */}
          <div className="achievement-card">
            <div className="achievement-icon"><FaLaptop /></div>
            <h4>Hackathon Participant</h4>
            <p>Active participant in multiple hackathons, building innovative solutions under pressure</p>
          </div>

          {/* Coding Competitions */}
          <div className="achievement-card">
            <div className="achievement-icon"><FaMedal /></div>
            <h4>Coding Competitions</h4>
            <p>Competed in various coding challenges, sharpening problem-solving and algorithmic skills</p>
          </div>

          {/* Certifications */}
          <div className="achievement-card">
            <div className="achievement-icon"><FaCertificate /></div>
            <h4>Professional Certifications</h4>
            <p>Earned certifications in web development, programming, and emerging technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;