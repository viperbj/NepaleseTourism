import React from 'react'
import './cont.css'

export default function Contact() {
    return (
        <>
            <div className="fields">
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                
                
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                </div>
            
                < a className="actions">
                <li><input type="submit" value="Send Message" /></li>
                <li><input type="reset" value="Clear" /></li>
                </a>
            </div>



        
            <br></br>
            <section id="contact">
                <div className="contact container">
                    <div>
                        <h1 className="section-title">CONTACT <span>INFO</span></h1>
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                            <div className="contact-info">
                                <h1>Phone</h1>
                                <h2>+977 9880 858 851</h2>
                                <h2>+977 9880 858 851</h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                            <div className="contact-info">
                                <h1>Email</h1>
                                <h2>nplztourism@gmail.com</h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                            <div className="contact-info">
                                <h1>Address</h1>
                                <h2>Baneshwar, Kathmandu, Nepal</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
