
import './App.css';
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import Main from './components/customer/Main'
import ExploreMarket from './components/customer/ExploreMarket'
import About from './components/customer/About'
import BeVendor from './components/customer/BeVendor'
import Contact from './components/customer/Contact'
import Login from './components/customer/Login'
import SignUp from './components/customer/SignUp'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     < Header/>
      <Routes>
         <Route exact path='/' element={<Main/>}/>
        <Route path='Explore-Market' element={<ExploreMarket/>}/>
        <Route path="AboutUS" element={<About />}/>
        <Route path="Be-Vendor" element={<BeVendor />}/>
        <Route path="Contact" element={<Contact />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="SignUp" element={<SignUp />}/>
        
        
      </Routes>
     <Footer/>
     

    </div>
  );
}

export default App;
