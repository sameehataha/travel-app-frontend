import "./Filter.css";
import {
  PriceRange,
  PropertyTypes,
  RoomsAndBeds,
  Rating,
  FreeCancel,
} from "./index";
import { useFilter } from "../../Context/filter-context";
export const Filter = () => {
  const {filterDispatch, priceRange, 
    noOfBathrooms, 
    noOfBedrooms, 
    noOfBeds,
    propertyType } = useFilter()
  const handleFilterModalCloseClick = () => {
     filterDispatch({
      type: "SHOW_FILTER_MODAL"
     })
  }
  const handleClear = () => {
    filterDispatch({
      type: "CLEAR_ALL"
    })
  }
   const initialState = {
    priceRange: [100, 20000],
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: ""
  };

  // Check if any filter has been modified
  const hasActiveFilters = 
    priceRange[0] !== initialState.priceRange[0] ||
    priceRange[1] !== initialState.priceRange[1] ||
    noOfBathrooms !== initialState.noOfBathrooms ||
    noOfBedrooms !== initialState.noOfBedrooms ||
    noOfBeds !== initialState.noOfBeds ||
    (propertyType && propertyType !== initialState.propertyType);
  return (
    <div className="filter-overlay">
      <div className="filter-card">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h6 className="m-0 fw-semibold">Filter</h6>
          <button className="button btn btn-sm btn-outline-secondary" onClick={handleFilterModalCloseClick}>
            Close
          </button>
        </div>

        {/* Filter content */}
        <div>{/* Price Range / Other filters here */}</div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyTypes />
        <Rating />
        <FreeCancel />
        <div className="d-flex justify-content-between align-items-center gap-3 mt-4 pt-3 border-top">
          <button className="btn btn-outline-secondary flex-grow-1" onClick={handleClear}>
            Clear All
          </button>
          <button className={`btn flex-grow-1 ${hasActiveFilters ? "btn-danger" : "btn-dark"}`}
            onClick={handleFilterModalCloseClick}>Apply</button>
        </div>
      </div>
    </div>
  );
};
