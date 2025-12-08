import styles from './Timeline.module.scss'

export default function Timeline() {
  const milestones = [
    {
      title: 'Registration Opens',
      date: 'Jan 10, 2025',
      icon: '📝',
      color: 'blue',
      position: { left: '10%', top: '20%' },
      contentPosition: 'top'
    },
    {
      title: 'Team Formation',
      date: 'Jan 20, 2025',
      icon: '👥',
      color: 'red',
      position: { left: '25%', top: '80%' },
      contentPosition: 'bottom'
    },
    {
      title: 'Hackathon Begins',
      date: 'Feb 1, 2025',
      icon: '🚀',
      color: 'green',
      position: { left: '40%', top: '20%' },
      contentPosition: 'top'
    },
    {
      title: 'Mentor Sessions',
      date: 'Feb 1-2, 2025',
      icon: '🎓',
      color: 'yellow',
      position: { left: '55%', top: '80%' },
      contentPosition: 'bottom'
    },
    {
      title: 'Submission Deadline',
      date: 'Feb 2, 2025',
      icon: '📤',
      color: 'blue',
      position: { left: '70%', top: '20%' },
      contentPosition: 'top'
    },
    {
      title: 'Results Announced',
      date: 'Feb 5, 2025',
      icon: '🏆',
      color: 'red',
      position: { left: '90%', top: '80%' },
      contentPosition: 'bottom'
    }
  ]

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="dual-heading">
          <div className="heading-back">TIMELINE</div>
          <h2 className="heading-front">Event Timeline</h2>
        </div>
        
        <div className={styles.timeline}>
          <div className={styles.timeline__container}>
            <div className={styles.timeline__wave}>
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#4285F4', stopOpacity: 1 }} />
                    <stop offset="33%" style={{ stopColor: '#EA4335', stopOpacity: 1 }} />
                    <stop offset="66%" style={{ stopColor: '#FBBC04', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#34A853', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 100 Q 83.33 40, 166.67 100 T 333.33 100 T 500 100 T 666.67 100 T 833.33 100 T 1000 100"
                  stroke="url(#waveGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={styles.timeline__milestone}
                style={milestone.position}
              >
                <div className={styles['timeline__milestone-dot']}></div>
                <div className={`${styles['timeline__milestone-content']} ${styles[milestone.contentPosition]}`}>
                  <div className={`${styles['timeline__milestone-icon']} ${styles[milestone.color]}`}>
                    {milestone.icon}
                  </div>
                  <div className={styles['timeline__milestone-title']}>
                    {milestone.title}
                  </div>
                  <div className={styles['timeline__milestone-date']}>
                    {milestone.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
