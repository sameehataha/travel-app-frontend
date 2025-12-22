import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes } from "react-router-dom"
import { Home, SearchResults, SingleHotel } from "./pages"
function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/hotels/:name/:address/:id/reverse" element={<SingleHotel/>} />
     <Route path="/hotels/:address" element={<SearchResults/>} />
     </Routes>
      
    </>
   
  ); 
}

export default App;
