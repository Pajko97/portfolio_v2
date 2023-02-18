import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {


  const [isNavOpen, setIsNavOpen] = React.useState(false)

  return (
    <nav className={styles.nav}>

      <div className={isNavOpen ? styles.navigation_active : styles.navigation_closed}>
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/work">Work</Link>
        <Link href="/apps">My apps</Link>
      </div>

      <Link href="/"><Image src="/assets/logo_pj.svg" height={70} width={70} /></Link>
      
      <div className={styles.section_right}>
        <div className={styles.social}>
        
        <Link href="https://www.linkedin.com/in/pavlejanjusevic/"><Image src="/assets/linkedin_logo.png" height={30} width={30} /></Link>        
        <Link href="https://github.com/Pajko97"><Image src="/assets/github_logo.png" height={30} width={30} /></Link>        
          <Link href="https://discord.com/users/Pablito#1705"><Image src="/assets/discord_logo.png" height={30} width={30} /></Link>        
        </div>
        
        <div onClick={() => setIsNavOpen(!isNavOpen)} className={styles.menu_icon}>
          <p className={styles.menu_icon_label}>Menu</p>
          <Image src="/assets/menu_icon.svg" height={20} width={20} />
        </div>
      </div>
    </nav>
  )
}
