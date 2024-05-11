// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Addemployee } from './pages/Addemployee';
import { Employeemanage } from './pages/Employeemanage';
import { Employeeedit } from './pages/Employeeedit';
import TopBar from './components/Topbar';




const App: React.FC = () => {
  return (
    <Router>
      <TopBar/>
      <div className="flex min-h-screen bg-blue-100">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/manageemployee"  Component={Employeemanage} />
            <Route path="/addemployee" Component={Addemployee} />
            <Route path="/employeeedit/:id" Component={Employeeedit} />
        
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
