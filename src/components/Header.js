import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShoppingCart,
  faGlobeAmericas,
  faArrowCircleDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
                <li className="nav-menu-li">
                  <h4 className="nav-menu-title nav-menu-word">Category</h4>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    color="rgb(68, 68, 68)"
                  />
                </li>
                <li className="nav-menu-li">
                  <h4 className="nav-menu-title">Best Deals</h4>
                </li>
                <li className="nav-menu-li">
                  <h4 className="nav-menu-title">Productive Care</h4>
                </li>
                <li className="nav-menu-li">
                  <h4 className="nav-menu-title">Hot Offers</h4>
                </li>
                <li className="nav-menu-li">
                  <h4 className="nav-menu-title">Sasa Outlet</h4>
                </li>
                <li className="nav-menu-li">
                  <h4 className="nav-menu-title">New Arrival</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
