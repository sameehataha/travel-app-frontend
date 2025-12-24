import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummaryPage = () => {
    navigate = useNavigate()
    const handleContinueBooking = () => {
   
        navigate("/")
    }
  return (
    <div>
      <h1>Order placed Successfully</h1>
      <button className='button btn-primary'onClick={handleContinueBooking}>continue Booking</button>
    </div>
  )
}


