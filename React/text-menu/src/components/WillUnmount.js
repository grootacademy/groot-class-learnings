import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const WillUnmount = () => {

    useEffect(() => {
        console.log("outer")

        return () => {
            console.log("inner")
        }

    }, [])


    return (
        <div>
            <Link to="/imageshow">ggg</Link>
            this
            <div style={{height:"500px", width:"500px", background:"cyan"}} onMouseMove={()=>console.log("first")}>hhhh</div>
        </div>
    )
}

export default WillUnmount