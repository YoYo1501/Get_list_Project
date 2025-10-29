
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ixios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';


export function App(){
  const [showRegister, setShowRegister] = useState(false);
const [showLogin, setShowLogin] = useState(true);
const [showDashboard, setShowDashboard] = useState(false);

 
 
  // useEffect(()=>{
  //   console.log("Test parent3")
  // },[name, email]
// )

  // function handleClick(){

  // }

function GoToRegister(){
  setShowLogin(false);
  setShowRegister(true);
  setShowDashboard(false);
}
function GoToLogin(){
  setShowLogin(true);
  setShowRegister(false);
  setShowDashboard(false);
}
function GoToDashboard(){
  setShowLogin(false);
  setShowRegister(false);
  setShowDashboard(true);
}

    return (
    <div className="flex justify-center items-center h-screen w-screen">
      {showLogin && <Login gotoDashboard={GoToDashboard} goToReg={GoToRegister} />}
      {showRegister && <Register goToLog={GoToLogin} />}
      {showDashboard && <Dashboard />}
    </div>
  )
}

  












