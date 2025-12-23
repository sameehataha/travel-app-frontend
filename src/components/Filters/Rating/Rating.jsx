import React from 'react';
import  {useFilter} from "../../../Context"
const ratings = ["1", "2", "3", "4", "5"];

export const Rating = () => {
  const {travelRating,filterDispatch} = useFilter()
  const handleRatingClicks = (rating) => {
       filterDispatch ({
        type: "RATING",
        payload: rating,
       })
}
  return (
    <div className="filter-container">
      <span className="filter-label">Star Rating</span>
      <div className="d-flex align-items-center gap-2 flex-wrap mt-3">
        {ratings.map(rating => (
          <span 
            className="btn btn-outline-secondary d-flex align-items-center justify-content-center px-3 py-2" 
            style={{ cursor: 'pointer', minWidth: '80px' }}
            key={rating}
            onClick={handleRatingClicks}
          >
            {rating}⭐ & UP
          </span>
        ))}
      </div>
    </div>
  );
};