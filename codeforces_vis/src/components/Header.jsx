import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <header>
        <nav class="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <div class="search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
