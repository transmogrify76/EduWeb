import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and necessary components

// Import your components
import Contactus from './components/Contactus/Contactus';
import Alogin from './components/Alogin/Alogin'
import Adminview from './components/Adminview/Adminview';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Student from './components/Studentview/Student';
import ParentView from './components/Parentview/Parentview';
import Home from './components/Home/Home';
import Plogin from './components/Plogin/Plogin';
import Consent from './components/Consent/Consent';
import Reportc from './components/Reaportc/Reportc';
import ExternalR from './components/Externalr/Externalr';
import Tlogin from './components/Tlogin/Tlogin';
import Circular from './components/Circular/Circular';
import Calendar from './components/Calendar/Calendar';
import Leave from './components/Leave/Leave';
import Calen from './components/Calen/Calen'

// App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> Render Header component */}
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/adminview" element={<Adminview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student" element={<Student />} />
          <Route path="/parentview" element={<ParentView />} />
          <Route path="/plogin" element={<Plogin />} />
          <Route path="/Alogin" element={<Alogin/>} />
          <Route path="/Consent" element={<Consent/>}/>
          <Route path="/Reportc" element={<Reportc/>}/>
          <Route path='/Externalr' element={<ExternalR/>}/>
          <Route path='/Tlogin' element={<Tlogin/>}/>
          <Route path='/Circular' element={<Circular/>}/>
          <Route path='/Calendar' element={<Calendar/>}/>
          <Route path='/Leave' element={<Leave/>}/>
          <Route path='/Calen' element={<Calen/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export the App component
