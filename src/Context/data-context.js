import { createContext, useContext, useReducer} from 'react'
import { dateReducer } from '../reducer'
const initialState = {
    guests:0,
    destination:"",
    checkin: null,
    checkout: null,
    isSearchModalOpen: false,
    isSearchResultOpen: true 
}
const DateContext = createContext(initialState)
const DateProvider = ({ children }) => {
    const [{destination, guests, checkin, checkout, isSearchModalOpen,isSearchResultOpen }, dateDispatch] = useReducer(dateReducer,initialState)
    return <DateContext.Provider value={{ destination, guests,checkin, checkout, isSearchModalOpen,isSearchResultOpen,dateDispatch}}>{children}</DateContext.Provider>
}
const useDate = () => useContext(DateContext)
export   { useDate, DateProvider }