import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="nav-div" className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/nav/dash" className="navbar-brand" href="#">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/nav/users"
              >
                Users
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
