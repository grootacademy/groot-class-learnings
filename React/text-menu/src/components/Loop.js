import React from 'react'
import Card from './Card';

function Loop() {

    // let friends = ["Jitin", "Mohit", "sumit", "pawan", "sandeep", "ritesh", "Jitin", "Mohit", "sumit", "pawan", "sandeep", "ritesh"];

    // for (let i = 0; i < friends.length; i++) {
    //     console.log(friends[i]);
    // }

    // friends.forEach(e => {
    //     console.log(e + 3) ;
    // });

    let products = [
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },
        {
            name: "Mobile",
            subtitle: "realme mobile",
            discription: "realme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobile"
        },
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },
        {
            name: "Mobile",
            subtitle: "realme mobile",
            discription: "realme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobile"
        },
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },
        {
            name: "Mobile",
            subtitle: "realme mobile",
            discription: "realme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobile"
        },
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },
        {
            name: "Mobile",
            subtitle: "realme mobile",
            discription: "realme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobile"
        },
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },
        {
            name: "Mobile",
            subtitle: "realme mobile",
            discription: "realme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobile"
        },
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },
        {
            name: "Mobile",
            subtitle: "realme mobile",
            discription: "realme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobilerealme mobile is best mobile"
        },
        {
            name: "Laptop",
            subtitle: "hp laptop",
            discription: "hp laptop is best laptop"
        },
        {
            name: "Laptop",
            subtitle: "dell laptop",
            discription: "dell laptop is also best laptop"
        },
        {
            name: "Mobile",
            subtitle: "samsung mobile",
            discription: "samsung mobile is best mobile"
        },

    ];

    return (
        <>
            {/* <div className='loop'>
                {friends.map((e) => {
                    return <div className='loop_prt '> {e}</div>
                })}
            </div> */}

            <div className='d-flex flex-wrap'>
                {products.map(e => {
                    return <Card data={e}/>
                })}
            </div>

        </>
    )
}

export default Loop