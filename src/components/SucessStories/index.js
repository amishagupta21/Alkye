import React from 'react'
import styles from "./index.module.css"
import appreciationImage from "../../utils/images/appreciationImage.svg"
import appreciation1 from "../../utils/images/appreciationImage1.svg"
import appreciation2 from "../../utils/images/appreciationImage2.svg"

const SucessStories = () => {
    return (
        <div className={styles.storiesContainer}>
            <div className={styles.sucessImages}>
                <div className={styles.sucessContent}>
                    <h1>We celebrate <span>success</span></h1>
                    <p>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
                        celebrating these moments because they underscore the commitment and effort put into each project.
                    </p>
                    <p>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
                        team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p>
                </div>
            </div>
            <div className={styles.employeeAppreciation}>
                <div className={styles.appreciationContent}>
                    <h1>Employee <span>Appreciation Program</span></h1>
                    <p>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
                        and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
                        company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
                        recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
                        celebrated with the grandeur it deserves
                    </p>
                </div>
                <img src={appreciationImage} alt='appreciationImage'/>
            </div>
            <div className={styles.appreciationImages}>
                <img src={appreciation1} alt='appreciation1'/>
                <img src={appreciation2} alt='appreciation2'/>
            </div>
        </div>
    )
}

export default SucessStories
