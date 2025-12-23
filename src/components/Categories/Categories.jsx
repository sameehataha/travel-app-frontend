import { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Funnel } from "lucide-react";
import { useCategory,useFilter } from "../../Context";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [totalCategories, setTotalCategories] = useState(0); // Store total count
  const [numberofCategoryToShow, setnumberofCategoryToShow] = useState(0);
  const { hotelCategory, sethotelCategory } = useCategory();
  const {filterDispatch} = useFilter()
  const ITEMS_PER_PAGE = 10;
  
  const handleShowMoreRightClick = () => {
    setnumberofCategoryToShow((prev) => prev + ITEMS_PER_PAGE);
  };
  
  const handleShowMoreLeftClick = () => {
    setnumberofCategoryToShow((prev) => prev - ITEMS_PER_PAGE);
  };
   const filterClick = () => {
     filterDispatch({
      type: "SHOW_FILTER_MODAL"
     })
  }
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travel-app-backend-jrcu.onrender.com/api/category"
        );
        setTotalCategories(data.length); // Store total length
        const categoryToShow = data.slice(
          numberofCategoryToShow + ITEMS_PER_PAGE > data.length
            ? data.length - ITEMS_PER_PAGE
            : numberofCategoryToShow,
          numberofCategoryToShow > data.length
            ? data.length
            : numberofCategoryToShow + ITEMS_PER_PAGE
        );
        setCategories(categoryToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberofCategoryToShow]);
  
  const handleCategoryClick = (category) => {
    sethotelCategory(category);
  };
  
  console.log({ "hotel Category": hotelCategory });
 
  return (
    <section className="categories-container py-3 border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-nowrap overflow-hidden">
          {/* Left Chevron */}
          {numberofCategoryToShow >= ITEMS_PER_PAGE && (
            <button
              className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
              onClick={handleShowMoreLeftClick}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Categories */}
          <div className="d-flex gap-3 flex-nowrap overflow-hidden flex-grow-1">
            {categories?.map(({ _id, category }) => (
              <span
                key={_id}
                className={`category-pill px-3 py-2 text-nowrap ${
                  hotelCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Right Chevron */}
          {numberofCategoryToShow + ITEMS_PER_PAGE < totalCategories && (
            <button
              className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center ms-3"
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
              onClick={handleShowMoreRightClick}
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Filter Button */}
          <button
          onClick={filterClick}
            className="btn btn-outline-dark d-flex align-items-center gap-2 ms-3"
            style={{
              padding: "8px 20px",
              borderRadius: "25px",
              fontWeight: "500",
              flexShrink: 0,
              whiteSpace: "nowrap"
            }}
          >
            <Funnel size={18} />
            Filter
          </button>
        </div>
      </div>
    </section>
  );
};