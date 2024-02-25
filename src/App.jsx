import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from "./components/Dashboard"
import Edituser from './components/Edituser';

function App() {
  let [users,setUsers] = useState([{
    name:"Office task 1",
    desc:"This is the first task"
  },
  {
    name:"Office task 2",
    desc:"This is the Second task"
  },
  {
    name:"Office task 3",
    desc:"This is the third task"
  }])

  return (
    <div id="wrapper">
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard users={users} setUsers={setUsers}/>}/>       
      <Route path='/edit-user/:id' element={<Edituser users={users} setUsers={setUsers}/>}/>
      <Route path='*' element={<Navigate to='/'/>}/> 
    </Routes>         
  </BrowserRouter>
   </div>
     )
}

export default App
