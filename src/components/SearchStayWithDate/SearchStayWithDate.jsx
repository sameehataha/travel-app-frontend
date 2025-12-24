import { TypeOutline } from "lucide-react";
import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useDate, useCategory } from "../../Context";
import { useState, useEffect } from "react";
import axios from "axios";
import { dateReducer } from "../../reducer";
import { address } from "framer-motion/client";
import { Navigate, useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../config/api"
export const SearchStayWithDate = () => {
  const { destination, guests, isSearchResultOpen, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
           API_ENDPOINTS.getHotelsByCategory(hotelCategory)
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };
  const handleSearcgResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };
  const handleDestinationFocus = () => {
    dateDispatch({
      type: "SHOW_SEARCH_RESULT",
    });
  }
  const destinationOptions = hotels.filter(
    ({ address = "", city = "", state = "", country = "" }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );
  const handleSearchButtonClick = () => {
    dateDispatch ({
        type: "CLOSE_SEARCH_MODAL"
    })
    navigate(`/hotels/${destination}`)
  }
  return (
    <div className="destination-container">
      <div className="destination-options">
        <div className="location-container">
          <label htmlFor="destination">Where</label>
          <input
            value={destination}
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            id="destination"
            className="search-dest"
            placeholder="Search Destination"
            autoFocus
          />
        </div>

        <div className="location-container">
          <label>Check in</label>
          <DateSelector checkInType="in" />
        </div>

        <div className="location-container">
          <label>Check out</label>
          <DateSelector checkInType="out" />
        </div>

        <div className="location-container">
          <label>No of Guests</label>
          <input
            value={guests}
            className="search-dest"
            placeholder="Add Guests"
            onChange={handleGuestChange}
          />
        </div>

        <div className="search-container cursor" onClick={handleSearchButtonClick}>
          <span>Search</span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-result-container">
          {destinationOptions.map(({ _id, address, city }) => (
            <p
              onClick={() => {
                handleSearcgResultClick(address);
              }}
              key={_id}
            >
              {address}, {city}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
