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
import POC from "./components/pointOfContact/POC";
function App() {
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
              <ImageUploadCard />
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

export default App;
