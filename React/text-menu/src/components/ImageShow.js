import React, { useState } from 'react'

const ImageShow = () => {
    const [first, setFirst] = useState([])

    const handleChange = (e) => {
        const files = Array.from(e.target.files)
        let firstL = [...first]

        files.forEach(e => {
            const url = URL.createObjectURL(e)
            firstL.push(url)
        });

        setFirst(firstL)
    }

    return (
        <div>
            <input type="file" multiple onChange={handleChange} />
            <br />
            {first.map((e, i) => (
                <img key={i} width="200" src={e} alt="" />
            ))}
        </div>
    )
}

export default ImageShow

