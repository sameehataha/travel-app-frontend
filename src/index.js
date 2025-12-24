import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider,DateProvider,FilteredProvider,AuthProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <DateProvider>   
        <FilteredProvider >
          <AuthProvider>
            <App /> 
          </AuthProvider>
        </FilteredProvider>
      </DateProvider>
    </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

