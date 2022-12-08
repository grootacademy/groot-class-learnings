import React, { useState } from 'react'

function Backend() {

  const [data, setData] = useState({});



  function getData() {


    fetch("url")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json);
      });


  }


  // fetch().then().then();

  return (
    <div>
      <button onClick={getData}>Backend</button>

      {data?.object?.map((e) => {
        return <div key={e.id}>
          <p>Category:- {e.details.category}</p>
          <p>Name:- {e.details.itemName}</p>
          <p>Price:-{e.details.price}</p>
          <p>Status:- {e.details.status}</p>
          <p>Supplier city:-{e.details.supplier.city}</p>
          <hr />
        </div>
      })
      }


      {/* <div style={{ fontSize: '12px' }}>

        {JSON.stringify(data)}
      </div> */}

    </div>
  )
}

export default Backend