import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    handleScroll(); // kiểm tra ngay khi mount
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? "black-them" : "white-them"}`}
      >
        <div className="container-fluid d-flex justify-content-between align-item-center">
          <a href="#!" className="logo navbar-brand">
            Frost <span>Quest</span>
          </a>

          <div className="d-flex align-items-center">
            <i className="bi bi-search search-icon me-2"></i>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#tour">Tour</a>
            </li>
            <li className="nav-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
