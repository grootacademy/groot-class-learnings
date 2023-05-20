import React from "react";

function PatientHistory(props) {
  

  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left"> STEP 2 OF 6 </div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
                <img
                  src="/images/history.png"
                  alt="Error Loading Image"
                  height="30px"
                  className="mx-2"
                />
                Patient History
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2>
              <u>
                <b>On History</b>
              </u>
            </h2>
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="Married For" />
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Cohabitation" />
                </div>
              </div>
              <div className="col-md-6 mx-3">
                <input type="text" placeholder="Coital Frequency" />
              </div>
            </div>
            <div>
              <h2 className="my-3">
                <b><u>Medical History</u></b>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="HTN">
                  <input type="checkbox" id="HTN" /> HTN
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="diabetes">
                  <input type="checkbox" id="diabetes" /> Diabetes
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="Asthma">
                  <input type="checkbox" id="Asthma" /> Asthma
                </label>
              </div>

              <div className="col-md-4">
                <label htmlFor="Epilepsy">
                  <input type="checkbox" id="Epilepsy" /> Epilepsy
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="Tuberculosis">
                  <input type="checkbox" id="Tuberculosis" /> Tuberculosis
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="Cancer">
                  <input type="checkbox" id="Cancer" /> Cancer
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <input type="text" placeholder="Any Other" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input type="text" placeholder="Surgical History" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <h2>
              <b>
                <u>Menstrual History</u>
              </b>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <input type="text" placeholder="Menarche" />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="LMP" />
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="regular">
                    <input type="radio" id="regular" />
                    Regular
                  </label>
                </div>
                <div>
                  <label htmlFor="Irregular">
                    <input type="radio" id="Irregular" />
                    Irregular
                  </label>
                </div>
              </div>
            </div>
            <div className="row d-flex ">
              <div className="col-md-4">
                <input type="text" placeholder="Length" />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="Duration" />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="Flow" />
              </div>
            </div>
            <div className="d-flex mt-5">

              <ul className="list-group">
                <li className="list-group-item">Coital Disturbance </li>
                <li className="list-group-item">PID/Tuberculosis</li>
                <li className="list-group-item">PCOS</li>
                <li className="list-group-item">Hyperprolactinemia</li>
                <li className="list-group-item">Hyper/Hypothyroidism</li>
                <li className="list-group-item">Premenstrual Disturbance/Depression</li>
                <li class="list-group-item">Dyspareunia/Dismenorrhoea</li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item"><input type="checkbox" />yes</li>
                <li className="list-group-item"><input type="checkbox" />yes</li>
                <li className="list-group-item"><input type="checkbox" />yes</li>
                <li className="list-group-item"><input type="checkbox" />yes</li>
                <li className="list-group-item"><input type="checkbox" />yes</li>
                <li className="list-group-item"><input type="checkbox" />yes</li>
                <li className="list-group-item"><input type="checkbox" />yes</li>
              </ul>
            </div>
            <div className="mt-5 d-flex justify-content-end">
              <button className="btn btn-outline-danger btn-lg" onClick={props.decreaseNum}>
                &lt; BACK{" "}
              </button>
              <button className="btn btn-outline-danger btn-lg" onClick={props.increaseNum}>
                NEXT &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientHistory;
