import React, { useState } from 'react'
import NavBar from './NavBar'


const AddStudent = () => {
    const[data,setData]=useState(
        {
        "firstname":"",
        "lastname":"",
        "college":"",
        "mobile":"",
        "email":"",
        "address":""
        }
    )
    const inputHander=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>(
        console.log(data)
        
    )
  return (
    <div>
        <NavBar/>
        <div className="components">
            <div className="rows col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="rows">
            <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">First Name</label>
                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHander}/>
                </div>
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">lastname:</label>
                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHander} />

                </div>
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">College</label>
                    <input type="text" className="form-control" name='college' value={data.college} onChange={inputHander}/>
                </div>
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">mobile</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHander} />
                </div>
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHander} />
                
                <div className="col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">
                    <label htmlFor="" className="form-label">Adress</label>
                    
                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHander} />
                    
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                    <button className="btn-success" onClick={readValue}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AddStudent