import "./App.css";
import CardGuidelines from "./components/CardGuidelines";
import Disclaimer from "./components/Disclaimer";
import FormContainer from "./components/eventDetails/FormContainer";
import EventCategoryInput from "./components/events/EventCategoryInput";
import EventNameInput from "./components/events/EventNameInput";
import ImageUploadCard from "./components/events/ImageUploadCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleCheckbox from "./components/TitleCheckbox";
import ImageCard from "./components/events/ImageCard";
import UploadVideo from "./components/UploadVideo";
import VideoUpload from "./components/VideoUpload";
import Options from "./components/options/Options";
import POC from "./components/pointOfContact/POC";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function DashboardApp() {
  return (
    <>
      <div className="bg-black min-h-screen w-full">
        <Navbar />
        <Hero />
        <div className="container flex flex-col items-center mx-auto mt-[100px] ">
          <div className="flex flex-row gap-14 items-start justify-center w-full">
            <div className="flex flex-col">
              <h1 className="text-white font-outfit font-medium text-2xl mb-4">
                Event Details
              </h1>
              <EventNameInput />
              <div className="text-white font-poppins text-xs font-semibold mt-[12px]">
                Event name limit to 16 letters
              </div>
            </div>
            <div className="mt-[46px] pt-[1px]">
              <EventCategoryInput />
            </div>
          </div>

          <div className="mt-[70px] pl-[50px]">
            <div className="text-white font-outfit font-medium text-2xl mb-4">
              Event Cards
            </div>
            <div className="flex flex-row gap-8">
              <ImageUploadCard />
              <ImageCard />
            </div>
            <div className="my-[30px]">
              <TitleCheckbox />
            </div>
            <div className="my-[30px]">
              <UploadVideo />
            </div>
            <div className="my-[30px] text-center">
              <Disclaimer />
            </div>
            <div className="mt-[30px]">
              <VideoUpload />
            </div>
            <div className="relative right-0">
              <CardGuidelines />
            </div>
            <div className="mt-[80px]">
              <FormContainer />
            </div>
            <div className="my-[80px]">
              <Options />
            </div>
            <div className="my-[30px]">
              <POC />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Verification() {
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState({
    email: false,
    mobile: false
  });

  const handleVerification = (type: 'email' | 'mobile') => {
    setVerificationStatus(prev => ({
      ...prev,
      [type]: true
    }));
  };

  // Navigate when both are verified
  useEffect(() => {
    if (verificationStatus.email && verificationStatus.mobile) {
      navigate('/dashboard');
    }
  }, [verificationStatus, navigate]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="fixed inset-0 bg-black/50 z-0"></div>
      
      <div className="relative z-10 w-[640px] flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full max-w-[600px]">
          <div className="bg-white rounded-2xl p-4 flex justify-between items-center">
            <span className="text-xl font-outfit font-semibold">Verify Your E-mail</span>
            <button 
              onClick={() => handleVerification('email')}
              className={`px-8 py-2 rounded-2xl ${
                verificationStatus.email 
                ? 'bg-gray-400 text-white' 
                : 'bg-gradient-to-b from-[#0E9CBD] to-[#1DE771] text-white'
              }`}
              disabled={verificationStatus.email}
            >
              {verificationStatus.email ? 'Verified' : 'Verify'}
            </button>
          </div>
          <div className="bg-white rounded-2xl p-4 flex justify-between items-center">
            <span className="text-xl font-outfit font-semibold">Verify Your Mobile</span>
            <button 
              onClick={() => handleVerification('mobile')}
              className={`px-8 py-2 rounded-2xl ${
                verificationStatus.mobile 
                ? 'bg-gray-400 text-white' 
                : 'bg-gradient-to-b from-[#0E9CBD] to-[#1DE771] text-white'
              }`}
              disabled={verificationStatus.mobile}
            >
              {verificationStatus.mobile ? 'Verified' : 'Verify'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative">        
        <div className="fixed inset-0 blur-sm">
          <DashboardApp />
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Verification />} />
            <Route path="/dashboard" element={<DashboardApp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
