import React from 'react';
import './css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="transparent-box">
        <h1>Welcome to PSITS Club</h1>
                    <p>Welcome to the Professional Society of Information Technology Students (PSITS), a vibrant community dedicated to advancing
                         the education and professional development of information technology students. At PSITS, we are committed to bridging the gap
                          between academic learning and real-world application. Our organization offers a platform for students to connect with industry
                           professionals, engage in hands-on projects, and participate in enriching workshops and seminars.</p>
                    <p>Our mission is to cultivate a dynamic environment where aspiring IT professionals can acquire essential skills, gain practical experience,
                         and build meaningful networks. By fostering collaboration and providing valuable resources, PSITS aims to prepare its members for successful
                          careers in the ever-evolving technology landscape.</p>
                    <p>Join us in exploring the latest in technology, gaining insights from experts, and shaping the future of the IT industry.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
