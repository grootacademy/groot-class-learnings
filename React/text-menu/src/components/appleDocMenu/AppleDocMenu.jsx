import { useMotionValue, motion, useTransform, useSpring } from 'framer-motion'
import React, { useRef } from 'react'

function AppleDocMenu() {

    let mouseX = useMotionValue(Infinity)

    const handleMouseMove = (e) => {
        mouseX.set(e.pageX)
    }

    return (
        <>
            <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-secondary">
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='d-flex bg-dark px-3 rounded_corner align-items-end pb-1 accordion' style={{ height: "60px" }} onMouseMove={handleMouseMove} onMouseLeave={() => mouseX.set(Infinity)}>
                        {[...Array(10).keys()].map(i =>
                            <DocItem {...{ mouseX }} key={i} />
                        )}
                    </div>
                </div >

            </div >

        </>
    )
}

export default AppleDocMenu

function DocItem({ mouseX }) {
    const item = useRef(null)

    let distance = useTransform(mouseX, val => {
        const bounds = item.current?.getBoundingClientRect();
        return val - (!!bounds?.x ? bounds?.x : 0) - (!!bounds?.width ? bounds?.width : 0) / 2
    })

    let widthSync = useTransform(distance, [-200, 0, 200], [50, 200, 50])
    let width = useSpring(widthSync, { damping: 20, mass: 1, stiffness: 200 })

    console.log("first")
    return (
        <>
            <motion.div
                ref={item}
                className='rounded_corner mx-1 bg-light'
                style={{ height: width, width: width, }}
            ></motion.div>
        </>
    )
}
