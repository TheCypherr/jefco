import React, { useState } from "react";
import "./Header.css";
import { FaChevronDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handlePageRefresh = () => {
    navigate("/");
    window.location.reload();
  };

  // onClick function to handle dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // onClick function to close menubar onclick of menu items
  const closeSideBar = () => {
    setIsOpen(false);
  };

  const handlePageLoading = (targetPage) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(targetPage);
    }, 1500);
  };

  const handleHeaderMenuToggle = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  // Handles closing the submenu when mouse leaves the wrapper
  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const menuItems = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "STOCK HINGES",
      subItems: [
        { label: "HINGES", link: "/hinges" },
        { label: "CONTINOUS HINGES", link: "/continous-hinges" },
      ],
    },
    {
      name: "GATE HARDWARE",
      link: "/gate-hardware",
    },
    // {
    //   name: "CUSTOM",
    //   subItems: [
    //     { label: "DESIGN SPECIFICATIONS", link: "/design" },
    //     { label: "MANUFACTURING PROCESSES", link: "/manufacture" },
    //     { label: "FINISHES", link: "/finishes" },
    //     { label: "PROCESSES AND EQUIPMENTS", link: "/process" },
    //     { label: "CUSTOM HINGE ORDERING", link: "/order" },
    //   ],
    // },
    {
      name: "INDUSTRIES SERVED",
      link: "/industries-served",
    },
    {
      name: "CONTACT US",
      subItems: [
        { label: "POLICIES", link: "/policies" },
        { label: "ABOUT US", link: "/about" },
      ],
    },
    {
      name: "EMPLOYMENT",
      link: "/employment",
    },
  ];

  return (
    <section className="header-wrapper">
      <div className="inner-header">
        <div className="header-image">
          <img src="/small.jpg" alt="header" />
        </div>
        <div class="dark-overlay"></div>

        <div className="overlay-container">
          <div className="inner-overlay">
            <div className="logo-container">
              <Link to="/" onClick={handlePageRefresh}>
                <img src="./jefco-logo.png" alt="logo" />
              </Link>
            </div>

            <div className="side2">
              <div className="search">
                <input type="text" placeholder="Search all products..." />
                <FaSearch color="white" />
              </div>
              <div className="cart">
                <FaShoppingCart color="white" size={17} />
                <p>CART</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header items">
        <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
          <div className="inner-h-old">
            <nav>
              <ul className="menu">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="menu-items-wrapper"
                    onMouseEnter={() => handleHeaderMenuToggle(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      className="custom-links"
                      to="#"
                      onClick={() => handlePageLoading(item.link)}
                    >
                      {item.name}
                      {item.name !== "HOME" &&
                        item.name !== "GATE HARDWARE" &&
                        item.name !== "INDUSTRIES SERVED" &&
                        item.name !== "EMPLOYMENT" && <FaChevronDown />}
                    </Link>

                    {activeMenu === item.name && item.subItems && (
                      <ul className="sub-menu slideIn">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="sub-menu-items">
                            <Link
                              to="#"
                              onClick={() => handlePageLoading(subItem.link)}
                              className="custom-links"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default Header;
