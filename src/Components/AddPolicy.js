import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';

export default function GroupManagement() {
    const [duration, setDuration] = useState(0);
  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
            <div className='container bg-white p-2 my-3' style={{height: '72vh'}}>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                    <Link to='/policyeditor'><i className="bi bi-arrow-left"></i></Link>
                    </div>
                    <h1 className='col-8 fs-3 pt-1 text-dark'>Add New Policy</h1>
                </div>
                <form className="row g-3">
                   
                    <div className="col-4">
                        <label for="inputState" className="form-label">Activity</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>Talking On Phone</option>
                        <option>Holding Gun/Shooting </option>
                        </select>
                    </div>
                    <div className='col-8'></div>
                    <div className='row g-3'>
                        <div className='col-4 mt-0'>
                            <label for="inputZip" className="form-label">Time Duration (0 - 20) mins</label>
                            <input className='inpTime'
                                type="number"
                                min='0'
                                max='20'
                                value={duration}
                                onChange={e => {
                                setDuration(Number(e.target.value));
                                console.log(duration)
                                }}
                            />
                        </div>
                        <div className='col-1 ps-1'></div>    
                    </div>
                    
                    
                    <div className="col-12 justify-centent-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
