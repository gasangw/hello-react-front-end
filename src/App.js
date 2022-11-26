import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';
import { fetchMessage } from './redux/messages/messageSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchRandomGreeting(){
      dispatch(fetchMessage());
    }

    fetchRandomGreeting();
  }, []);
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Greetings /> } />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
