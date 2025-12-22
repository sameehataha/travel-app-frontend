import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HotelDetails, HotelImages, Navbar } from "../../components";
export const SingleHotel = ({}) => {
  const [singleHotel, setSingleHotel] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://travel-app-backend-jrcu.onrender.com/api/hotels/${id}`
        );
        setSingleHotel(data);
        //  console.log(data)
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  // console.log(id)

  const { name, country } = singleHotel;
  return (
    <Fragment>
      <Navbar />
      <main className="single-hotel-image">
        <p
          style={{
            fontSize: "1.8rem",
            marginTop: "10px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "20px",
            textAlign: "center", 
            maxWidth: "900px", 
            margin: "10px auto 20px auto", 
          }}
        >
          {name}, {country}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div>
        <HotelDetails singleHotel={singleHotel}/>
        </div>
      </main>
    </Fragment>
  );
};
