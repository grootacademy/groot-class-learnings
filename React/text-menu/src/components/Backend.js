import React, { useEffect, useState } from 'react'

function Backend() {

  // let a = {
  //   this: "my"
  // }

  // useEffect(() => {

  //   fetch("https://pxq9g66t97.execute-api.us-east-1.amazonaws.com/dev/currency")
  //     .then(res => res.json())
  //     .then(json => {
  //       setData(json);
  //       console.log(json)

  //     });

  // }, []);

  function handle() {
    fetch("https://pxq9g66t97.execute-api.us-east-1.amazonaws.com/dev/request", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ test: "string" }),
    })
      .then(res => res.json())
      .then(json => {
        console.log("local: ", json)
      });
  }

  function handlelocal() {
    fetch("http://localhost:3000/dev/currency", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ test: "string" }),
    })
      .then(res => res.json())
      .then(json => {
        console.log("online: ", json)
      });
  }


  return (
    <div>

      <button onClick={handle}>click</button>
      <button onClick={handlelocal}>local</button>
    </div>
  )
}

export default Backend