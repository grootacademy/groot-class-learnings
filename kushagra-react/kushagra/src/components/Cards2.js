import React from 'react'
import Card from './Card'

function Cards2() {

    let data = [
        {
            title: "title1",
            discription: "description1",
            link: "http://google.com"
        },
        {
            title: "title2",
            discription: "description2",
            link: "http://google.com"
        },
        {
            title: "title3",
            discription: "this is three description",
            link: "http://google.com"
        },
        {
            title: "title4",
            discription: "description4",
            link: "http://google.com"
        },
        {
            title: "title5",
            discription: "description5",
            link: "http://google.com",
        },
        {
            title: "title5",
            discription: "description5",
            link: "http://google.com",
        }

    ]

    return (
        <>
            <div className='d-flex justify-content-between flex-wrap'>
                {data.map((e, i) => (
                    <Card data={e} key={i} />
                ))}
            </div>
        </>
    )
}

export default Cards2