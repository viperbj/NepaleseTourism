import React from 'react'
import "./smapp.css"
import ModalRoot from './Modal/ModalRoot';
import ModalService from './Modal/ModalService';
import TestModal from './Modal/TestModal';

export default function Footer() {
  const addModal = () => {
    ModalService.open(TestModal);
  }
    return (
    <>
        {/* <!-- footer section --> */}
          <footer>
            <div className="footer">
              <div className="row">

                <svg className="svgcolor-light" preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L50 100 L100 0 Z"></path>
                </svg>

                <div className="textleft">
                  <h2>Nepalese Tourism</h2>

                  <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <p>“We, Nepalese Tourism desired to served many customers <br/>downtown Kathmandu Valley as well as all Nepal<br/> You can also be one of them.</p> 
                  </div>
                  <ModalRoot /><button onClick={ addModal } className="btn btn-lg btn-success smoothScroll wow fadeInUp" >NOTIFY ME!</button>                    
                      <ul className="social-icon">
                        <li><a href="https://www.facebook.com/chakrafoundations" target="_blank" className="fab fa-facebook wow bounceIn" data-wow-delay="0.9s"></a></li>
                        <li><a href="https://twitter.com/" target="_blank" className="fab fa-twitter wow bounceIn" data-wow-delay="1.2s"></a></li>
                        <li><a href="https://www.instagram.com/chakrafoundations/" target="_blank" className="fab fa-instagram wow bounceIn" data-wow-delay="1.4s"></a></li>
                        <li><a href="https://chakrafoundations.business.site/" target="_blank" className="fab fa-google wow bounceIn" data-wow-delay="1.6s"></a></li>
                      </ul>
                      <p className="copyright-text">Copyright &copy; 2021 Nepalese Tourism<br/></p>
                </div>
                  <br/>

              </div>
            </div>
          </footer>
    </>
    )
}
