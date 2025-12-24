import React from "react";
import { Menu, Search, SquareUser } from "lucide-react";
import "./Navbar.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useDate,useAuth } from "../../Context";
export const Navbar = () => {
  const {destination,checkin,checkout, guests, dateDispatch} = useDate()
  const  {authDispatch} = useAuth()
  const handleSearchClick =() => {
      dateDispatch({
        type: "OPEN_SEARCH_MODAL",
      })
  }
  const handleAuthClick = () => {
    authDispatch({
      type: "SHOW_AUTHMODAL"
    })
  }
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
            className="navbar-toggler custom-toggler1"
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
            <div className="d-flex mx-auto search-container1 align-items-center shadow-sm" onClick={handleSearchClick}>
              <button  type="button" className="search-section1 border-0 bg-transparent">
                {destination || "Any Where"}
              </button>
              <div className="v-line"></div>
              <button
                type="button"
                className="search-section1 border-0 bg-transparent"
              >
               {checkin && checkout ? `${checkin.toLocaleDateString("en-Us", {
                day: "numeric",
                month: "short",
               })} - ${checkout.toLocaleDateString("en-Us", {
                day: "numeric",
                month: "short",
               })}`: "Any Week"}
              </button>
              <div className="v-line"></div>
              <button
                type="button"
                className="search-section1 border-0 bg-transparent"
              >
                { guests > 0 ? `${guests} guests`:"Add Guests"}
              </button>
               <span className="search-icon-btn1">
                <Search size={16} strokeWidth={3} />
              </span>
              </div>
            <div className="d-flex m-2  p-2 icon1 icon-hover1" onClick={handleAuthClick}>
              <SquareUser />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
