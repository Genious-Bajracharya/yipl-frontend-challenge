import "../assets/styles/Navbar.css";
import { useState } from "react";
import { UilSearch, UilAngleDown } from "@iconscout/react-unicons";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    console.log(dropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navigations">
        <div className="navs">
          <img
            src={require("../assets/images/Companylogo.png")}
            alt="company logo"
          />
        </div>
        <div className="navs">Home</div>
        <div className="navs">About Us</div>
        <div className="navs">Case Studies</div>
        <div className="navs resources" onClick={toggleDropdown}>
          Resources <UilAngleDown />
          {dropdownOpen && (
            <div className="dropdown">
              <div className="dropdown-item">
                <h2>Blog</h2>
                <p>The latest industry news, updates and info.</p>
              </div>
              <div className="dropdown-item">
                <h2>Customer stories</h2>
                <p>Learn how our customers are making big changes.</p>
              </div>
              <div className="dropdown-item">
                <h2>Video tutorials</h2>
                <p>Get up and running on new features and techniques.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="nav-search">
        <UilSearch />
      </div>
    </div>
  );
}
