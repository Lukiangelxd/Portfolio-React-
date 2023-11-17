// import React from 'react';

function Portfolio() {
  const containerStyle = {
    maxHeight: '600px',
    overflowY: 'scroll',
  };

  const sectionStyle = {
    marginTop: '120px', 
  };

  return (
    <section id="work" className="section" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <h2 className="text-center">My Proud Work in 2023!</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="/assets/Burger copy.jpg" alt="1st project-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://github.com/Lukiangelxd/Cookingwithwhatyougot">Cooking with what you got!t</a>
                </h5>
                <p className="card-text">1st group project based on fundamental concepts of web development, including HTML, CSS, and JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src="/assets/gr-project-2.jpg" alt="led-wall-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://enigmatic-forest-52587-6d4fbf1c23dd.herokuapp.com/">The Gamerz Blog</a>
                </h5>
                <p className="card-text">2nd Group Project where I worked with servers, databases, and other back end technologies, such as MySQL database, Node.js, and more!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="/assets/calc-img.jpeg" alt="calc-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://lukiangelxd.github.io/Weather-DashBoard/">Calculator</a>
                </h5>
                <p className="card-text">A small project where I was able to create a dashboard to see tempertaures</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Portfolio;