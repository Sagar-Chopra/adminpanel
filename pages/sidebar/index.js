import React from "react";
import Link from "next/link";

const Sidebar = (props) => {
    // id={`${props.static ? "" : "layoutSidenav_nav"}`}
  return (
    <div id={`${props.static ? "layoutSidenav_nav" : "layoutSidenav_nav"}`}>
      <nav
        className={`sb-sidenav accordion ${
          props.light ? "sb-sidenav-light" : "sb-sidenav-dark"
        }`}
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" href="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Layouts
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" href="/staticnavigation">
                  Static Navigation
                </Link>
                <Link className="nav-link" href="/lightsidenav">
                  Light Sidenav
                </Link>
              </nav>
            </div>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Pages
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" href="/login">
                      Login
                    </Link>
                    <Link className="nav-link" href="/register">
                      Register
                    </Link>
                    <Link className="nav-link" href="/forgotpassword">
                      Forgot Password
                    </Link>
                  </nav>
                </div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseError"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" href="/401">
                      401 Page
                    </Link>
                    <Link className="nav-link" href="/404">
                      404 Page
                    </Link>
                    <Link className="nav-link" href="/500">
                      500 Page
                    </Link>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" href="/charts">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Charts
            </Link>
            <Link className="nav-link" href="/tables">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Tables
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
