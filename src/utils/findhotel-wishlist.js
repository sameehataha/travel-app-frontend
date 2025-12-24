export const findhotelWishlist = (wishlist,id) => {
    const isHotelInWishlist = wishlist.some(hotel => hotel._id === id)
    return isHotelInWishlist
}