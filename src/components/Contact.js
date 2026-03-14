import React, { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Let's collaborate on your next project!</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <FiMail size={24} />
              <div>
                <h4>Email</h4>
                <p>zehra.basirat@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FiPhone size={24} />
              <div>
                <h4>Phone</h4>
                <p>+92 3092377360</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && <div className="success-message">{submitMessage}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;