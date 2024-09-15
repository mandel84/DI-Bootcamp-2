import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import Category from './Components/Category';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/mountain" element={<Category category="mountain" />} />
          <Route path="/beaches" element={<Category category="beach" />} />
          <Route path="/birds" element={<Category category="bird" />} />
          <Route path="/food" element={<Category category="food" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
