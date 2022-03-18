import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import TalentOnboarding from './pages/TalentOnboarding/TalentOnboarding';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/onboarding' element={<TalentOnboarding />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
