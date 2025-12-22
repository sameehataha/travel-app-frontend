import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css"
import { useState } from "react";
import { useDate } from "../../Context";
export const DateSelector = ({placeholder, checkInType}) => {
    const { checkin, checkout, dateDispatch } = useDate()
    const  handleDateChange = (date) => {
        dateDispatch({
            type: checkInType === "in" ? "CHECK_IN":"CHECK_OUT",
            payload: date,
        })
    }
    console.log({checkin,checkout})
    const handleDateFocus = () => {
        dateDispatch({
            type: "DATE_FOCUS",
        })
    }
    return  <DatePicker  selected={checkInType === "in" ? checkin : checkout} onChange={date => handleDateChange(date)} onFocus={handleDateFocus} className="search-dest-input" dateFormat="dd/MM/yyyy" placeholderText="Add Dates" closeOnScroll={true}/>
    
}