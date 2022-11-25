import './styles.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Attendance from './Components/Attendance';
import Registration from './Components/Registration';
import Violations from './Components/Violations';
import GroupManagement from './Components/GroupManagement';
import SystemControl from './Components/SystemControl';
import RoleManagement from './Components/RoleManagement';
import PolicyEditor from './Components/PolicyEditor';
import ViolationDetails from './Components/ViolationDetails';
import AddPolicy from './Components/AddPolicy';
import EditPolicy from './Components/EditPolicy';
import ActivityControl from './Components/ActivityControl';
import PolicyControl from './Components/PolicyControl';
import {
      BrowserRouter as Router,
      Routes,
      Route,
  } from 'react-router-dom';

function App() {
  return (
      <Router>
            <div className="App container-fluid" style={{height: '100%'}}>
                  <div className='row'>
                        {/* <div className='col-12 p-0'> */}
                              <Navbar/>
                        {/* </div> */}
                  </div>
                  <div className='row p-0'>
                        <div className='col-2 p-0'>
                              <SideBar/>
                        </div>
                        <div className='col-10 p-0'>
                              <Routes>
                                    <Route path="/" element={<Home/>} />
                                    <Route path="/home" element={<Home/>} />
                                    <Route path="/registration" element={<Registration/>} />
                                    <Route path="/attendance" element={<Attendance/>} />
                                    <Route path="/violations" element={<Violations/>} />
                                    <Route path="/role management" element={<RoleManagement/>}/>
                                    <Route path="/group Management" element={<GroupManagement/>}/>
                                    <Route path="/violationdetails" element={<ViolationDetails/>}/>
                                    <Route path="/addpolicy" element={<AddPolicy/>}/>
                                    <Route path="/editpolicy" element={<EditPolicy/>}/>
                                    <Route path="/policyeditor" element={<PolicyEditor/>}/>
                                    <Route path="/system Control" element={<SystemControl/>}>
                                          <Route index element={<ActivityControl/>}/>
                                          <Route path="activitycontrol" element={<ActivityControl/>} />
                                          <Route path="policycontrol" element={<PolicyControl/>}/>   
                                    </Route>
                              </Routes>
                        </div>
                  </div>
            </div>
      </Router>
    
  );
}

export default App;
