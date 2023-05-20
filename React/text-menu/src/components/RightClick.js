import React from 'react'

const RightClick = () => {

    const handle = (e) => {
        console.log(e)
        document.write("this is right click")
    }

    return (
        <>
            <button type="text" onContextMenu={handle} >click</button>

        </>
    )
}

export default RightClick
