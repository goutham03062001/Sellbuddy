import React from "react";
import Messages from '../Pages/Messages';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            ResellBuddy
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Sign up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/login'>
                  Login
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
