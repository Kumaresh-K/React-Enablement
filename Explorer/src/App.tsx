import HomePage from './pages/HomePage/HomePage.tsx';
import DestinationProfile from './pages/DestinationProfile/DestinationProfile.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <Routes>
      <Route path='/places' element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path='/places/:name' element={<DestinationProfile />} />
      </Route>
      <Route path='*' element={<Navigate to='/places' />} />
    </Routes>
  );
}

export default App;
