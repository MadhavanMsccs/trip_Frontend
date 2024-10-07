import React, { useRef, useEffect, useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import './header.css';
import { AuthContext } from '../context/AuthContext';

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const detailLinks = [
  {
    path: "/profile",
    display: "Profile",
  },
  {
    path: "/bookings",
    display: "My Bookings",
  },
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scroll > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  const toggleDetails = () => setShowDetails(prev => !prev);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            {/* Main Navigation */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* User Info and Details Toggle */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">Hello <span>{user.username}</span></h5>
                    <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                    <Button className="btn" onClick={toggleDetails}>
                      {showDetails ? "Hide Details" : "Show Details"}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>

        {/* Dropdown Navigation */}
        {showDetails && (
          <div className="details-dropdown">
            <ul className="details-menu d-flex flex-column">
              {detailLinks.map((item, index) => (
                <li className="details-nav__item" key={index}>
                  <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
