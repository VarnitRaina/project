// ResumeForm.js
import React, { useState } from 'react';
import './ResumeForm.css';

const ResumeForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    application: '',
    account: '',
    skills: '',
    products: '',
    needs: '',
    responsibilities: '',
    summary: '',
    experience: '',
    education: '',
    links: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    onUpdate(newData);
  };

  return (
    <div className="resume-form-container">
      <h1>ATS-Friendly Resume Builder</h1>
      <h2>Enter Your Details</h2>
      
      <form>
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Professional Information</h3>
          <div className="form-group">
            <label>Professional Summary</label>
            <textarea
              name="summary"
              placeholder="Enter your professional summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Work Experience</label>
            <textarea
              name="experience"
              placeholder="Describe your work experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Education</label>
            <textarea
              name="education"
              placeholder="Enter your education details"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Skills</label>
            <textarea
              name="skills"
              placeholder="List your skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="button" className="download-btn">Download PDF</button>
      </form>
    </div>
  );
};

export default ResumeForm;