import styles from './Rules.module.scss'

export default function Rules() {
  const rules = [
    'All code must be written during the event.',
    'Teams can have a maximum of 4 members.',
    'Projects must be submitted via the designated platform before the deadline.',
    'Adhere to the Code of Conduct. Be respectful and inclusive.',
    'Third-party APIs and libraries are allowed, but the core work must be original.'
  ]

  const faqs = [
    'Who can participate in DevSprint?',
    'Is there a registration fee?',
    'Can I participate solo or do I need a team?',
    'What should I bring to the event?'
  ]

  return (
    <section className={`section ${styles.rules}`}>
      <div className="container">
        <div className="dual-heading">
          <div className="heading-back">FAQs & RULES</div>
          <h2 className="heading-front">FAQs and Rules</h2>
        </div>
        
        <div className={styles.rules__wrapper}>
          {/* Rules Section */}
          <div className={styles.rules__content}>
            <div className={styles.rules__text}>
              <h3>Rules & Guidelines</h3>
              <p>To ensure a fair and enjoyable experience for everyone, please adhere to the following rules.</p>
            </div>
            
            <div className={styles.rules__code}>
              <div className={styles.rules__window}>
                <div className={styles.rules__header}>
                  <div className={styles.rules__buttons}>
                    <span className={styles.rules__button} data-color="red"></span>
                    <span className={styles.rules__button} data-color="yellow"></span>
                    <span className={styles.rules__button} data-color="green"></span>
                  </div>
                  <div className={styles.rules__filename}>rules.txt</div>
                </div>
                <div className={styles.rules__body}>
                  <pre>
                    {rules.map((rule, index) => (
                      <div key={index} className={styles.rules__line}>
                        <span className={styles.rules__number}>{index + 1}.</span> {rule}
                      </div>
                    ))}
                    <div className={styles.rules__comment}>
                      {`// Have fun and build something amazing!`}
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.faq}>
            <div className={styles.faq__content}>
              <div className={styles.faq__heading}>
                <h3>Frequently Asked <br></br>Questions</h3>
              </div>
              
              <div className={styles.faq__list}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faq__item}>
                    <div className={styles.faq__question}>
                      <span className={styles.faq__icon}>Q:</span>
                      <span className={styles.faq__text}>{faq}</span>
                      <span className={styles.faq__plus}>+</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
