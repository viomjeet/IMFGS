import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../Components/Home';
import Score from '../Components/Score';
import NotFound from '../Components/NotFound';
import Profile from '../Components/User/profile';

export default function AppRouter() {
  return (
    <>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score" element={<Score />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </>
  );
}