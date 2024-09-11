import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="semi-transparent-box">
        <h1>About PSITS</h1>
        <p>
          The PSITS (Professional Society of Information Technology Students) Club is dedicated to fostering a vibrant community of IT enthusiasts. Our goal is to provide a platform for students to enhance their technical skills, collaborate on projects, and engage with industry professionals.
        </p>
        
        <h2>Vision</h2>
        <p>
          Our vision is to create a dynamic and innovative community where IT students and professionals come together to drive technological advancement, promote continuous learning, and shape the future of the IT industry.
        </p>
        
        <h2>Mission</h2>
        <p>
          Our mission is to empower IT students by providing opportunities for hands-on experience, fostering collaboration and networking, and facilitating access to the latest industry knowledge and trends. We strive to be a catalyst for personal and professional growth within the IT field.
        </p>

        <h2>Objectives</h2>
        <ul>
          <li>Organize workshops and seminars on emerging technologies.</li>
          <li>Facilitate networking opportunities with IT professionals and alumni.</li>
          <li>Encourage collaborative projects and hackathons to solve real-world problems.</li>
          <li>Promote continuous learning through various educational resources and events.</li>
        </ul>

        <h2>Key Achievements</h2>
        <ul>
          <li>Successfully hosted the annual Tech Symposium with over 500 participants.</li>
          <li>Launched multiple student-led projects that have been recognized at national competitions.</li>
          <li>Developed partnerships with leading tech companies for internships and mentorship programs.</li>
        </ul>

        <p>
          Join us to be part of a community that is passionate about technology and committed to making a difference in the IT field.
        </p>
      </div>
    </div>
  );
}

export default About;
