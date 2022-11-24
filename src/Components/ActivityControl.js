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
        {'id':123, 'actname':"smoking", 'time': '5min', 'zone':"A", 'IsAllowed':'False', 'enabled': ""}
    ]);

    const DisplayPolicy=()=>{
        return(
            <>       
            {data.map((activity,i)=>{
                return(
                    <div key={i} className='row mx-1 p-0 py-1 border' style={{background:'white'}}>
                        
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
    
    
        <div className='container-fluid pt-4' style={{background: '#A19B9E', height:'75vh'}}>
            
            <div className='container-fluid'>    
                <div className='row my-0 mx-1 p-0 py-1' style={{color: 'white',background:'#707070'}}>
                    
                    <div className='col-6 text-center'>
                        Activity
                    </div>
                    <div className='col-6 text-center'>
                        Enabled/Disabled
                    </div>
                </div>
                <div style={{maxHeight: '330px', display: 'block', overflowY: 'scroll'}}>
                    {<DisplayPolicy/>}                
                </div>
            </div>

         </div>
  )
}
