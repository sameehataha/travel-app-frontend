import "./BedsAndRooms.css"
import { useFilter } from "../../../Context";
const rooms = ["Any", "1", "2", "3", "4", "5+"];

export const RoomsAndBeds = () => {
  const  { filterDispatch, noOfBathrooms,noOfBedrooms, noOfBeds } = useFilter()
  console.log({noOfBathrooms,noOfBedrooms, noOfBeds})
  const handleBedroomClick = (number) => {
      filterDispatch({
        type: "BEDROOMS",
        payload: number,
      })
    }
    const handleBathroomsClick = (number) => {
       filterDispatch({
        type: "BATHROOMS",
        payload: number,
      })
    }
    const handleBedClick = (number) => {
       filterDispatch({
        type: "BEDS",
        payload: number,
      })
    }
    const isSelected = (buttonValue,stateValue) => {
    if (buttonValue === "Any") return stateValue === "Any";
    if (buttonValue === "5+") return stateValue === 5;
     return Number(buttonValue) === stateValue;
  }
  return (
    <div className="filter-container">
      <span className="filter-label">Rooms And Beds</span>
      <div className="d-flex gap-4 mt-3">
        <div className="d-flex flex-column gap-3">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex gap-1">
            {rooms.map((number) => (
              <span key={`bedroom-${number}`} onClick={() => handleBedroomClick(number)} className= {`btn btn-sm room-number ${
                  isSelected(number, noOfBedrooms) 
                    ? "btn-danger" 
                    : "btn-outline-secondary"
                }`}>
                {number}
              </span>
            ))}
          </div>
          <div className="d-flex gap-1">
            {rooms.map((number) => (
              <span key={`bed-${number}`}onClick={() => handleBedClick(number)} className={`btn btn-sm room-number ${
                  isSelected(number, noOfBeds) 
                    ? "btn-danger" 
                    : "btn-outline-secondary"
                }`}>
                {number}
              </span>
            ))}
          </div>
          <div className="d-flex gap-1">
            {rooms.map((number) => (
              <span key={`bathroom-${number}`} onClick={() => handleBathroomsClick(number)}   className={`btn btn-sm room-number ${
                  isSelected(number, noOfBathrooms) 
                    ? "btn-danger" 
                    : "btn-outline-secondary"
                }`}>
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};