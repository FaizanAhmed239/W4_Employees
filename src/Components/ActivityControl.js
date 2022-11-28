import {React,useState} from 'react'
import {
    Link,
  } from 'react-router-dom';
  


export default function ActivityControl() {

    const [data, setData] = useState([
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ''},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ''},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'True', 'enabled': ''},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ''},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ''},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""},
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""}
    ]);

    const DisplayPolicy=()=>{
        return(
            <>       
            {data.map((activity,i)=>{
                return(
                    <div key={i} className='row p-0 py-1 border' style={{background:'white'}}>
                        
                        <div className='col-6 text-center'>
                            {activity.actname}
                        </div>
                        <div className='col-6' >
                          <div class="form-check form-switch" style={{display: 'flex'}}>
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style={{margin:'auto'}}/>
                                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                            </div>
                        </div>           
                    </div>            
                  )})}            
            </>
            )
    }
  return (
            
            <div className='container-fluid' style={{height:'80vh'}}>    
                <div className='row mx-0 mt-4 p-0 py-1' style={{color: 'white',background:'#707070'}}>                    
                    <div className='col-6 text-center'>
                        Activity
                    </div>
                    <div className='col-6 text-center'>
                        Enabled/Disabled
                    </div>
                </div>
                <div className='row mx-0 mt-0 p-0' style={{display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '60vh'}}>
                    {<DisplayPolicy/>}                
                </div>
            </div>
  )
}
