import React from 'react'
import './smapp.css';
import animal from './animal.jpg'
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
           
        <div className="home-space" id="home">
            <a href="#about" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="0.8s">Let's begin</a>
        	<a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="1.0s">Notify me!</a>
        </div>
       
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

