import black from './black.jpg'
import './App.css';
import Contact from './fold/Contact.js';
import Nav from './fold/Nav.js';

function App() {
  return (
    <>
      <img src={black} className="backimg" alt="Background image"></img>
      
      {/* <Nav/> */}
      
      <Contact/>      


    </>
            );
}

  export default App;
