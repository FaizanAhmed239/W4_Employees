import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';
import axios from 'axios'

export default function Violations() {

  const [data,setData] = useState([]);
  const [search, setSearch] = useState('');
  const [reload, setReload] = useState(false);
  
  useEffect(() => {
    let interval;
    const loadViolations = async () => {
      await axios.get('http://127.0.0.1:8000/violations/all-violations/')
      .then(response =>{
         setData(response.data)
        })
    }   
    interval = setInterval(() => {
      loadViolations();
      // The logic of changing counter value to come soon.
    }, 10000);
    
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get('http://127.0.0.1:8000/violations/search-violations/'+search+'/')
    .then(response =>{
      var element = document.getElementById('showviolations')
      if(response.data.length > 0)
      {
        setData(response.data)
       //element.innerHtml = <ShowSearchResults/>
      }
      else if(response.data.length === 0){
        console.log("caco");
        setData([])
        element.innerHtml = <ShowError/>;

      }
       
       console.log(response.data)
      })
  }   
  const ShowError = () => {
    return(
      <>
      <h8>No Results Found</h8>
      </>
    )
  }
  const ShowSearchResults = () => {
    return(
      <>
      <table className='violationTable p-0'>
                    <tr>
                      <th>Activity</th>
                      <th>Person</th>
                      <th>Zone</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Date</th>
                      <th>Operations</th>                    
                    </tr> 
                    <ShowViolationData/>
        </table>
      </>
    )
  }
  console.log(data);
  const ShowViolationData = () => {
    return(
    <>
    
    {data.map((violation,i)=>{
        return(
          <tr key={i}>
                    <td>{violation.activity}</td>
                    <td>{violation.person!=null?violation.person:'Unknown'}</td>
                    <td>{violation.zone}</td>
                    <td>{violation.start_time}</td>
                    <td>{violation.end_time}</td>
                    <td>{violation.date}</td>
                    <td><Link to='/violationdetails'><img src='/icon.svg' height='27px'></img></Link></td>
           </tr>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);
  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
            <div className="row p-0 m-0">
              <h1 className='col-2 topHeading'>
                Violations
              </h1>
            </div>
            <div className="row ms-1 my-1">
              <div className='col-11'>
                <form onSubmit={handleSubmit}>
                  <input type="text" class="form-control mt-2 mb-4" id="searchbar" placeholder='Search Users by Employee ID, CNIC, or Mobile Number' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  </form>
              </div>

              </div>

            <div className='container-fluid col-12 p-0 px-2' id='showviolations'>
              <table className='violationTable p-0' style={{ display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '50vh'}}>
                    <tr>
                      <th>Activity</th>
                      <th>Person</th>
                      <th>Zone</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Date</th>
                      <th>Operations</th>                    
                    </tr> 
                    {<ShowViolationData/>}
              </table>
            </div>
            
        </div>
          
    </div>
  )
}


