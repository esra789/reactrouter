import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Navbar1 from './component/Navbar';
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Register from './component/Register';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
     <Navbar1/>
     <Routes>
      <Route path='/Login' element={<Login/>} />
      <Route path='/Profile' element={  <Profile/>}/>
      <Route path='/' element={   <Home/>}/>
      <Route path='/Register' element={   <Register/>}/>
      <Route path='/Contact' element={   <Contact/>}/>
     </Routes>
      
    
     
      
    </div>
  );
}

export default App;
