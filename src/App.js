import './App.css'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Events from './Components/Events/Events';
import Navbar from './Components/Navbar/Navbar';
import '../node_modules/font-awesome/css/font-awesome.min.css';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/"> <Redirect to="/home" /> </Route>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
