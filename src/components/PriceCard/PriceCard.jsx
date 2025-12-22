import { useDate } from "../../Context";
import { DateSelector } from "../DateSelector/DateSelector";
export const PriceCard = ({ singleHotel }) => {
  const { price, rating } = singleHotel;
  const { guests, dateDispatch } = useDate();
  const hangleGuestsChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };
  return (
    <div className="col-lg-5">
      <div
        className="card shadow-sm sticky-top"
        style={{
          top: "100px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        {/* Price and Rating */}
        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
          <div>
            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              ₹{price || 2999}
            </span>
            <span style={{ fontSize: "1rem", color: "#666" }}> night</span>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#222"
              style={{ marginRight: "4px" }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span style={{ fontSize: "0.95rem", fontWeight: "500" }}>
              {rating || 3.7}
            </span>
          </div>
        </div>

        {/* Check-in/Check-out */}
        <div className="row mb-3">
          <div className="col-6">
            <label
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#666",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Check in
            </label>
            <DateSelector checkInType="in" />
            {/* <input
                  type="text"
                  className="form-control"
                  style={{ fontSize: "0.9rem", padding: "8px 12px" }}
                /> */}
          </div>
          <div className="col-6">
            <label
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#666",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Check out
            </label>
            <DateSelector checkInType="out" />
            {/* <input
                  type="text"
                  className="form-control"
                  style={{ fontSize: "0.9rem", padding: "8px 12px" }}
                /> */}
          </div>
        </div>

        {/* Guests */}
        <div className="mb-3 pb-3 border-bottom">
          <label
            style={{
              fontSize: "0.75rem",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#666",
              display: "block",
              marginBottom: "4px",
            }}
          >
            Guests
          </label>

          {guests <= 0 ? (
            <input
              type="number"
              className="form-control"
              placeholder="Add Guests"
              value={guests}
              onChange={hangleGuestsChange}
              min="1"
              style={{ fontSize: "0.9rem", padding: "8px 12px" }}
            />
          ) : (
            <div
              style={{
                fontSize: "0.9rem",
                padding: "8px 12px",
                fontWeight: "500",
                border: "1px solid #ddd",
                borderRadius: "6px",
              }}
            >
              {guests} {guests === 1 ? "Guest" : "Guests"}
            </div>
          )}
        </div>

        {/* Reserve Button */}
        <button
          className="btn w-100 mb-3"
          style={{
            backgroundColor: "#FF5A5F",
            color: "white",
            fontSize: "1rem",
            fontWeight: "600",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Reserve
        </button>

        {/* Price Breakdown */}
        <div className="pt-3 border-top">
          <div className="d-flex justify-content-between mb-2">
            <span style={{ fontSize: "0.95rem", textDecoration: "underline" }}>
              Rs. {price || 2999} x 0 nights
            </span>
            <span style={{ fontSize: "0.95rem" }}>Rs. 0</span>
          </div>
          <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
            <span style={{ fontSize: "0.95rem" }}>Service fee</span>
            <span style={{ fontSize: "0.95rem" }}>Rs. 150</span>
          </div>
          <div className="d-flex justify-content-between">
            <span style={{ fontSize: "1rem", fontWeight: "600" }}>Total</span>
            <span style={{ fontSize: "1rem", fontWeight: "600" }}>Rs. 150</span>
          </div>
        </div>
      </div>
    </div>
  );
};
