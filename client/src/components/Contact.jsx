import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link
      const mailtoLink = `mailto:vedantkhairnar041@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Opening your email client...' }
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.response?.data?.message || 'Something went wrong. Please try again.' }
      });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-background">
        <div className="contact-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </div>

      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's create something amazing together. Drop me a message!
          </p>
        </div>
        
        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's Start a Conversation</h3>
              <p className="contact-info-description">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I typically respond within 24 hours.
              </p>
              
              <div className="contact-details">
                <a href="mailto:vedantkhairnar041@gmail.com" className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>vedantkhairnar041@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:9226915201" className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 9226915201</p>
                  </div>
                </a>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Nashik, Maharashtra, IN</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h4 className="social-title">Connect on Social Media</h4>
                <div className="social-links">
                  <a 
                    href="https://www.linkedin.com/in/vedant-khairnar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="https://github.com/Vedantkhairnar729" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    title="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="mailto:vedantkhairnar041@gmail.com" 
                    className="social-link"
                    title="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a 
                    href="tel:9226915201" 
                    className="social-link"
                    title="Phone"
                  >
                    <i className="fas fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="fas fa-tag"></i> Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i> Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-submit" 
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
                
                {status.info.msg && (
                  <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                    <i className={`fas ${status.info.error ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
                    {status.info.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;