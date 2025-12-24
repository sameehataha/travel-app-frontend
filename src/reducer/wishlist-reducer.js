export const wishlistReducer = (state, {type,payload}) => {
  switch(type){
    case  "ADD_WISHLIST_HOTEL":
      return {
        ...state,
        wishlist: [...state.wishlist,payload]
      }
    case "REMOVE_WISHLIST_HOTEL":
        return {
            ...state,
             wishlist: state.wishlist.filter(hotel => hotel._id !== payload)
        }
    default:
      return state; 
  }
}