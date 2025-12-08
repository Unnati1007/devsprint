'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.scss'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.header__content}>
        <a href="#home" className={styles.header__logo}>
          DevSprint
        </a>
        
        <nav className={`${styles.header__nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#tracks" onClick={closeMobileMenu}>Tracks</a>
          <a href="#timeline" onClick={closeMobileMenu}>Schedule</a>
          <a href="#mentors" onClick={closeMobileMenu}>Mentors</a>
          <a href="#sponsors" onClick={closeMobileMenu}>Sponsors</a>
          <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
        </nav>
        
        <button 
          className={`${styles.header__mobileToggle} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
