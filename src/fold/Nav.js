import React from 'react'
import logo from './logo.jpg';

export default function Nav() {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Nepalese Tourism</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="d-flex justify-content-end">...</div> */}
          <img src={logo} className="logo" alt="Logo"></img>

          <div className="d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tour
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Treking</a></li>
                  <li><a className="dropdown-item" href="#">Jungle Safari</a></li>
                  <li><a className="dropdown-item" href="#">Horse Riding</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Kathmandu</a></li>
                  <li><a className="dropdown-item" href="#">Janakpur</a></li>
                  <li><a className="dropdown-item" href="#">Langtang</a></li>
                  <li><a className="dropdown-item" href="#">Mustang</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>        
    </>
    )
}
