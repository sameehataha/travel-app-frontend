import { Briefcase, MapPin, Calendar, Wifi, UtensilsCrossed, PawPrint, ShieldCheck, Clock } from "lucide-react";
import { PriceCard } from "../PriceCard/PriceCard";

export const HotelDetails = ({ singleHotel }) => {
  const {
    numberOfBathrooms,
    numberOfBeds,
    numberOfBedrooms,
    numberOfguest,
    hostName,
    hostJoinedOn,
    ameneties,
    healthAndSafety,
    houseRules,
    isCancelable,
  } = singleHotel;

  // Icon mapping for amenities
  const getAmenityIcon = (amenity) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi')) return '📶';
    if (amenityLower.includes('kitchen')) return '🍳';
    if (amenityLower.includes('parking')) return '🚗';
    if (amenityLower.includes('washing')) return '🧺';
    if (amenityLower.includes('workspace')) return '💼';
    if (amenityLower.includes('patio')) return '🏡';
    if (amenityLower.includes('pet')) return '🐾';
    if (amenityLower.includes('pool')) return '🏊';
    if (amenityLower.includes('tv')) return '📺';
    if (amenityLower.includes('air conditioning') || amenityLower.includes('ac')) return '❄️';
    return '✓';
  };

  return (
    <div className="container" style={{ maxWidth: "900px", margin: "30px auto" }}>
      <div className="row">
        {/* Left Section - Hotel Details */}
        <div className="col-lg-7">
          {/* Host Info */}
          <div className="pb-4 border-bottom">
            <h5 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "8px" }}>
              Hosted by {hostName || "Daleep"}
            </h5>
            <span style={{ fontSize: "1rem", color: "#666" }}>
              {numberOfguest || 6} guests • {numberOfBedrooms || 1} bedroom • {numberOfBeds || 2} bed • {numberOfBathrooms || 2} bathroom
            </span>
            {hostJoinedOn && (
              <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "4px", marginBottom: "0" }}>
                Joined {hostJoinedOn}
              </p>
            )}
          </div>

          {/* Key Features */}
          <div className="py-4 border-bottom">
            <div className="d-flex align-items-start mb-4">
              <div style={{ marginRight: "16px", marginTop: "4px" }}>
                <Briefcase size={24} />
              </div>
              <div>
                <h6 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "4px" }}>
                  Dedicated Workspace
                </h6>
                <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "0" }}>
                  A common area with wifi that is well suited for working
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div style={{ marginRight: "16px", marginTop: "4px" }}>
                <MapPin size={24} />
              </div>
              <div>
                <h6 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "4px" }}>
                  Great Location
                </h6>
                <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "0" }}>
                  80% of recent guests gave the location a 5-star rating
                </p>
              </div>
            </div>

            {isCancelable && (
              <div className="d-flex align-items-start">
                <div style={{ marginRight: "16px", marginTop: "4px" }}>
                  <Calendar size={24} />
                </div>
                <div>
                  <h6 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "4px" }}>
                    Free cancellation before 7 days of booking
                  </h6>
                </div>
              </div>
            )}
          </div>

          {/* What this place offers - Amenities */}
          {ameneties && ameneties.length > 0 && (
            <div className="py-4 border-bottom">
              <h5 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "20px" }}>
                What this place offers
              </h5>
              <div className="row">
                {ameneties.map((amenity, index) => (
                  <div key={index} className="col-6 mb-3">
                    <span style={{ fontSize: "0.95rem" }}>
                      {getAmenityIcon(amenity)} {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Health & Safety */}
          {healthAndSafety && healthAndSafety.length > 0 && (
            <div className="py-4 border-bottom">
              <h5 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "20px" }}>
                Health & Safety
              </h5>
              <div>
                {healthAndSafety.map((item, index) => (
                  <div key={index} className="d-flex align-items-start mb-3">
                    <div style={{ marginRight: "12px", marginTop: "2px" }}>
                      <ShieldCheck size={20} strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* House Rules */}
          {houseRules && houseRules.length > 0 && (
            <div className="py-4 border-bottom">
              <h5 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "20px" }}>
                House Rules
              </h5>
              <div>
                {houseRules.map((rule, index) => (
                  <div key={index} className="d-flex align-items-start mb-3">
                    <div style={{ marginRight: "12px", marginTop: "2px" }}>
                      <Clock size={20} strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: "0.95rem" }}>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Price Card */}
       <PriceCard singleHotel={singleHotel}/>
      </div>
    </div>
  );
};