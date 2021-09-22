
import './smapp.css';
import animal from './animal.jpg'
import img1 from './img1.jpg';
import React, { useState } from 'react';
import ModalRoot from './Modal/ModalRoot';
import ModalService from './Modal/ModalService';
import TestModal from './Modal/TestModal';



    
export default function Nav() {
    
    const addModal = () => {
        ModalService.open(TestModal);
    }
    
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
           
        <div className="home-space" id="home">
            <ModalRoot /><button onClick={ addModal } className="btn btn-lg btn-success smoothScroll wow fadeInUp" >NOTIFY ME!</button>
            <a href="#about" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="0.8s">Let's begin</a>
        </div>
       
       <div className="about-space"id="about">
       <div className="text-part">
               <h1>About page</h1>
              
           </div>
       </div>
       <div className="destination-space"id="destination">
       <h1>destination</h1>
           <h2>...</h2>
       <div className="destinationgallery">
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>
       <img src={img1} ></img>


        
           </div>
       </div>
       <div className="tour-space"id="tour">
           
       <h1>tour</h1>
           <h2>...</h2>
          
           
          
           
           <div className="tourimage">
           <img src={img1} ></img>
           
<div className="tourtext">
          
           <h5>Pokhera</h5>
           <p>hello hello hello </p>
           <h6>Price:$4500</h6>
          
           
        
           <button type="button">explore</button>
           
           
            </div>  
           </div>
           <div className="tourimage">
           <img src={img1} ></img>
           <div className="tourtext">
          
           <h5>Pokhera</h5>
           <p>hello hello hello </p>
           
          <h6>Price:$4500</h6>
          
           <button type="button">explore</button>
           
           
           </div>   
           </div>
          
           <div className="tourimage">
           <img src={img1} ></img>
           <div className="tourtext">
          
           <h5>Pokhera</h5>
           <p>hello hello hello hello</p>
          
           
          
           <button type="button">explore</button>
           
           
            </div>  
           </div>
           <div className="tourimage">
           <img src={img1} ></img>
           <div className="tourtext">
          
           <h5>Pokhera</h5>
           <p>hello hello hello hello</p>
          
           
          
           <button type="button">explore</button>
           
           
           </div>   
           </div>

           </div>
      
       <div className="contact-space"id="contact">
       <div className="text-part">
       <>
            <div className="cont-back">
            
            <img src={animal} className="img-rounded" alt="Animal Photo" width="40%" height="326"></img>
                        

            <div className="contactForm">
                <form>
                    <div>
                        <h1 className="section-title">COMMENT <span>US</span></h1>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="name" required />
                        <span>Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" required />
                        <span>Email</span>
                    </div>
                    <br/>
                    <div className="inputBo">
                                      
                        <textarea name="comment" cols="64" rows="5" placeholder="Comment Here"/>
                        
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value="Comment" />
                        <button type="reset" value="Clear" >Clear</button>
                    </div>
                </form>
            </div>

            <section id="contact">
                <div className="contact container">
                    
                    <div className="contact-items">
                    <div className="contact-item">
                            <i className="icon fas fa-map-marker-alt fa-3x"></i>
                            <div className="contact-info">
                                <h2>ADDRESS</h2>
                                <a href="https://goo.gl/maps/GwjSCuE7KhzcZXK26" className="location"><h3>Baneshwar, Kathmandu, Nepal</h3></a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <i className="icon fas fa-phone-volume fa-3x"></i>
                            <div className="contact-info">
                                <h2>PHONE</h2>
                                <h3>+977 9880 085 851</h3>
                            </div>
                        </div>

                        <div className="contact-item">
                            <i className="icon fas fa-envelope-open-text fa-3x"></i>
                            <div className="contact-info">
                                <h2>EMAIL</h2>
                                <h3>nplztourism@gmail.com</h3>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                </div>
            </section>
            <br/><br/><br/>

            </div>
        </>      
        </div>
       </div>  
       
    </>
    )
}

