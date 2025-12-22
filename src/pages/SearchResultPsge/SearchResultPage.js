import { Fragment } from "react"
import  {HotelCard, Navbar} from "../../components"
import { useState,useEffect } from "react"
import { useDate, useCategory } from "../../Context"
import axios from "axios"
export const SearchResults = () => {
    const { destination } = useDate()
    const  {hotelCategory} = useCategory()
    const [hotels, setHotels] = useState([]);
     useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://travel-app-backend-jrcu.onrender.com/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      } 
    })();
  }, [destination]);
   const filteredSearchResult = hotels.filter(({ city = "", address = "", state = "" }) => {
        return address.toLowerCase() === destination.toLowerCase() ||
            city.toLowerCase() === destination.toLowerCase() ||
            state.toLowerCase() === destination.toLowerCase()
    })
    return (
         <Fragment>
            <Navbar />
            <section className="container mt-4">
                <div className="row g-2">
                    {filteredSearchResult && filteredSearchResult.length > 0 ? (
                        filteredSearchResult.map((hotel) => (
                            <div className="col-12 col-sm-6 col-lg-3" key={hotel._id}>
                                <HotelCard hotel={hotel} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center mt-5">
                            <h3>No hotels found in "{destination}"</h3>
                            <p className="text-muted">Try searching for a different location</p>
                        </div>
                    )}
                </div>
            </section>
        </Fragment>
    )
}