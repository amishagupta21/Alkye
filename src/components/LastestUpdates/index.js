import React from 'react'
import styles from "./index.module.css"
import updateArrow from "../../utils/images/updatesarrow.svg"


const LastestUpdates = () => {
    return (
        <div className={styles.updatesContainer}>
            <div className={styles.update}>
                <h1>01</h1>
                <div className={styles.checkUpdates}>
                    <p>We stay connected</p>
                    <div className={styles.navigationArrow}>
                        <div className={styles.arrow}>
                            <img src={updateArrow} alt='updateArrow'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.update}>
                <h1>02</h1>
                <div className={styles.checkUpdates}>
                    <p>We believe in diversity & inclusion</p>
                    <div className={styles.navigationArrow}>
                        <div className={styles.arrow}>
                            <img src={updateArrow} alt='updateArrow'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>

            <div className={styles.update}>
                <h1>03</h1>
                <div className={styles.checkUpdates}>
                    <p>We celebrate success</p>
                    <div className={styles.navigationArrow}>
                        <div className={styles.arrow}>
                            <img src={updateArrow} alt='updateArrow'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastestUpdates
