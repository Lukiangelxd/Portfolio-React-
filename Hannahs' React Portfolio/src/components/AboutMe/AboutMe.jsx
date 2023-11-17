import React, { useEffect, useState } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [text, setText] = useState('');
  const experienceText = "I am an individual who has been focused on different areas of customer service for over 10 years with almost 2 years in experience with teaching. In the recent year of 2023 I have been focused on transitioning into web development by completing a certificate and pursuing a software bachelor's degree through Arizona State University. I'm excited to bring my diverse skill set to the coding world and embark on a new career path.";

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < experienceText.length) {
        setText(experienceText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mt-5">
      <h1 style={{ fontSize: '32px', paddingTop: '100px', textAlign: 'center' }}>About Me</h1>
      <div className="mx-auto my-5">
        <div className="d-flex">
          <div>
            <img
              src="/assets/Hannah McEvoy.jpg"
              alt="Hannah McEvoy"
              className="img-fluid with-border-and-shadow"
              style={{ maxWidth: "130px" }}
            />
          </div>
          <div className="ml-4 text-left typing-text" style={{ fontSize: '18px', lineHeight: '1.5', padding: '40px' }}>
            <p className="chalkduster-text">
              Welcome to my Page! My name is Hannah
            </p>
            <br /> 
            <p className="experience-text">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;