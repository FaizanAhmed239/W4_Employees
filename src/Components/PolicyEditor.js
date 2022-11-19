import {React,useState} from 'react'


export default function PolicyEditor() {

    const [data, setData] = useState([
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ''},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""},
        {'id':123, 'activity':"smoking", 'time': '5min', 'zone':"A", 'intensity':'high', 'enabled': ""}
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
                            {policy.intensity}
                        </div>
                        <div className='col-2 ps-4 text-center'>
                            <i class="bi bi-pencil-square"></i>
                            <i class="bi bi-trash3 ps-3"></i>
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
    
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
            <div className="row p-0 m-0 justify-content-between">
                <h1 className='col-2 p-0 pt-2 ms-3' style={{borderBottom: '1px solid white', marginBottom: '50px', marginTop: '10px', color: 'white', paddingLeft: '12px', margin: '0', fontSize: '29px'}}>
                    Policies
                </h1>
                <div className='col-1 ps-3 py-1'>
                    <div className='btn btn-dark py-0' style={{borderRadius: '50px'}}>
                        <h3 className='p-0'>+</h3>
                    </div>
                </div>
            </div>

            <div className='container my-3'>    
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
                        Intensity
                    </div>
                    <div className='col-2 text-center'>
                        Edit/Delete
                    </div>
                    <div className='col-2 text-center'>
                        Enabled/Disabled
                    </div>
                </div>
                <div style={{maxHeight: '330px', display: 'block', overflowY: 'scroll'}}>
                    {<DisplayPolicy/>}                
                </div>
            </div>

         </div>
    </div>
  )
}
