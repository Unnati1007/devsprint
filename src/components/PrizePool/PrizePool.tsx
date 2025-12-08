import styles from './PrizePool.module.scss'

export default function PrizePool() {
  const prizes = [
    {
      rank: '1st Place',
      amount: '₹50,000',
      icon: '🥇',
      perks: 'Cash Prize + Swags + Certificates + Mentorship',
      className: 'first'
    },
    {
      rank: '2nd Place',
      amount: '₹30,000',
      icon: '🥈',
      perks: 'Cash Prize + Swags + Certificates',
      className: 'second'
    },
    {
      rank: '3rd Place',
      amount: '₹20,000',
      icon: '🥉',
      perks: 'Cash Prize + Swags + Certificates',
      className: 'third'
    }
  ]

  return (
    <section id="prizes" className="section">
      <div className="container">
        <div className="dual-heading">
          <div className="heading-back">PRIZE POOL</div>
          <h2 className="heading-front">Win Amazing Prizes</h2>
        </div>
        
        <div className={styles['prize-pool__container']}>
          <div className={styles['prize-pool__total']}>
            <div className={styles['prize-pool__total-label']}>
              Total Prize Pool
            </div>
            <div className={styles['prize-pool__total-amount']}>
              ₹1,00,000
            </div>
          </div>
          
          <div className={styles['prize-pool__prizes']}>
            {prizes.map((prize, index) => (
              <div 
                key={index} 
                className={`${styles['prize-pool__prize']} ${styles[prize.className]}`}
              >
                <div className={styles['prize-pool__prize-icon']}>
                  {prize.icon}
                </div>
                <div className={styles['prize-pool__prize-rank']}>
                  {prize.rank}
                </div>
                <div className={styles['prize-pool__prize-amount']}>
                  {prize.amount}
                </div>
                <div className={styles['prize-pool__prize-perks']}>
                  {prize.perks}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
