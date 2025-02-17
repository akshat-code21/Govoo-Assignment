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
import UploadVideo from "./components/UploadVideo";
import VideoUpload from "./components/VideoUpload";
import Options from "./components/options/Options";
import Button from "./components/Button";
import POC from "./components/pointOfContact/POC";
function App() {
  return (
    <>
      <div className="bg-black min-h-screen w-full">
        <Navbar />
        <Hero />
        <div className="container flex flex-col items-center mx-auto mt-[70px] px-4">
          <div className="flex flex-row gap-8 items-start justify-center w-full">
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
        </div>
        <div className="flex flex-col items-center mx-auto mt-[70px] px-4">
          <div>Event Card</div>
          <ImageUploadCard />

          <TitleCheckbox />
          <UploadVideo />
          <Disclaimer />
          <VideoUpload />
          <CardGuidelines />
          <FormContainer/>
          <Options /> 
          <POC />
        </div>
      </div>
    </>
  );
}

export default App;
