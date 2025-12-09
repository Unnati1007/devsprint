import styles from './Tracks.module.scss'

export default function Tracks() {
  const tracks = [
    {
      title: 'Flutter',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      className: 'flutter'
    },
    {
      title: 'Gemini',
      icon: 'https://cdn.dribbble.com/userupload/11836407/file/original-8a90883ffdb358883d996e9e6dd4731d.png',
      className: 'gemini'
    },
    {
      title: 'TensorFlow',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      className: 'tensorflow'
    },
    {
      title: 'Google Cloud',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      className: 'cloud'
    },
    {
      title: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      className: 'firebase'
    },
    {
      title: 'Android',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
      className: 'android'
    },
    {
      title: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      className: 'angular'
    },
    {
      title: 'Kotlin',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      className: 'kotlin'
    },
    {
      title: 'Go',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      className: 'go'
    },
    {
      title: 'Material Design',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/materialdesign.svg',
      className: 'material'
    },
    {
      title: 'Google AI',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/googleassistant.svg',
      className: 'ai'
    },
    
  ]

  return (
    <section id="tracks" className={`section ${styles['tracks']}`}>
      <div className="container">

        <div className="dual-heading">
          <div className="heading-back">OPEN TO INNOVATION</div>
          <h2 className="heading-front">Build With Google</h2>
        </div>

        <p className={styles.tracks__intro}>
          Unlimited possibilities. Create groundbreaking solutions using cutting-edge Google technologies.
        </p>

        <div className={styles.tracks__container}>
          <div className={styles.tracks__carousel}>
            {tracks.map((track, index) => (
              <div 
                key={index} 
                className={`${styles.tracks__card} ${styles[track.className]}`}
                data-title={track.title}
              >
                <div className={styles['tracks__card-icon']}>
                  <img src={track.icon} alt={track.title} />
                </div>
                <div className={styles['tracks__card-title']}>
                  {track.title}
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {tracks.map((track, index) => (
              <div 
                key={`dup-${index}`} 
                className={`${styles.tracks__card} ${styles[track.className]}`}
                data-title={track.title}
              >
                <div className={styles['tracks__card-icon']}>
                  <img src={track.icon} alt={track.title} />
                </div>
                <div className={styles['tracks__card-title']}>
                  {track.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      

      </div>
    </section>
  )
}