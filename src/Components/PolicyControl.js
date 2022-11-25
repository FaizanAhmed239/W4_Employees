import {React,useState} from 'react'
import {
    Link,
  } from 'react-router-dom';
  


export default function PolicyControl() {

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
                    <div key={i} className='row mx-1 p-0 py-1 border' style={{background:'white'}}>
                        
                        <div className='col-3 text-center'>
                            {policy.activity}
                        </div>
                        <div className='col-3 text-center'>
                            {policy.time}
                        </div>
                        <div className='col-2 text-center'>
                            {policy.zone}
                        </div>
                        <div className='col-2 text-center'>
                            {policy.IsAllowed}
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
    
    
        // <div className='container-fluid pt-4' style={{background: '#A19B9E', height:'75vh'}}>
            
            <div className='container-fluid'>    
                <div className='row my-0 mx-1 p-0 py-1' style={{color: 'white',background:'#707070'}}>
                    
                    <div className='col-3 text-center'>
                        Activity
                    </div>
                    <div className='col-3 text-center'>
                        Time Duration
                    </div>
                    <div className='col-2 ps-5'>
                        Zone
                    </div>
                    <div className='col-2 ps-4'>
                        IsAllowed
                    </div>
                    <div className='col-2 ps-0'>
                        Enabled/Disabled
                    </div>
                </div>
                <div style={{maxHeight: '330px', display: 'block', overflowY: 'scroll'}}>
                    {<DisplayPolicy/>}                
                </div>
            </div>

        //  </div>
  )
}
