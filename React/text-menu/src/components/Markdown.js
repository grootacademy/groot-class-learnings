
import Markdown from 'markdown-to-jsx'
import React, { useState } from 'react'

import { useEffect } from 'react'

const Markdown1 = () => {

    const [md, setmd] = useState("")

    useEffect(() => {

        console.log("ggg")
        import("../markdowns/sample.md")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setmd(res))
            })
    }, [])


    return (
        <div>
            <Markdown>
                {md}
            </Markdown>
        </div>
    )
}

export default Markdown1