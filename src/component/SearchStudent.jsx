import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
        <NavBar/>
        <div className="components">
            <div className="rows col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <rows>
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                    <button className="btn btn-success">Search</button>
                </div>
            </rows>
        </div>
    
    </div>
    </div>
  )
}

export default SearchStudent