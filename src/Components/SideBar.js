import React from 'react'
import {
  Link,
} from 'react-router-dom';

export default function SideBar() {
  return (
        <div className='container-fluid my-2' style={{width: '100%', background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'96%'}}>
              <ui style={{listStyleType: 'none'}}>
                <li className='row'>
                    <Link to="/registration" className='col-12 p-1 sidebarLink'>Registration</Link>   
                </li>
                <li className='row'>
                    <Link to="/attendance" className='col-12 p-1 sidebarLink'>Attendance</Link> 
                </li>
                <li className='row'>
                    <Link to="/violations" className='col-12 p-1 sidebarLink'>Violations</Link> 
                </li>
                <li className='row'>
                    <Link to="/role management" className='col-12 p-1 sidebarLink'>Role Management</Link> 
                </li> 
                <li className='row'>
                    <Link to="/group Management" className='col-12 p-1 sidebarLink'>Group Management</Link>   
                </li>
                <li className='row'>
                    <Link to="/system Control" className='col-12 p-1 sidebarLink'>System Control</Link>   
                </li>
                <li className='row'>
                    <Link to="/policyeditor" className='col-12 p-1 sidebarLink'>Rules & Policy Editor</Link>   
                </li>
                <li className='row'>
                    <Link to="/live Stream" className='col-12 p-1 sidebarLink'>Live Stream</Link>  
                </li>
                <li className='row'>
                    <Link to="/performance Monitoring" className='col-12 p-1 sidebarLink'>Performance Monitoring</Link>   
                </li>               
              </ui>          
        </div>
  )
}