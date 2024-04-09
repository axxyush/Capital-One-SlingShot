import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width={30} height={24}>
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2024, Capital One
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                style={{
                  textDecoration: "none",
                  color: "grey",
                  fontSize: "15px",
                }}
                href="https://www.fdic.gov/"
              >
                Member <br />
                <b>FDIC</b>
              </a>
            </li>

            <li className="ms-3">
              <img
                style={{ height: "40px" }}
                _ngcontent-web-shell-c4043777986=""
                alt="Equal Housing Opportunity"
                aria-label="Equal Housing Opportunity"
                className="site-footer__equal-housing-icon ng-star-inserted"
                src="https://ecm.capitalone.com/WCM/navigation/assets/equalhousing_desktoptablet_logo.jpg"
              />
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
