// import React from 'react';

function Resume() {
  return (
    <section className="container">
      <h1 className="mt-4">Resume</h1> {/* Use the "mt-4" class to add margin-top */}
      <p>View my LinkedIn profile <a href="https://www.linkedin.com/in/hannah-mcevoy/">HERE</a></p>
      <embed src="/assets/resume-1697584546759.pdf" width="100%" height="600px" type="application/pdf" />
    </section>
  );
}

export default Resume;