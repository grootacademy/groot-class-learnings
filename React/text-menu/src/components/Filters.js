import React, { useState } from 'react'

function Filters() {

    const data1 = [
        {
            "id": 1501,
            "name": "HP ASUS",
            "description": "description",
            "imageUrl": null,
            "modleNo": "modleNo",
            "skuNo": "12SA",
            "itemCode": "1230",
            "price": "48000",
            "discount": "2%",
            "discountType": null,
            "stock": null,
            "status": "ACTIVE",
            "createdOn": "2022-12-29T09:25:30.786668Z",
            "updatedOn": "2022-12-29T09:25:30.786668Z",
            "updatedBy": "system",
            "createdBy": "system",
            "menu": null
        },
        {
            "id": 1502,
            "name": "I KALL Z12",
            "description": "I KALL Z12 4GB/64GB 6.53 inch Skyblue 4G Smartphone",
            "imageUrl": null,
            "modleNo": "modleNo",
            "skuNo": "12SA",
            "itemCode": "1230",
            "price": "5422",
            "discount": "2%",
            "discountType": null,
            "stock": null,
            "status": "ACTIVE",
            "createdOn": "2022-12-30T08:50:53.048943Z",
            "updatedOn": "2022-12-30T08:50:53.048943Z",
            "updatedBy": "system",
            "createdBy": "system",
            "menu": null
        }
    ]

    const [data, setData] = useState(data1);
    const [filteredData, setFilteredData] = useState(data1);

    function lesser() {
        let a = data.filter(e => (e.price < 9000));
        setFilteredData(a);
    }

    function greater() {
        setFilteredData(data.filter(e => (e.price > 9000)));
    }

    function forAll() {
        setFilteredData(data);
    }



    return (
        <div>

            <button onClick={lesser}>lesser</button>
            <button onClick={greater}>greater</button>
            <button onClick={forAll}>all</button>
            {
                filteredData.map(e => (
                    <div>

                        <div>{e.price}</div>
                        <div>{e.name}</div>
                    </div>
                ))
            }

        </div>
    )
}

export default Filters