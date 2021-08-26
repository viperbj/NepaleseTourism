import React from 'react'
import './smapp.css';
export default function nav() {
    return (
        <>
       <div className="logobar">
            <a href="/"className="mainlogo">NEPAL TOURISM</a>
            </div>
            <div className="navbar">
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#destination">Destination</a></li>
                <li><a href="#tour">Tours</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
        
          </div>
           
       <div className="home-space" id="home"></div>
       
       <div className="about-space"id="about">
       <div className="text-part">
               <h1>About page</h1>
              
           </div>
       </div>
       <div className="destination-space"id="destination">
       <div className="text-part">
               <h1>destination page</h1>
               
           </div>
       </div>
       <div className="tour-space"id="tour">
           
       <div className="text-part">
               <h1>Tour page</h1>
              
           </div>
       </div>
       <div className="contact-space"id="contact">
       <div className="text-part">
               <h1>contact page</h1>
              
           </div>
       </div>
    
    
       
    </>
    )
}

