import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './Components/ErrorBoundary';

function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile</h1>;
}

function ShopScreen() {
  throw new Error('Shop page crashed!');
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <HomeScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/profile"
              element={
                <ErrorBoundary>
                  <ProfileScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/shop"
              element={
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
