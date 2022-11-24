import React,{useState} from 'react'
import {
  Link,
 Outlet
} from 'react-router-dom';


export default function SystemControl() {
  let normalstyle = {
    background: '#A19B9E'
  }
  let hoverstyle = {
    background: '#707070'
  }
  const [styles,setStyles] = useState([
    hoverstyle,
    normalstyle
  ])

  const handleHover = (id) => {
    let style = {
      normalstyle,
      normalstyle
    }
    style[id] = hoverstyle
    setStyles(style)
  } 
  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
          <div className="row justify-content-center p-0 m-0">
            <Link to="activitycontrol" className='controlNav1 border border-dark text-center col-2' style={styles[0]} onClick={()=>handleHover(0)}>
              <div >
                  Activity Control
              </div>
            </Link>
            <Link to="policycontrol" className='controlNav2 border border-dark text-center col-2' style={styles[1]} onClick={()=>handleHover(1)}>
              <div>
                  Policy Control
              </div>
            </Link>
            <div>
            <Outlet/>
            </div>          
           
          
          </div>
          
        </div>
    </div>
  )
}
