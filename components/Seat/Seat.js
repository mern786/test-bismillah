
import React from 'react'

// styles
import styles from './Seat.module.css'

export default function Seat(value) {

    const [ first_name, last_name ] = value.full_name.split(" ");
   
  return (
    <div className={styles.Seating_Master_Box} >
        <div className={`${styles.Seat_Attendee} ${styles.seat_a}`}>
            {first_name}, {last_name}
        </div>

        <div className={`${styles.seating_box} ${styles.seat_b}`}>
            <div className={styles.sub_1}>
                Bike
            </div>
            <div className={styles.sub_2}>
                18
            </div>
        </div>

        <div className={`${styles.seating_box} ${styles.seat_c}`}>
            <div className={`${styles.sub_1}`}>
                    Group
                </div>
                <div className={styles.sub_2}>
                    C
                </div>
        </div>

        <div className={`${styles.seating_box} ${styles.seat_d}`}>
            <div className={styles.sub_1}>
                    Start
                </div>
                <div className={styles.sub_3}>
                    Bike
                </div>
        </div>
    </div>
  )
}
