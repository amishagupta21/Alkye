import React from 'react'
import styles from "./index.module.css"
import dividedStrategic from "../../utils/images/Group 1593.png"

const StrategicInitiatives = () => {
    return (
        <div className={styles.strategicConatiner}>
            <div className={styles.content}>
                <div className={styles.diversityHeading}>
                    <h1>We believe in <span>diversity & inclusion</span></h1>
                </div>
                <div className={styles.aboutDiversity}>
                    <p>At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.</p>
                    <p>Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging. </p>
                    <p>Some of our strategic initiatives include:</p>
                </div>
            </div>
            <div className={styles.diversityGraph}>
                <img src={dividedStrategic} alt='dividedStrategic'/>
            </div>
        </div>
    )
}

export default StrategicInitiatives
