export const HotelCard = ({ hotel }) => {
  const { _id, name, image, address, state, rating, price } = hotel;
 

  return (
    <div
      className="card position-relative h-100"
      style={{ width: "18rem", border: "none" }}
    >
      <img
        src={
          image ||
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="card-img-top"
        alt={name}
        style={{ height: "280px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src =
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa";
        }}
      />
      <div
        className="wishlist"
        style={{ position: "absolute", top: "12px", right: "12px" }}
      >
        <button
          className="btn-wishlist border-0 bg-transparent p-0"
          style={{ cursor: "pointer" }}
        >
          <span className="favorite">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill={isFavorite ? "#ff385c" : "rgba(0,0,0,0.5)"}
              stroke="#fff"
              strokeWidth="2"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </button>
      </div>
      <div className="hotel-body p-3" style={{ backgroundColor: "white" }}>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5
            className="location-title mb-0"
            style={{ fontSize: "15px", fontWeight: "600", color: "#222" }}
          >
            {address},{state}
          </h5>
          <span
            className="rating d-flex align-items-center gap-1"
            style={{ fontSize: "14px" }}
          >
            <span style={{ color: "#222" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#222">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
            <span style={{ color: "#222", fontWeight: "500" }}>
              {hotel.rating}
            </span>
          </span>
        </div>
        <p
          className="hotel-name mb-2"
          style={{ fontSize: "18px", color: "black", fontWeight: "400" }}
        >
          {name}
        </p>
        <p
          className="price-details mb-0 d-flex align-items-baseline gap-1"
          style={{ fontSize: "15px" }}
        >
          <span className="price" style={{ fontWeight: "600", color: "#222" }}>
            {price}
          </span>
          <span style={{ color: "#424141ff", fontWeight: "400" }}>night</span>
        </p>
      </div>
    </div>
  );
};
