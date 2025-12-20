import React from "react";
import { Menu, Search, SquareUser } from "lucide-react";
import "./Navbar.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand"
        style={{ backgroundColor: "#ffffff"}}
      >
        <div className="container-fluid">
          <h1
            className="navbar-brand"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Booking.com
          </h1>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex mx-auto search-container align-items-center shadow-sm">
              <button
                type="button"
                className="search-section border-0 bg-transparent"
              >
                Anywhere
              </button>
              <div className="v-line"></div>
              <button
                type="button"
                className="search-section border-0 bg-transparent"
              >
                Any week
              </button>
              <div className="v-line"></div>
              <button
                type="button"
                className="search-section border-0 bg-transparent"
              >
                Add guests
              </button>
               <button className="search-icon-btn">
                <Search size={16} strokeWidth={3} />
              </button>
              </div>
            <div className="d-flex  m-2 p-2 icon icon-hover">
              <Menu />
            </div>
            <div className="d-flex m-2  p-2 icon icon-hover">
              <SquareUser />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
