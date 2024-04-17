import React from 'react'
import styles from "./index.module.css"
import logo from "../../utils/images/logo.svg"
const Navbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarMenu1}>
          <span>PROJECTS</span>
          <span>EXPERTISE</span>
          <span>ABOUT US</span>
          <span>PEOPLE</span>
        </div>
        <div className={styles.logo}>
          <img src={logo} height={90} width={90} alt='logo'/>
        </div>
        <div className={styles.navbarMenu2}>
          <span>CAREERS</span>
          <span>AU</span>
        </div>
      </div>
      <div className={styles.border}></div>
    </>
  )
}

export default Navbar
