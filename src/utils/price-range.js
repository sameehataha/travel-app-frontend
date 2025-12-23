export const getHotelsByPrice = (hotels,priceRange) => {
      const filteredHotelsByprice = hotels.filter(hotel => hotel.price >= priceRange[0]  && hotel.price <= priceRange[1])
      return filteredHotelsByprice
}