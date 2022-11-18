import React from 'react'
import {
  Link,
} from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='container-fluid navContainer'>
      <div className='row align-items-center'>
        <div className='col-2'>
          <h6 className='navCenter'>Welcome: <span className='navSpan'>Junaid Atif</span></h6>
        </div>
        <div className='col-7'>
          <div className='row justify-content-center'>
            <Link to="/home" className='col-3 navLink p-0'>
                <h6 className='navCenter'>W3 Employees</h6>
            </Link>
          </div>         
        </div>        
        <div className='col-2'>
          <h6 className='navCenter'>Signed In as: <span className='navSpan'>Admin</span></h6>
        </div>
        <div className='col-1 p-0 py-1'>
          <div className='btn btn-dark p-1'>Logout</div>
        </div>
      </div>
    </div>
  )
}
