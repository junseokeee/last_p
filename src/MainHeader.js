import { Link } from "react-router-dom";
import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <aside className="aside">
      <Link to="/Today" className="nav__logo">
        <div>Song Scope</div>
      </Link>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <Link to="/Today" className="nav_link">
                <i className="icon-screen-desktop"></i>
              </Link>
            </li>
            <li className="nav_item">
              <Link to="Search" className="nav_link">
                <i className="icon-magnifier"></i>
              </Link>
            </li>

            <li className="nav_item">
              <Link to="Board" className="nav_link">
                <i className="icon-note"></i>
              </Link>
            </li>

            <li className="nav_item">
              <Link to="Recom" className="nav_link">
                <i className="icon-magic-wand"></i>
              </Link>
            </li>

            <li className="nav_item">
              <Link to="MyPage" className="nav_link">
                <i className="icon-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 이준석</span>
      </div>
    </aside>
  );
};

export default MainHeader;
