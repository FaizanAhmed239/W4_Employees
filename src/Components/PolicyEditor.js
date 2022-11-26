import {React,useState} from 'react'
import {
    Link,
  } from 'react-router-dom';

export default function PolicyEditor() {

    const [data, setData] = useState([
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""}
    ]);

    const DisplayPolicy=()=>{
        return(
            <>       
            {data.map((policy,i)=>{
                return(
                    <div key={i} className='row my-2 mx-1 p-0 py-1' style={{background:'white', borderRadius: '5px'}}>
                        
                        <div className='col-2 text-center'>
                            {policy.activity}
                        </div>
                        <div className='col-2 text-center'>
                            {policy.time}
                        </div>
                        <div className='col-2 text-center'>
                            {policy.zone}
                        </div>
                        <div className='col-2 text-center'>
                            {policy.IsAllowed}
                        </div>
                        <div className='col-2 ps-4 text-center'>
                            <Link to='/editpolicy'><i class="bi bi-pencil-square"></i></Link>
                            <span> / </span>
                            <i class="bi bi-trash3"></i>
                        </div>
                        <div className='col-2 ps-5 text-center'>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                            </div>
                        </div>
                    </div>            
                  )})}            
            </>
            )
    }
  return ( 
        <div className='container-fluid my-2' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'442px'}}>
            <div className="row p-0 m-0 justify-content-between">
                <h1 className='col-2 topHeading'>
                    Policies
                </h1>
                <div className='col-1 ps-3 py-1'>
                    <Link to='/addpolicy'>
                        <div className='btn btn-dark py-0' style={{borderRadius: '50px'}}>
                            <h3 className='p-0'>+</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row my-0 mx-1 p-0 py-1' style={{color: 'white'}}>
                <div className='col-2 text-center'>
                    Activity
                </div>
                <div className='col-2 text-center'>
                    Time Duration
                </div>
                <div className='col-2 text-center'>
                    Zone
                </div>
                <div className='col-2 text-center'>
                    IsAllowed
                </div>
                <div className='col-2 text-center'>
                    Edit/Delete
                </div>
                <div className='col-2 text-center'>
                    Enabled/Disabled
                </div>
            </div>
            <div className='row mx-0 mt-0 p-0' style={{display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '78%'}}>
                {<DisplayPolicy/>}                
            </div>
        </div>
  )
}
