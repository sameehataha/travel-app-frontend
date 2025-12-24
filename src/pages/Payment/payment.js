import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDate } from "../../Context";
import axios from "axios";
import "./payment.css";
import { source } from "framer-motion/client";
import { Currency } from "lucide-react";
export const Payment = () => {
  const { guests, dateDispatch, checkin, checkout } = useDate();
  const numberOfNights =
    checkin && checkout
      ? (checkout.getTime() - checkin.getTime()) / (1000 * 3600 * 24)
      : 0;
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate()
  const [singleHotel, setSingleHotel] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://travel-app-backend-jrcu.onrender.com/api/hotels/${id}`
        );
        setSingleHotel(data);
        //  console.log(data)
         console.log("Hotel data:", data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const { image, name, address, state, rating, price } = singleHotel;
  const totalPaymentAmount = price * numberOfNights + 500;
   const loadScript = (source) => {
        return new Promise(resolve => {
            const script = document.createElement("script")
            script.src = source
            script.onload = () => resolve(true)
            script.onerror = () => resolve(false)
            document.body.appendChild(script)
        })
    }
  const handleConfirmBooking = async () => {
     const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
     if(!response){
        console.log({message: "Razorpay SDK failed to load"})
     }
     const options  = {
        key : "rzp_test_RvUoeKLXRtouKO",
        amount: totalPaymentAmount * 100,
        currency: "INR",
        name: "Booking.com",
        email: "test@gmail.com",
        contact: "8185951782",
        description: "Thank you for booking",

        handler: ({payment_id}) => {
            // bookinDispatch()
            // navigate("/order-summary")
        },
        prefill: {
            name:"sameeha taha",
            email: "test@gmail.com",
            contact: "8185951782",
        }
     }
     const paymentObject = new window.Razorpay(options)
     paymentObject.open()
  }
  return (
    <Fragment>
      {/* Header */}
      <header className="border-bottom py-3">
        <div className="container">
          <h1 className="fs-3">
            <Link className="text-decoration-none text-dark" to="/">
              Booking.com
            </Link>
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="container my-5">
        <div className="row justify-content-center">
          {/* Left Section */}
          <div className="col-lg-6 d-flex flex-column gap-4">
            <h2>Trip details</h2>

            <div className="d-flex flex-column gap-3">
              <h3>Your trip</h3>

              <div>
                <p className="mb-1 fw-semibold">Date</p>
                <span>
                  {checkin.toLocaleDateString("en-Us", {
                    day: "numeric",
                    month: "short",
                  })}{" "}
                  - {" "}
                  {checkout.toLocaleDateString("en-Us", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>

              <div>
                <p className="mb-1 fw-semibold">Guests</p>
                <span>{guests} Guests</span>
              </div>
            </div>

            <div className="d-flex flex-column gap-2">
              <h3>Pay with</h3>
              <div className="border rounded p-2 razorpay-blue fw-semibold">
                Razorpay
              </div>
            </div>

            <button onClick={handleConfirmBooking} className="btn btn-primary btn btn-booking w-100">
              Confirm booking
            </button>
          </div>

          {/* Right Section */}
          <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
            <div className="card">
              <div className="card-body d-flex flex-column gap-4">
                {/* Hotel Info */}
                <div className="d-flex gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="img-fluid rounded"
                    style={{
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <div className="fw-semibold">{name}</div>
                    <div className="text-muted">
                      {address},{state}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <span className="me-2">⭐</span>
                  <span>{rating}</span>
                </div>

                {/* Tagline */}
                <div className="text-success">
                  Your booking is protected by{" "}
                  <strong className="text-danger">Booking.com</strong>
                </div>

                {/* Price Details */}
                <div>
                  <h3 className="fs-5 mb-3">Price details</h3>

                  <div className="d-flex justify-content-between">
                    <span>₹{price} × {numberOfNights} nights</span>
                    <span>₹{price * numberOfNights}</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>Service fee</span>
                    <span>₹500</span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>₹{totalPaymentAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
