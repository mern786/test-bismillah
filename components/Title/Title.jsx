

import React, { useEffect, useState, useCallback } from 'react'
import { useSocket } from '../../hooks/useSocket'

// styles
import styles from '../../styles/global.module.css'

export default function Title() {

    const socket = useSocket();

    const [ time, setTime ] = useState({ now: '' })

    const setLiveClock = useCallback(() => {
        socket.on('currentTime', ( time ) => {
            setTime( p => { return { ...p,  now: time } })
        })
    }, [])

    useEffect(() => { setLiveClock() }, [])

  return (
    <div className={styles.title}>
       Lower Body - { time.now }
     </div>
  )
}
