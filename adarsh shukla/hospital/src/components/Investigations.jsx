import React from "react";

function Investigations(props) {
  return (
    <>
      <div className="investigation">

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
          <div className="row">
            <div className="col-md-6">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Blood Test Name</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>White Blood Cell Count</td>
                      <td>4.5 x 10^9/L</td>
                    </tr>
                    <tr>
                      <td>Red Blood Cell Count</td>
                      <td>5.2 x 10^12/L</td>
                    </tr>
                    <tr>
                      <td>Hemoglobin</td>
                      <td>14 g/dL</td>
                    </tr>
                    <tr>
                      <td>Hematocrit</td>
                      <td>42%</td>
                    </tr>
                    <tr>
                      <td>Platelet Count</td>
                      <td>200 x 10^9/L</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 d-flex justify-content-end">
            <button className="btn btn-outline-danger mt-5 btn-lg" onClick={props.decreaseNum}>&lt; BACK</button>
            <button className="btn btn-outline-danger mt-5 btn-lg" style={{ marginLeft: "5px" }} onClick={props.increaseNum}>NEXT &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investigations;
