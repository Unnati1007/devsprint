import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero__background}></div>
      <div className={styles['hero__blob-yellow']}></div>
      <div className={styles['hero__blob-blue']}></div>
      
      <div className={styles.hero__particles}>
        <div className={`${styles.particle} ${styles.blue}`} style={{ top: '20%', left: '15%' }}></div>
        <div className={`${styles.particle} ${styles.red}`} style={{ top: '60%', left: '85%' }}></div>
        <div className={`${styles.particle} ${styles.yellow}`} style={{ top: '40%', left: '10%' }}></div>
        <div className={`${styles.particle} ${styles.green}`} style={{ top: '70%', left: '90%' }}></div>
        <div className={`${styles.particle} ${styles.blue}`} style={{ top: '30%', left: '80%' }}></div>
        <div className={`${styles.particle} ${styles.red}`} style={{ top: '80%', left: '20%' }}></div>
      </div>
      
      <div className={styles.hero__content}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__logo}>
            <span className={styles.line1}>DevSprint - A GDG</span>
            <span className={styles.line2}>
              <span className={styles.hack}>Hack</span>
              <span className={styles.a}>a</span>
              <span className={styles.thon}>thon</span>
            </span>
          </h1>
          
          <p className={styles.hero__info}>
            Jan 5th - 6th, 2026 • MITS Gwalior
          </p>
          
          <div className={styles.hero__buttons}>
            <a href="#register" className={`${styles.btn} ${styles['btn-primary']}`}>
              <span className="material-symbols-outlined">description</span> Register Now
            </a>
            <a href="#discord" className={`${styles.btn} ${styles['btn-secondary']}`}>
              <span className="material-symbols-outlined">forum</span> Join our Discord
            </a>
          </div>
        </div>
        
        <div className={styles.hero__codeSnippet}>
          <div className={styles.codeHeader}>
            <div className={styles.dots}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>
            <span className={styles.fileName}>gdg-devsprint.js</span>
          </div>
          <div className={styles.codeContent}>
            <code>
              <span className={styles.keyword}>import</span> {'{'}GDG, Event{'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>&apos;gdg-core&apos;</span>;
              <br />
              <span className={styles.keyword}>const</span> devSprint = <span className={styles.keyword}>new</span> <span className={styles.function}>Event</span>(<span className={styles.string}>&apos;DevSprint&apos;</span>, <span className={styles.string}>&apos;A GDG Hackathon&apos;</span>);
              <br />
              devSprint.<span className={styles.method}>addTrack</span>(<span className={styles.string}>&apos;Web Development&apos;</span>, <span className={styles.string}>&apos;Build for the modern web&apos;</span>);
              <br />
              devSprint
              <br />
              &nbsp;&nbsp;.<span className={styles.method}>addTrack</span>(<span className={styles.string}>&apos;Mobile Apps&apos;</span>, <span className={styles.string}>&apos;Craft native Android experiences&apos;</span>);
              <br />
              devSprint
              <br />
              &nbsp;&nbsp;.<span className={styles.method}>addTrack</span>(<span className={styles.string}>&apos;Cloud &amp; AI&apos;</span>, <span className={styles.string}>&apos;Innovate with GCP &amp; ML&apos;</span>);
              <br />
              <span className={styles.keyword}>function</span> <span className={styles.function}>registerParticipant</span>(<span className={styles.param}>name, email</span>) {'{'}
              <br />
              &nbsp;&nbsp;<span className={styles.comment}>{'//'} Add to database...</span>
              <br />
              {'}'}
            </code>
          </div>
        </div>
      </div>
      
      <div className={styles.hero__scrollIndicator}>
        <div className={styles.arrow}>↓</div>
      </div>
    </section>
  )
}
