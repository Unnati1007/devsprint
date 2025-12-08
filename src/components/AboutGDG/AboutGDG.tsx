import styles from './AboutGDG.module.scss'

export default function AboutGDG() {
  return (
    <section className={`section ${styles['about-gdg']}`}>
      <div className="container">
        <div className="dual-heading">
          <div className="heading-back">ABOUT GDG</div>
          <h2 className="heading-front">Google Developer Groups MITS</h2>
        </div>
        
        <div className={styles['about-gdg__content']}>
          <div className={styles['about-gdg__text']}>
            <h3>Community-Driven Innovation</h3>
            <p>
              Google Developer Groups (GDG) MITS is a community of developers passionate 
              about Google technologies and open-source development. We organize workshops, 
              hackathons, and tech talks to foster learning and innovation.
            </p>
            <p>
              Our mission is to create a vibrant ecosystem where students and professionals 
              can learn, share knowledge, and build amazing projects together. From Android 
              to Cloud, Web to AI, we cover the entire spectrum of modern technology.
            </p>
            <p>
              Join our growing community of developers, designers, and tech enthusiasts 
              who are shaping the future of technology, one project at a time.
            </p>
          </div>
          
          <div className={styles['about-gdg__illustration']}>
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#EA4335', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#FBBC04', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#34A853', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="200" fill="url(#grad2)" opacity="0.1"/>
              <circle cx="200" cy="200" r="50" fill="#4285F4"/>
              <circle cx="300" cy="200" r="50" fill="#EA4335"/>
              <circle cx="200" cy="300" r="50" fill="#FBBC04"/>
              <circle cx="300" cy="300" r="50" fill="#34A853"/>
              <line x1="200" y1="200" x2="300" y2="200" stroke="#fff" strokeWidth="4"/>
              <line x1="200" y1="200" x2="200" y2="300" stroke="#fff" strokeWidth="4"/>
              <line x1="300" y1="200" x2="300" y2="300" stroke="#fff" strokeWidth="4"/>
              <line x1="200" y1="300" x2="300" y2="300" stroke="#fff" strokeWidth="4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
