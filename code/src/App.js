import React, { useState, useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import List from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import './App.css';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data.map((item) => item.show));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<List shows={shows} />} />
        <Route path='/show/:id' element={<ShowSummary />} />
      </Routes>
    </>
  );
};

export default App;
