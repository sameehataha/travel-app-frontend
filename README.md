# 🏨 Travel Booking App - Frontend

[![Live Demo](https://img.shields.io/badge/Live-Demo-ff385c?style=for-the-badge&logo=vercel&logoColor=white)](https://travel-app-frontend-sigma.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, full-featured hotel booking platform built with React. Browse hotels, filter by price and amenities, manage wishlists, and complete bookings with secure payment integration.

## ✨ Features

### 🔐 Authentication
- User registration with validation (name, email, phone, password)
- Login with phone number & password
- JWT token-based authentication
- Persistent login session

### 🏠 Hotel Browsing
- Infinite scroll for seamless browsing
- Category-based filtering (Beach, National Parks, Mountains, etc.)
- Responsive hotel cards with images and pricing
- Detailed hotel view with amenities, house rules, and health & safety info

### 🔍 Search & Filters
- Search by destination with autocomplete suggestions
- Date picker for check-in/check-out
- Guest count selector
- Advanced filters:
  - Price range slider
  - Property type (House, Flat, Hotel, Guest House)
  - Rooms & beds configuration
  - Star rating (1-5⭐)
  - Free cancellation toggle

### ❤️ Wishlist
- Add/remove hotels from wishlist
- Persistent wishlist state
- Quick access from navbar

### 💳 Payment
- Razorpay integration for secure payments
- Detailed booking summary
- Price breakdown (room charges + service fee)

## 🛠️ Tech Stack

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


