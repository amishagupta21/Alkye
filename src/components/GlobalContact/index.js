import React from 'react'
import map from "../../utils/images/map.svg"
import openarrow from "../../utils/images/openarrow.svg"
import styles from "./index.module.css"

const GlobalContact = () => {
    return (
        <div className={styles.globalContactContainer}>
            <div className={styles.globalContent}>
                <p>As a <span>global business,</span> we encourage you to contact us no matter where you are located in the world.</p>
                <p>Browse our job opportunities across the globe.</p>
            </div>
            
            <div className={styles.openRoles}>
                <div>
                    <p>OPEN ROLES</p>
                </div>
                <div className={styles.arrow}>
                    <img src={openarrow} alt='openarrow'/>
                </div>
            </div>

            <img src={map} className={styles.globeImage} alt='map'/>
        </div>
    )
}

export default GlobalContact
