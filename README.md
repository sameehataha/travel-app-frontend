# 🏨 Travel Booking App - Frontend

[![Live Demo](https://img.shields.io/badge/Live-Demo-ff385c?style=for-the-badge&logo=vercel&logoColor=white)](https://travel-app-frontend-sigma.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, full-featured hotel booking platform built with React. Browse hotels, filter by price and amenities, manage wishlists, and complete bookings with secure payment integration.

## 🖼️ App Preview

![Booking.com  (Airbnb Clone) - Homepage](./)
##  Features

###  Authentication
- User registration with validation (name, email, phone, password)
- Login with phone number & password
- JWT token-based authentication
- Persistent login session

###  Hotel Browsing
- Infinite scroll for seamless browsing
- Category-based filtering (Beach, National Parks, Mountains, etc.)
- Responsive hotel cards with images and pricing
- Detailed hotel view with amenities, house rules, and health & safety info

###  Search & Filters
- Search by destination with autocomplete suggestions
- Date picker for check-in/check-out
- Guest count selector
- Advanced filters:
  - Price range slider
  - Property type (House, Flat, Hotel, Guest House)
  - Rooms & beds configuration
  - Star rating (1-5⭐)
  - Free cancellation toggle

###  Wishlist
- Add/remove hotels from wishlist
- Persistent wishlist state
- Quick access from navbar

###  Payment
- Razorpay integration for secure payments
- Detailed booking summary
- Price breakdown (room charges + service fee)

##  Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, React Router DOM v7 |
| **Styling** | Bootstrap 5, CSS Modules, Material-UI |
| **State Management** | React Context API + useReducer |
| **HTTP Client** | Axios |
| **Date Handling** | React DatePicker |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Payment** | Razorpay SDK |
| **Build Tool** | React Scripts |

## 📁 Project Structure
src/
├── components/ # Reusable UI components <br>
│ ├── Auth/ # Login/Signup forms <br>
│ ├── AuthModal/ # Modal wrapper for auth <br>
│ ├── Categories/ # Category pills with scroll <br>
│ ├── DateSelector/ # Check-in/out date picker <br>
│ ├── Filters/ # Filter components <br>
│ ├── HotelCard/ # Hotel listing card  <br>
│ ├── HotelDetails/ # Detailed hotel view <br>
│ ├── HotelImages/ # Image gallery <br>
│ ├── Navbar/ # Navigation bar <br>
│ ├── PriceCard/ # Booking price card <br>
│ └── SearchStayWithDate/ # Search modal <br>
├── Context/ # React Context providers <br>
│ ├── auth-context.js <br>
│ ├── category-context.js<br>
│ ├── data-context.js <br>
│ ├── filter-context.js <br>
│ └── wishlist-context.js <br>
├── pages/ # Page components <br>
│ ├── Home.js # Main listing page <br>
│ ├── SearchResultPage.js <br>
│ ├── SingleHotel.js <br>
│ ├── Wishlist.js <br>
│ └── payment.js <br>
├── reducer/ # Reducer functions <br>
├── services/ # API service calls <br>
├── utils/ # Helper functions & validations <br>
├── config/ # API configuration <br>
└── App.js # Routing setup <br>

##  Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sameehataha/travel-app-frontend.git
cd travel-app-frontend
```

2. Install dependencies:
npm install

3. Create a .env file in the root directory:
REACT_APP_API_BASE_URL = https://travel-app-backend-jrcu.onrender.com

4. Start the development server:
 npm start
The app will open at http://localhost:3000

Build for Production
npm run build

## 🔗 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/hotels` | GET | Get all hotels |
| `/api/hotels?category={category}` | GET | Filter by category |
| `/api/hotels/{id}` | GET | Get single hotel |
| `/api/category` | GET | Get categories |
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/wishlist` | GET/POST/DELETE | Wishlist operations |

## Key Features in Detail

### Filter System
1. The app includes a comprehensive filter system with:
2. Price Range: Dual-handle slider with ₹100-25,000 range
3. Rooms & Beds: Separate filters for bedrooms, beds, and bathrooms
4. Property Type: Quick-select buttons for different accommodation types
5. Star Rating: Filter by minimum rating (1-5 stars)
6. Free Cancellation: Toggle switch for cancelable bookings


### Infinite Scroll
Hotels load progressively as you scroll, providing a smooth browsing experience without pagination.


### Responsive Design
Fully responsive layout that works on desktop, tablet, and mobile devices.

#  Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

# License
This project is licensed under the MIT License - see the LICENSE file for details.

#  Acknowledgments

* [Booking.com](https://www.booking.com) for design inspiration
* [Razorpay](https://razorpay.com) for payment integration
* [Unsplash](https://unsplash.com) for placeholder images

#  Contact
Sameeha Taha - sameehataha24@gmail.com

Project Link: https://travel-app-frontend-sigma.vercel.app/

