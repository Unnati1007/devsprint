import styles from './About.module.scss'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="dual-heading">
          <div className="heading-back">ABOUT EVENT</div>
          <h2 className="heading-front">About DevSprint</h2>
        </div>
        
        <div className={styles.about__content}>
          <div className={styles.about__illustration}>
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4285F4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#EA4335', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="200" fill="url(#grad1)" opacity="0.1"/>
              <rect x="150" y="150" width="200" height="150" rx="10" fill="url(#grad1)" opacity="0.3"/>
              <circle cx="250" cy="225" r="60" fill="#4285F4"/>
              <path d="M 200 280 L 250 320 L 300 280" stroke="#FBBC04" strokeWidth="8" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className={styles.about__text}>
            <h3>Unleash Your Innovation</h3>
            <p>
              DevSprint is a premier hackathon organized by Google Developer Groups MITS, 
              bringing together the brightest minds in technology to innovate, collaborate, 
              and create groundbreaking solutions.
            </p>
            <p>
              Over 36 hours, participants will work in teams to build projects across 
              multiple tracks including Web Development, Android, AI/ML, and Blockchain. 
              With mentorship from industry experts and exciting prizes, DevSprint is 
              your gateway to innovation.
            </p>
            <p>
              Join us for an unforgettable experience of coding, learning, and networking 
              with fellow developers and tech enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
