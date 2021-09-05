
import nepalimg2 from './nepalimg2.jpg';
import './App.css';
import Nav from './smapp/Nav.js';
import Footer from'./smapp/Footer.js';

function App() {
  return (

 <>
 
      <img src={nepalimg2} className="back" alt="Background image"></img>
    
      <Nav />

      <Footer />

</>


  );
}

export default App;
