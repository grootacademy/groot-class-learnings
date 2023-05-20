import React from "react";

function HusbandDetail(props) {
  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left">STEP 3 OF 6</div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
              <img
                src="/images/history.png"
                alt="Error Loading Image"
                height="30px"
                className="mx-2"
              />
              HUSBAND DETAILS
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="h2">Personal Details</div>
        <div className="row mt-5">
          <div className="col-md-6">
            <input type="text" placeholder="Age(In Years)" />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Occupation" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <input type="text" placeholder="Medical History" />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Surgical History" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3"> H/O</div>
          <div className="col-md-3">
            <label htmlFor="Coital Disturbance">
              <input type="checkbox" id="Coital Disturbance" />
              Coital Disturbance
            </label>
          </div>
          <div className="col-md-3">
            <label htmlFor="Premature">
              <input type="checkbox" id="Premature" />
              Premature
            </label>
          </div>
          <div className="col-md-3">
            <label htmlFor="Rerograde-Ejaculation">
              <input type="checkbox" id="Rerograde-Ejaculation" />
              Rerograde Ejaculation
            </label>
          </div>
        </div>
        <div className="mt-4">
          <h2>HUSBAND SEMEN ANALYSIS</h2>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="COUNT" />
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="MOTILITY" />
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="ABNORMAL FORMS" />
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="PUS CELLS" />
          </div>
          <div className="col-md-6 mt-3">
           <input type="text" placeholder="CULTURE/SENSITIVITY" />
          </div>
          <div className="col-md-6 mt-3 d-flex justify-content-end">
            <button className="btn btn-outline-danger mt-5 btn-lg" onClick={props.decreaseNum}>&lt; BACK</button>
            <button className="btn btn-outline-danger mt-5 btn-lg" style={{marginLeft:"5px"}} onClick={props.increaseNum}>NEXT &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HusbandDetail;
