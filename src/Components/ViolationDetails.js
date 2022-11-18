import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function ViolationDetails() {

  const [data,setData] = useState([
  {'id':'', 'name':"Low-Level", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Low-Level", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'C', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Smoking", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Vaping", 'zone':'B', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Low-Level", 'cnic': '4', 'role':"Shooting", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Low-Level", 'cnic': '4', 'role':"Shooting", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Low-Level", 'cnic': '4', 'role':"Shooting", 'zone':'D', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3},
  {'id':'', 'name':"Critical", 'cnic': '4', 'role':"Shooting", 'zone':'A', 'critviolnum':'12-06-2022 13:40:33', 'lowviolnum':'0 hour 35 min 10 sec', 'policyid':3}

  ]);
  
   
  console.log(data);
  const ShowViolationData = () => {
    return(
    <>
    
    {data.map((employee,i)=>{
        return(
          <div key={i} className='row my-2 mx-1 p-0 py-1 fs-7' style={{backgroundColor: '#A19B9E', borderRadius:'5px'}}>
              <div className='col-1 ps-0 text-center'>
                <i class="bi bi-exclamation-triangle"></i>
              </div>
              <div className='col-1 text-center'>
                  {employee.name}
              </div>
              <div className='col-1 ps-4 text-center'>
                  {employee.cnic}
              </div>
              <div className='col-2 ps-5 text-center'>
                  {employee.role}
              </div>
              <div className='col-1 ps-4 text-center'>
                  {employee.zone}
              </div>
              <div className='col-2 ps-5 text-center'>
                  {employee.critviolnum}
              </div>
              <div className='col-2 ps-4 text-center'>
                  {employee.lowviolnum}
              </div>
              <div className='col-1 ps-4 text-center'>
                  {employee.policyid}
              </div>
           </div>
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
            <div className='container my-3'>    

              <div className='row m-0 p-0 py-1 fs-7' style={{}}>
                <div className='col-1 ps-1 text-center'>
                  Violation Level
                </div>
                <div className='col-1 ps-1 text-center'>
                  Violation Type  
                </div>
                <div className='col-1 ps-4 text-center'>
                  Violation Id
                </div>
                <div className='col-2 ps-4 text-center'>
                  Activity Involved
                </div>
                <div className='col-1 ps-3 text-center'>
                  Zone
                </div>
                <div className='col-2 ps-4 text-center'>
                  Date/Time of Violation
                </div>
                <div className='col-2 ps-2 text-center'>
                  Duration
                </div>
                <div className='col-1 ps-0 text-center'>
                  Policy Id
                </div>
              </div>
              
              <div style={{maxHeight: '140px', display: 'block', overflowY: 'scroll'}}>
                {<ShowViolationData/>}                
              </div>
            </div>
          </div>  
            
        </div>
          
    </div>
  )
}


