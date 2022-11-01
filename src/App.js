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
import ViolationDetails from './Components/ViolationDetails';
import PolicyEditor from './Components/PolicyEditor';
import {
      BrowserRouter as Router,
      Routes,
      Route,
  } from 'react-router-dom';

function App() {
  return (
      <Router>
            <div className="App container-fluid">
                  <div className='row'>
                        <div className='col-12 p-0'>
                              <Navbar/>
                        </div>
                  </div>
                  <div className='row p-0'>
                        <div className='col-2 p-0'>
                              <SideBar/>
                        </div>
                        <div className='col-10 p-0'>
                        <Routes>
                              <Route path="/" element={<Home/>} />
                              <Route path="/registration" element={<Registration/>} />
                              <Route path="/attendance" element={<Attendance/>} />
                              <Route path="/violations" element={<Violations/>} />
                              <Route path="/role management" element={<RoleManagement/>} />
                              <Route path="/group Management" element={<GroupManagement/>} />
                              <Route path="/system Control" element={<SystemControl/>} />
                              <Route path="/violationdetails" element={<ViolationDetails/>} />
                              <Route path="/policyeditor" element={<PolicyEditor/>} />
                              
                        </Routes>
                        </div>
                  </div>
            </div>
      </Router>
    
  );
}

export default App;
