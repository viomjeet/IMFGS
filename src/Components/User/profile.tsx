import React from 'react'
import './profile.scss';
export default function Profile() {
  return (
    <div className="profile-page-wrapper">
      <div className="custom-container">
        <div className="profile-grid">

          <aside className="profile-sidebar">
            <div className="profile-card">
              <div className="avatar-container">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt="User Avatar" />
                <button className="edit-avatar-btn">📷</button>
              </div>
              <h2 className="user-name">Ananya Sharma</h2>
              <p className="user-role">Senior UI/UX Designer</p>
              <p className="user-location">📍 New Delhi, India</p>

              <div className="profile-stats">
                <div className="stat-item"><strong>42</strong><span>Projects</span></div>
                <div className="stat-item"><strong>1.2k</strong><span>Followers</span></div>
              </div>

              <div className="profile-socials">
                <span className="social-icon">🌐</span>
                <span className="social-icon">📸</span>
                <span className="social-icon">💼</span>
              </div>
            </div>
          </aside>

          <main className="profile-main-content">
            <div className="content-box">
              <div className="box-header">
                <h3>Personal Information</h3>
                <button className="btn-edit-profile">Edit Profile</button>
              </div>
              <div className="info-grid">
                <div className="info-group">
                  <label>Full Name</label>
                  <p>Ananya Sharma</p>
                </div>
                <div className="info-group">
                  <label>Email Address</label>
                  <p>ananya.sharma@example.com</p>
                </div>
                <div className="info-group">
                  <label>Phone Number</label>
                  <p>+91 98765 43210</p>
                </div>
                <div className="info-group">
                  <label>Website</label>
                  <p>www.ananyadesigns.com</p>
                </div>
              </div>
            </div>

            <div className="content-box">
              <h3>Biography</h3>
              <p className="bio-text">
                Passionate UI/UX Designer with over 5 years of experience creating pixel-perfect digital experiences.
                Specialized in building clean layouts, modern design systems, and user-centric web applications.
              </p>

              <h4 className="sub-heading">Core Skills</h4>
              <div className="skills-tags">
                <span className="tag">UI/UX Design</span>
                <span className="tag">Figma</span>
                <span className="tag">React.js</span>
                <span className="tag">SCSS / SASS</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">Wireframing</span>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  )
}
