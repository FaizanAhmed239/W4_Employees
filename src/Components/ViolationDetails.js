import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function ViolationDetails() {

  const [data,setData] = useState([{'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},{'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},

  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4}

  ]);
  
   
  console.log(data);
  const ShowViolationData = () => {
    return(
    <>
    
    {data.map((employee,i)=>{
        return(
          <tr key={i}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.cnic}</td>
                    <td>{employee.role}</td>
                    <td>{employee.zone}</td>
                    <td>{employee.critviolnum}</td>
                    <td>{employee.lowviolnum}</td>
                    <td><Link ></Link></td>
           </tr>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);

  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
          <div className='container bg-white p-2 my-3'>
            <div className='row'>
                <div className='col-2'>
                  <Link to='/violations'><i class="bi bi-arrow-left"></i></Link>
                </div>
                <div className='col-8'>
                  <h5 className='text-center'>Uncle Majboor</h5>
                </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <ul className='uoList0 py-2'>
                  <li>Employee Id:</li>
                  <li>Employee Type:</li>
                  <li>CNIC:</li>
                  <li>Mobile Number:</li>
                </ul>
              </div>
              <div className='col-4'>
                <ul className='uoList1 py-2'>
                  <li>123</li>
                  <li>User</li>
                  <li>35202-2222222-2</li>
                  <li>03201111111</li>
                </ul>
              </div>
              <div className='col-4'>
                <i class="bi bi-person-circle"></i>
              </div>
              
            </div>
              <table className='violationTable'>
                    <tr>
                      <th>Employee Id</th>
                      <th>Employee Name</th>
                      <th>CNIC</th>
                      <th>User Type/Role</th>
                      <th>Zone</th>
                      <th>Critical Violations</th>
                      <th>Low-Level Violations</th>
                      <th>Operations</th>                    
                    </tr> 
              {<ShowViolationData/>}
              </table>
          </div>  
            
        </div>
          
    </div>
  )
}


