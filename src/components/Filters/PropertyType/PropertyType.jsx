import { v4 as uuid } from "uuid";
import React from "react";
import  { useFilter } from "../../../Context"
import { filterReducer } from "../../../reducer";
const propertyTypes = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyTypes = () => {
  const { propertyType, filterDispatch} = useFilter()
  console.log({propertyType})
  const handlePropertyClick = (property) => {
    filterDispatch({
      type: "PROPERTY_TYPE",
      payload: property
    })
  }
 const isSelected = (type) => {
    return propertyType === type;
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex gap-2 flex-wrap mt-3">
        {propertyTypes.map(({ type, id }) => (
          <span
            className={`btn d-flex align-items-center justify-content-center px-3 py-2 ${
              isSelected(type) ? "btn-danger" : "btn-outline-secondary"
            }`}
            style={{ minWidth: '100px', cursor: 'pointer', fontSize: '0.9rem' }}
            key={id}
            onClick={() => {handlePropertyClick(type)}}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
