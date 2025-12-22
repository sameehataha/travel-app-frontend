import "./HotelImages.css";

export const HotelImages = ({ singleHotel }) => {
  const { image, imageArr } = singleHotel;

  return (
    <div className="hotel-image-container">
      <div className="primary-image-container">
        <img 
          className="primary-img" 
          src={image} 
          alt="primary-hotel"
        />
      </div>
      <div className="secondary-images">
        {imageArr?.slice(0, 4).map((image, index) => (
          <img
            key={index}
            className="secondary-img"
            src={image ||  "https://www.intechnic.com/blog/best-hotel-website-designs/"}
            alt="no image"
            onError={(e) => {
                 e.target.onerror = null; 
               e.target.src = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa";
            }}
          />
        ))}
      </div>
    </div>
  );
};
