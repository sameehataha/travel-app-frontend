import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navbar, HotelCard, Categories , SearchStayWithDate } from "../../components";
import "./Home.css";
import { motion } from "framer-motion";
import { useCategory, useDate } from "../../Context";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [testData, setTestData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory()
  const { isSearchModalOpen } = useDate()
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://travel-app-backend-jrcu.onrender.com/api/hotels?category=${hotelCategory}`
        );
        setTestData(data || []);
        setHotels(data ? data.slice(0, 16) : []);
        setCurrentIndex(16)
        setHasMore(true)
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    })();
  }, [hotelCategory]);
  
  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 16))
        );
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };
  
  return (
    <>
      <Navbar />
      <Categories/>
      
      {isSearchModalOpen && <SearchStayWithDate />}
      
      {isLoading ? (
        <motion.div
          className="container mt-5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading hotels...</p>
        </motion.div>
      ) : hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && (
              <motion.div
                className="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="spinner" />
                <p>Loading more hotels...</p>
              </motion.div>
            )
          }
          endMessage={
            <motion.p
              className="end-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✨ You've seen all hotels ✨
            </motion.p>
          }
        >
          <div className="container mt-4">
            <div className="row g-2">
              {hotels.map((hotel) => (
                <motion.div
                  className="col-12 col-sm-6 col-lg-3"
                  key={hotel._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HotelCard hotel={hotel} />
                </motion.div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      ) : (
        <motion.div
          className="container mt-5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3>No hotels found in "{hotelCategory}" category</h3>
          <p className="text-muted">Try selecting a different category</p>
        </motion.div>
      )}
    </>
  );
};