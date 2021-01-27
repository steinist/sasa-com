import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShoppingCart,
  faGlobeAmericas,
  faArrowCircleDown,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    console.log("hello");
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <div id="header">
      <div className="top-header">
        $300 to get Free Delivery | $600 to enjoy VIP Privileges
      </div>
      <div className="main-header">
        <div className="main-header-wrapper">
          <div className="main-header-logo">
            <a href="#">
              <img
                className="main-header-logo-img"
                src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1608545327-do9hb4ayy1_d.png"
                alt=""
              />
            </a>
          </div>
          <nav className="main-header-nav">
            <ul className="nav-menu-sub">
              <li className="nav-menu-user nav-sub-li">
                <a href="#">
                  <FontAwesomeIcon icon={faUserCircle} color="#444" />
                </a>
              </li>
              <li className="nav-menu-shopcart nav-sub-li">
                <a href="#">
                  <FontAwesomeIcon icon={faShoppingCart} color="#444" />
                  <span className="shopping-cart-badge">0</span>
                </a>
              </li>
              <li className="nav-menu-lang nav-sub-li">
                <a href="#">
                  <FontAwesomeIcon
                    className="named-icon"
                    icon={faGlobeAmericas}
                    color="rgb(68,68,68)"
                  />
                  <div className="nav-menu-word">English (US)</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    color="rgb(68, 68, 68)"
                  />
                </a>
              </li>
              <li className="nav-menu-curr nav-sub-li">
                <a href="#">
                  <FontAwesomeIcon
                    className="named-icon"
                    icon={faArrowCircleDown}
                    color="#444"
                  />
                  <div className="nav-menu-word">HKD</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    color="rgb(68, 68, 68)"
                  />
                </a>
              </li>
            </ul>

            <div className="nav-menu-main">
              <ul className="nav-menu-ul">
                <li className="nav-menu-li nav-menu-category">
                  <NavDropdown
                    title="Category"
                    className="nav-menu-title"
                    id="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <div className="drop-submenu">
                      <div className="drop-left">
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Skincare
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Makeup
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Fragrance
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Personal Care
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          For Men
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Baby & Mom
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Beauty & Slimming
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Health Care
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Prevention Care
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Household
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Snack Corner
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          EU & US brands
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Japanese / Korean brands
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-left"
                          href="#"
                        >
                          Other brands
                        </NavDropdown.Item>
                      </div>
                      <div className="drop-right">
                        <NavDropdown.Item
                          className="dropdown-item-right"
                          href="#"
                        >
                          Hair Products
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-right"
                          href="#"
                        >
                          Best Picks for Drying days
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-right"
                          href="#"
                        >
                          Best Deals
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item-right"
                          href="#"
                        >
                          New Arrival
                        </NavDropdown.Item>
                      </div>
                    </div>
                  </NavDropdown>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <h4 className="nav-menu-title">Best Deals</h4>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <h4 className="nav-menu-title">Productive Care</h4>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <h4 className="nav-menu-title">Hot Offers</h4>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <h4 className="nav-menu-title">Sasa Outlet</h4>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <h4 className="nav-menu-title">New Arrival</h4>
                  </a>
                </li>
              </ul>

              <span className="nav-search-box">
                <form className="search-form">
                  <div className="search-wrapper">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search"
                    />
                    <a href="#" className="search-btn">
                      <FontAwesomeIcon icon={faSearch} color="#666" />
                    </a>
                  </div>
                </form>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
