
import React, { useEffect, useState } from 'react'
import { useSocket } from '../../hooks/useSocket'

// components
import Seat from '../Seat/Seat'

// styles
import { Grid } from './ChatStyleComponents'

export default function Chart() {

    const socket = useSocket()

    const [ attendees, setAttendees ] = useState([]);

    useEffect(() => {

        socket.on('addSeat', (data) => {
            setAttendees( p => {
                return [ ...p, data.customer ]
            })
        })
        
    }, [])

    console.log('hi')

    const d = ["", ""]

    //( a.name.first < b.name.first ) ? -1 : ( a.name.first > b.name.first ) ? 1 : 0

    return (
        <Grid prop={ attendees.length } >
        { attendees.length > 0 ? attendees.sort(( a, b ) => a.full_name > b.full_name ? 1 : -1).map(( value, index ) => <div
        key={index} >
            <Seat key={index} {...value} />
        </div>)
        :
        <div style={{ color: 'white', textAlign: 'center' }} >
            No Data To Display
        </div>
        }
        </Grid>   
    )
}
