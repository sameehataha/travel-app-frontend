import { useEffect, useState } from "react"
import axios from "axios"
import "./Category.css"
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useCategory } from "../../Context";
export const Categories = () => {
    const [ categories, setCategories ] = useState([])
    const [numberofCategoryToShow, setnumberofCategoryToShow] = useState(0)
    const {  hotelCategory,  sethotelCategory}  = useCategory()
      const ITEMS_PER_PAGE = 10;
      const categories1 = [
    { label: "Tropical", value: "Tropical" },
    { label: "Caves", value: "Caves" },
    { label: "Amazing Views", value: "Amazing Views" },
    { label: "Cabins", value: "Cabins" },
    { label: "A-frames", value: "A-frames" },
  ];
    const handleShowMoreRightClick = () => {
        setnumberofCategoryToShow((prev) => prev +ITEMS_PER_PAGE )
    }
    const handleShowMoreLeftClick = () => {
        setnumberofCategoryToShow((prev) => prev - ITEMS_PER_PAGE)
    }
    useEffect(() => {
        (async () => {
            try{
            const { data } = await axios.get("https://travel-app-backend-jrcu.onrender.com/api/category")
            const categoryToShow = data.slice(numberofCategoryToShow + ITEMS_PER_PAGE > data.length ? data.length - ITEMS_PER_PAGE :numberofCategoryToShow,numberofCategoryToShow > data.length ? data.length : numberofCategoryToShow + ITEMS_PER_PAGE)
            setCategories(categoryToShow)
            // setCategories(data) 
            // console.log(data)
            }catch(err){
             console.log(err)
            }
        })()
    },[numberofCategoryToShow])
    const handleCategoryClick =(category) => {
        sethotelCategory(category)
    }
    console.log({"hotel Category":  hotelCategory})
    return (
       <section className="categories-container py-3 border-bottom">
  <div className="container-fluid">
    <div className="d-flex align-items-center  flex-nowrap overflow-hidden w-700">
      {numberofCategoryToShow >= ITEMS_PER_PAGE && (
        <button
          className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
          onClick={handleShowMoreLeftClick}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div className="d-flex gap-3  flex-nowrap  overflow-hidden">
        {categories?.map(({ _id, category }) => (
          <span
            key={_id}
            className="category-pill px-3 py-2 text-nowrap"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {numberofCategoryToShow - ITEMS_PER_PAGE < categories.length && (
        <button
          className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
          onClick={handleShowMoreRightClick}
        >
          <ChevronRight size={20} />
        </button>
      )}

    </div>
  </div>
</section>

    )
}