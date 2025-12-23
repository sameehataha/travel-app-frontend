
import { createContext, useContext,useReducer } from "react";
import { filterReducer } from "../reducer";
import { isCancel } from "axios";
const initialValue = {
    isFilterModalOpen: false,
    priceRange:[100, 20000],
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: "Any",
    travelRating: 1,
    isCancelable: true,
}
const FilterContext = createContext(initialValue)
const FilteredProvider = ({children}) => {
    const [ {isFilterModalOpen, priceRange,noOfBathrooms,noOfBedrooms, noOfBeds,propertyType,travelRating,isCancelable}, filterDispatch] = useReducer(filterReducer,initialValue)
    return (
        <FilterContext.Provider value={{isFilterModalOpen, priceRange,noOfBathrooms,noOfBedrooms, noOfBeds, filterDispatch,propertyType,travelRating,isCancelable}}>
            {children}
        </FilterContext.Provider>
    ) 
}
const useFilter = () => useContext(FilterContext)
export {useFilter,FilteredProvider}