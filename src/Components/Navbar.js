import React from 'react'

export default function Navbar() {
  return (
    <div className='container-fluid' style={{background: '#A19B9E', borderColor: '#707070'}}>
      <div className='row'>
       <div className='col-2 py-2'>
        <h6>Welcome: Junaid Atif</h6>
       </div>
       <div className='col-7'>
        
       </div>
       <div className='col-2 py-2 ps-4'>
        Signed In as: Admin
       </div>
       <div className='col-1 p-0 py-1'>
        <div className='btn btn-dark'>Logout</div>
       </div>
      </div>
    </div>
  )
}
