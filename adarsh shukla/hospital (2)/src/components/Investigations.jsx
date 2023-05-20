import React from "react";

function Investigations(props) {
  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left"> STEP 5 OF 6 </div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
                <img
                  src="/images/history.png"
                  alt="Error Loading Image"
                  height="30px"
                  className="mx-2"
                />
                INVESTIGATIONS
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="h2">
          <b>
            <u>GENERAL</u>
          </b>
        </div>
        <div>
          {" "}
          <button
            className="btn btn-outline-danger mt-5 btn-lg"
            onClick={props.decreaseNum}
          >
            &lt; BACK
          </button>
          <button
            className="btn btn-outline-danger mt-5 btn-lg"
            style={{ marginLeft: "5px" }}
            onClick={props.increaseNum}
          >
            NEXT &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Investigations;
