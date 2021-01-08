import React from "react";
import logo from "../../src/favicon.ico";

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="menu">
        <div className="navbar-header">
          <a className="navbar-brand" href="#page-top">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top page-scroll"
              href="#page-top"
              alt=""
            />
            YO MEDICAL FILES
          </a>
        </div>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#features" className="nav-link page-scroll">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link page-scroll">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link page-scroll">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link page-scroll">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link page-scroll">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
