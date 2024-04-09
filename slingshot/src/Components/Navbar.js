import React from "react";
import capitalOne from "./../Images/capitalOne.png";
import { Link } from "react-router-dom";

function Navbar() {
  const hello = () => {
    alert("Hello Judges! Hope you are having a nice day :)");
  };
  const contact = () => {
    alert("Thank you for contacting us! We'll be in touch shortly");
  };
  const incoming = () => {
    alert("Feature incoming. Sorry for the inconvenience :(");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <img
            style={{ height: "60px" }}
            src={capitalOne}
            alt="capital_one_logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ marginTop: "12px" }}
                  className="nav-link text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  style={{ marginTop: "12px" }}
                  className="nav-link text-white"
                  to="/about"
                >
                  Pricing{" "}
                </Link>
              </li>
              <li className="nav-item text-white">
                <a
                  onClick={incoming}
                  className="nav-link text-light"
                  aria-disabled="true"
                  style={{ marginTop: "12px" }}
                  href="/"
                >
                  AI Tracking
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ marginTop: "12px" }}
                >
                  See More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a onClick={incoming} className="dropdown-item" href="/">
                      Our Features
                    </a>
                  </li>
                  <li>
                    <a onClick={incoming} className="dropdown-item" href="/">
                      Non-Profit
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={contact} className="dropdown-item" href="/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <button onClick={hello} className="btn-shine">
              <span>Hello</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
