import React from 'react';
import { useFilter } from '../../../Context';
export const FreeCancel = () => {
  const {filterDispatch, isCancelable } = useFilter()
  console.log(isCancelable)
  const handleCancelChange = (event) => {
    filterDispatch({
          type: "CANCELABLE",
          payload:event.target.checked,
    })
  }
  return (
    <div className="filter-container">
      <div className="d-flex align-items-center justify-content-between">
        <span className="filter-label">Free Cancelation</span>
        <div className="form-check form-switch">
          <input 
            onChange={handleCancelChange}
            value={isCancelable}
            checked={isCancelable}
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="freeCancelSwitch"
            style={{ width: '52px', height: '28px', cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};