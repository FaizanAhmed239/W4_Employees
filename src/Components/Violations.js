import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function Violations() {

  const [data,setData] = useState([
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
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
                    <td><Link to='/violationdetails'><img src='/icon.svg' height='27px'></img></Link></td>
           </tr>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);
  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
            <div className="row p-0 m-0">
              <h1 className='col-2 p-0 pt-2 ms-3' style={{marginBottom: '10px', marginTop: '10px', color: 'white', paddingLeft: '12px', margin: '0', fontSize: '29px', borderBottom: '1px solid white'}}>
                Violations
              </h1>
            </div>
            <div className="row ms-2 my-2 p-1 search">
              <div className="col-1 p-0">
                  <img src="\searchIcon.webp" alt=""></img>
              </div>
              <div className="col-11 p-0">
                  <p>Search Users by Employee ID, CNIC, or Mobile Number</p>
              </div>
            </div>

            <div className='container col-12 p-0 px-2'>
              <table className='violationTable p-0'>
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


