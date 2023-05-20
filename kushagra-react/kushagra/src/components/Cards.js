import React from 'react'
import Card from './Card'

function Cards() {
    // props -> sending data from parent to child

    let data1 = {
        title: "title1",
        discription: "description1",
        link: "http://google.com"
    }

    let data2 = {
        title: "title2",
        discription: "description2",
        link: "http://google.com"
    }

    let data3 = {
        title: "title3",
        discription: "this is three description",
        link: "http://google.com"
    }

    let data4 = {
        title: "title4",
        discription: "description4",
        link: "http://google.com"
    }

    let data5 = {
        title: "title5",
        discription: "description5",
        link: "http://google.com",
    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <Card data={data1} />
                <Card data={data2} />
                <Card data={data3} />
                <Card data={data4} />
                <Card data={data5} />
            </div>
        </>
    )
}

export default Cards