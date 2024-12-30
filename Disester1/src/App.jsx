
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashbord from './Components/Pages/Dashbord';
import Incidents from './Components/Pages/Incidents';
import Locations from './Components/Pages/Locations';
import Inone from './Components/Pages/Inone';
import Intow from './Components/Pages/Intow';
import Inthree from './Components/Pages/Inthree';
import Infour from './Components/Pages/Infour';


function App() {
  

  return (

   
    <>
    
     <Router>
       <Navbar />
         <Routes>
           <Route path='/dashboard' element={<Dashbord />} />
           <Route path='/incidents' element={<Incidents />} />
           <Route path='/locations' element={<Locations />} />
           <Route path='/incone' element={<Inone />} />
           <Route path='/started' element={<Intow />} />
           <Route path='/three' element={<Inone />} />
           <Route path='/four' element={<Inthree />} />
           <Route path='/five' element={<Intow />} />
           <Route path='/six' element={<Infour />} />
           <Route path='/seven' element={<Inthree />} />
           <Route path='/eight' element={<Incidents />} />
         </Routes>

         
      </Router>

      
    </>
   
    
  )
}

export default App
