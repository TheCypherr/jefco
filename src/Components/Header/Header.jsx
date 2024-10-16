import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const handlePageRefresh = () => {
    navigate("/");
    window.location.reload();
  };

  // onClick function to handle menu
  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  };

  // onClick function to close menubar onclick of menu items
  const closeSideBar = () => {
    setIsOpen(false);
  };

  // useEffect to prevent scrolling when menubar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handlePageLoading = (targetPage) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setActiveSubItem(targetPage);
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
      link: "/hinges",
      subItems: [
        { label: "HINGES", link: "/hinges" },
        { label: "CONTINOUS HINGES", link: "/continous-hinges" },
      ],
    },
    {
      name: "GATE HARDWARE",
      link: "/gate-hardware",
    },
    {
      name: "INDUSTRIES SERVED",
      link: "/industries-served",
    },
    {
      name: "CONTACT US",
      link: "/",
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
      {/* Desktop Header */}
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
              <div className="cart" onClick={handlePageRefresh}>
                <FaShoppingCart color="white" size={17} />
                <p>CART</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-items">
        <div className="inner-h">
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
                    <div className="custom-links">
                      <Link
                        className="custom-links"
                        to="#"
                        onClick={() => handlePageLoading(item.link)}
                      >
                        {item.name}
                      </Link>
                      {item.name !== "HOME" &&
                        item.name !== "GATE HARDWARE" &&
                        item.name !== "INDUSTRIES SERVED" &&
                        item.name !== "EMPLOYMENT" && (
                          <FaChevronDown
                            onClick={() => {
                              handleHeaderMenuToggle(item.name);
                            }}
                          />
                        )}
                    </div>

                    {activeMenu === item.name && item.subItems && (
                      <ul className="sub-menu slideIn">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="sub-menu-items">
                            <Link
                              to="#"
                              onClick={() => {
                                handlePageLoading(subItem.link);
                                closeSideBar();
                              }}
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

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className={`fixed-header ${isOpen ? "menu-open" : ""}`}>
          <div className="fixed1">
            <button onClick={toggleMenu}>
              <FaBars />
              <p>Menu</p>
            </button>
          </div>
          <div className="mobile-cart" onClick={handlePageRefresh}>
            <FaShoppingCart color="white" size={15} />
            <p>Cart</p>
          </div>
        </div>
        <div className="semi-header">
          <div className="mobile-header-image">
            <img src="/small.jpg" alt="header" />
          </div>
          <div className="dark-overlay"></div>
          <div className="mobile-overlay">
            <div className="inner-mobile-overlay">
              <div className="mobile-logo-container">
                <Link to="/" onClick={handlePageRefresh}>
                  <img src="./jefco-logo.png" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className={`mobile-menu ${
              isAnimating
                ? isOpen
                  ? "slideDown"
                  : "slideUp"
                : isOpen
                ? "slideUp"
                : ""
            }`}
          >
            <div className="inner-h-new">
              <div className="mobile-search">
                <input type="text" placeholder="Search all products..." />
                <FaSearch color="white" />
              </div>
              <nav>
                <ul className="menu-new">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={`menu-items-mobile ${
                        activeMenu === item.name ? "active" : ""
                      }`}
                    >
                      <div className="custom-links-mobile">
                        <Link
                          className="custom-links-mobile"
                          to="#"
                          onClick={() => {
                            handlePageLoading(item.link);
                            closeSideBar();
                          }}
                        >
                          {item.name}
                        </Link>
                        {item.name !== "HOME" &&
                          item.name !== "GATE HARDWARE" &&
                          item.name !== "INDUSTRIES SERVED" &&
                          item.name !== "EMPLOYMENT" &&
                          (activeMenu === item.name ? (
                            <FaChevronUp
                              className="chevron-icon"
                              onClick={() => handleHeaderMenuToggle(item.name)}
                            />
                          ) : (
                            <FaChevronDown
                              className="chevron-icon"
                              onClick={() => handleHeaderMenuToggle(item.name)}
                            />
                          ))}
                      </div>

                      {activeMenu === item.name && item.subItems && (
                        <ul className="sub-menu-mobile">
                          {item.subItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`sub-menu-mobile-items ${
                                activeMenu || activeSubItem === subItem.label
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <Link
                                to="#"
                                onClick={() => {
                                  handlePageLoading(subItem.link);
                                  closeSideBar();
                                }}
                                className="custom-links-subItem"
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
        )}
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
