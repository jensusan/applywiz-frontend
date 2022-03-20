import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Landing from './pages/Landing/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import TalentOnboarding from './pages/TalentOnboarding/TalentOnboarding';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Profile from './pages/Profile/Profile';



function App() {
  URL = 'http://127.0.0.1:8000/';

//   const [userInput, setUserInput] =useState({
//     step: 1,
//     firstName: '',
//     lastName: '',
//     email: '',
//     website: '',
//     resume: '',
//     linkedIn: '',
//     phoneNumber: '',
//     zipCode: '',
//     startDate: '',
//     location: '',
//     experience: '',
//     roleType: '',
//     industry: '',
//     companySize: '',
//     visa: '',
//     language: '', 
//     salary: '',
//     veteran: '',
//     disability: ''
// })

// console.log(userInput)
// const nextStep = () => {
//   setUserInput(prevState => ({
//       ...prevState, 
//       step: step + 1
//   }))
// }
// console.log(userInput)
// const prevStep = () => {
//   // const {step} = userInput;
//   setUserInput(prevState => ({
//       ...prevState, 
//       step: step - 1
//   }))
// }

// const handleChange = input => e => {
//   setUserInput(prevState => ({...prevState, [input]: e.target.value}))
// }
// const handleFileChange = (input, file) => e => {
//   setUserInput(prevState => ({...prevState, [input]: e.target.files}))
// }
 
  return (
    <>
    <Header />
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/onboarding' element={<TalentOnboarding URL={URL} />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
