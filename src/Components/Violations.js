import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link,
} from 'react-router-dom';


export default function Violations() {

  const [data,setData] = useState([{'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},{'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
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
                    <td><Link to='/violationdetails'><img src='/icon.svg'></img></Link></td>
           </tr>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);
{/* <img src=='/icon.svg'></img> */}
  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
            <div className='row'>
              <h3>Violations</h3>
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
  )
}


