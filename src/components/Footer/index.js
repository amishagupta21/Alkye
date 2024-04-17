import React from 'react'
import styles from "./index.module.css"
import footerLogo from "../../utils/images/footerLogo.svg"
import instagram from "../../utils/icons/instagram.svg"
import facebook from "../../utils/icons/facebook.svg"
import linkdin from "../../utils/icons/linkdin.svg"
import copyright from "../../utils/icons/copyringhticon.svg"


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMenu}>
        <div className={styles.socialConnect}>
          <img src={footerLogo} className={styles.logo} alt='footerLogo'/>
          <div className={styles.socialIcon}>
            <img src={instagram} alt='instagram'/>
            <img src={facebook} alt="facebook"/>
            <img src={linkdin} alt="linkdin"/>
          </div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.menu1}>
          <h1>Expertise</h1><br />
          <p>Design</p>
          <p>Specialist Expertise</p>
          <p>Commercial Advice</p>
          <p>Traffic & Transport</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.menu2}>
          <h1>Sectors</h1><br />
          <p>Road</p>
          <p>Tunner</p>
          <p>Bridge</p>
          <p>Others +</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.menu3}>
          <p>Our Business</p>
          <p>Work With Us</p>
          <p>Projects</p>
          <p>News</p>
        </div>
        <div className={styles.menu4}>
          <p>Our Capabilities</p>
          <p>Engineers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.copyright}>
        <div className={styles.copyrightauthorization}>
          <img src={copyright} alt="copyright"/>
          <p>2021 Case International. All right reserved.</p>
        </div>
        <div className={styles.condition}>
          <span>Terms & Condition</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
