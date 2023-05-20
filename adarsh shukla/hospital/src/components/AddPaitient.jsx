import React from 'react'

function AddPaitient(props) {
    return (
        <>
            <div className='bg-danger p-4 text-white d-flex'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='h1 col-md-4 text-center text-md-left'>Step 1 of 6</div>
                        <div className='col-md-4'>
                            <h2 className='d-flex align-items-center justify-content-center' style={{ whiteSpace: "nowrap" }}>
                                <img src="/images/icons8-male-user-96.png" alt="profile" height="40px" className='mx-3' />
                                Personal detail</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-sm-12 mt-3'>
                            <input type="text" placeholder="Husband's name" />
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" placeholder='Height' />
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" placeholder='Weight' />
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" placeholder='BMI' />
                        </div>
                        <div className='col-sm-3 mt-3 pt-3'>
                            <h6>Infertility</h6>
                            <div className='d-flex flex-wrap'>
                                <div>  <input type="radio" name='infertility' id='primary' /> <label htmlFor="primary" className='mr-2'> PRIMARY </label></div>
                                <div>  <input type="radio" name='infertility' id='secondary' /> <label htmlFor="secondary"> SECONDARY </label></div>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <input type="text" placeholder="Address" />
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <input type="text" placeholder="Phone no." />
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>
                </div>

                <div className='m-3 d-flex justify-content-end mt-5'>
                    <button className='btn btn-outline-danger btn-lg' onClick={props.increaseNum}>NEXT &gt; </button>
                </div>
            </div>
        </>
    )
}

export default AddPaitient