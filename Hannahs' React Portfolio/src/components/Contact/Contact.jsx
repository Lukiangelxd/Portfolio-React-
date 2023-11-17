import React, { useState } from 'react';

function Contact() {
 const [formData, setFormData] = useState({ name: '', email: '', message: '' });

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);

    setFormData({ name: '', email: '', message: '' });
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <section className="container" style={{ maxWidth: "600px" }}>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              style={{ minHeight: "300px" }}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
 );
}

export default Contact;