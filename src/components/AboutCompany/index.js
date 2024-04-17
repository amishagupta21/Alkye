import React from 'react'
import styles from "./index.module.css"
import connectImage from "../../utils/images/employeeimage.png"
import coverImage from "../../utils/images/connectImage.svg"
import monitor from "../../utils/icons/monitor.svg"
import chats from "../../utils/icons/chats.svg"
import dictionary from "../../utils/icons/dictionary.svg"

const StayConnected = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.aboutCompany}>
        <h1>We <span>stay connected</span></h1>
        <div className={styles.importantPoints}>
          <div className={styles.image}>
            <img src={monitor} height={30} width={30} alt="monitor"/>
          </div>
          <div className={styles.content}>
            <h1>Quarterly Business Updates</h1>
            <p>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
              member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
          </div>
        </div>
        <div className={styles.importantPoints}>
          <div className={styles.image}>
            <img src={chats} height={30} width={30} alt="chats"/>
          </div>
          <div className={styles.content}>
            <h1>Industry Events & Networking</h1>
          </div>
        </div>
        <div className={styles.importantPoints}>
          <div className={styles.image}>
            <img src={dictionary} height={30} width={30} alt='dictionary'/>
          </div>
          <div className={styles.content}>
            <h1>Associations Memberships</h1>
          </div>
        </div>
      </div>
      <div className={styles.eventsImage}>
        <img src={coverImage} className={styles.coverImage} alt="Cover"/>
        <img src={connectImage} className={styles.connectImage} alt="Connect" />
      </div>

    </div>

  )
}

export default StayConnected
