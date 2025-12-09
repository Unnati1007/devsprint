'use client'

import { useEffect, useRef } from 'react'
import styles from './PrizePool.module.scss'

interface Prize {
  rank: string
  icon: string
  perks: string
  className: 'first' | 'second' | 'third'
  gradient: string
  glow: string
}

export default function PrizePool() {
  const prizeRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && entry.target) {
            setTimeout(() => {
              entry.target.classList.add(styles.visible)
            }, index * 200)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      }
    )

    const currentRefs = prizeRefs.current
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const prizes: Prize[] = [
    {
      rank: 'Top 3',
      icon: '🏆',
      perks: 'Cash Prize + Exclusive Swags + Certificates + Internship Opportunities',
      className: 'first',
      gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      glow: 'rgba(255, 215, 0, 0.15)'
    },
    {
      rank: 'Top 10',
      icon: '✨',
      perks: 'Premium Swags + Certificates + Featured on Our Platform',
      className: 'second',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      glow: 'rgba(102, 126, 234, 0.15)'
    },
    {
      rank: 'All Participants',
      icon: '🎉',
      perks: 'Certificates of Participation + Goodies + Networking Opportunities',
      className: 'third',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      glow: 'rgba(240, 147, 251, 0.15)'
    }
  ]

  return (
    <section id="prizes" className={styles.prizeSection}>
      {/* Background Decorative Elements */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decorationCircle1}></div>
        <div className={styles.decorationCircle2}></div>
        <div className={styles.decorationCircle3}></div>
      </div>

      <div className={styles.container}>
        {/* Enhanced Header */}
        <div className={styles.prizeHeader}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeText}>PRIZES & REWARDS</span>
            <div className={styles.badgeLine}></div>
          </div>
          
          <h2 className={styles.prizeTitle}>
            <span className={styles.titleMain}>Win Amazing</span>
            <span className={styles.titleAccent}> Prizes</span>
          </h2>
          
          <p className={styles.prizeSubtitle}>
            Compete for incredible rewards, recognition, and career opportunities
          </p>
          
          <div className={styles.titleDecoration}>
            <span className={styles.decorationLine}></span>
            <span className={styles.decorationIcon}>✦</span>
            <span className={styles.decorationLine}></span>
          </div>
        </div>

        {/* Prize Cards Container */}
        <div className={styles.prizeContainer}>
          <div className={styles.prizeCards}>
            {prizes.map((prize, index) => (
              <div 
                key={index}
                ref={el => {
                  if (el) prizeRefs.current[index] = el
                }}
                className={`${styles.prizeCard} ${styles[prize.className]}`}
                data-index={index}
              >
                {/* Ribbon for First Place */}
                {prize.className === 'first' && (
                  <div className={styles.ribbon}>
                    <span>🏆 GOLD</span>
                  </div>
                )}
                
                {/* Card Background Elements */}
                <div 
                  className={styles.cardGradient}
                  style={{ background: prize.gradient }}
                ></div>
                
                <div className={styles.cardShine}></div>
                
                {/* Card Content */}
                <div className={styles.cardContent}>
                  {/* Icon */}
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconBackground}>
                      <div className={styles.prizeIcon}>
                        {prize.icon}
                      </div>
                      <div 
                        className={styles.iconGlow}
                        style={{ boxShadow: `0 0 40px ${prize.glow}` }}
                      ></div>
                    </div>
                  </div>

                  {/* Rank */}
                  <div className={styles.rankContainer}>
                    <h3 className={styles.prizeRank}>
                      {prize.rank}
                    </h3>
                    <div className={styles.rankDivider}></div>
                  </div>

                  {/* Perks */}
                  <div className={styles.perksContainer}>
                    <p className={styles.prizePerks}>
                      {prize.perks}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className={styles.cardCorners}>
                    <div className={`${styles.corner} ${styles.cornerTL}`}></div>
                    <div className={`${styles.corner} ${styles.cornerTR}`}></div>
                    <div className={`${styles.corner} ${styles.cornerBL}`}></div>
                    <div className={`${styles.corner} ${styles.cornerBR}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        {/* <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            
          </div>
        </div> */}
      </div>
    </section>
  )
}