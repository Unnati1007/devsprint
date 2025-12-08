import styles from './Timeline.module.scss'

export default function Timeline() {
  const events = [
    {
      number: 1,
      title: 'Day 1 - Kickoff',
      time: 'Oct 25, 9:00 AM',
      description: 'Registration, Opening Ceremony, and Team Formation.',
      color: 'blue'
    },
    {
      number: 2,
      title: 'Day 1 - Hacking Begins',
      time: 'Oct 25, 11:00 AM',
      description: 'Start building! Workshops on GCP and Firebase will be available.',
      color: 'green'
    },
    {
      number: 3,
      title: 'Day 2 - Midpoint Check-in',
      time: 'Oct 26, 1:00 PM',
      description: 'Mentor check-ins and project progress review.',
      color: 'yellow'
    },
    {
      number: 4,
      title: 'Day 3 - Final Submissions',
      time: 'Oct 27, 12:00 PM',
      description: 'Project submissions close. Prepare for judging and demos.',
      color: 'red'
    }
  ]

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className={styles.timeline}>
          <div className={styles.timeline__heading}>
            <h2>Event Timeline</h2>
            <p>Follow the schedule to make the most of your hackathon experience. Don&apos;t miss out on keynotes, workshops, and deadlines!</p>
          </div>
          
          <div className={styles.timeline__events}>
            {events.map((event, index) => (
              <div key={index} className={styles.timeline__item}>
                <div className={styles.timeline__line}>
                  <div className={`${styles.timeline__badge} ${styles[event.color]}`}>
                    {event.number}
                  </div>
                  {index < events.length - 1 && (
                    <div className={styles.timeline__connector}></div>
                  )}
                </div>
                <div className={styles.timeline__content}>
                  <h3>{event.title}</h3>
                  <p className={styles.timeline__time}>{event.time}</p>
                  <p className={styles.timeline__description}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
