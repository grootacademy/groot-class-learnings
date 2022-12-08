import React, { useEffect, useState } from 'react'

function Backend() {

  const [data, setData] = useState([]);

  // function getData() {

  //   fetch("http://localhost:5057/api/provider/account")
  //     .then(res => res.json())
  //     .then(json => {
  //       setData(json);
  //     });
  // }

  useEffect(() => {

    fetch("http://localhost:5057/api/provider/account")
      .then(res => res.json())
      .then(json => {
        setData(json);
      });

  }, []);


  // useEffect(()=>{}, []);
  // fetch().then().then();

  return (
    <div>
      {/* <button onClick={getData}>Backend</button> */}

      {data.map(e => (
        <div key={e.id}>

          <p>id:- {e.id}</p>
          <p>accessKey:- {e.accessKey}</p>
          <p>accountId:- {e.accountId}</p>
          <p>cloudType:-{e.cloudType}</p>
          <p>secretKey:- {e.secretKey}</p>
          <hr />

        </div>
      ))}


    </div>
  )
}

export default Backend