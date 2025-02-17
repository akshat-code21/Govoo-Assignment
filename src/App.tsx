import "./App.css";
import EventCategoryInput from "./components/events/EventCategoryInput";
import EventNameInput from "./components/events/EventNameInput";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-black h-screen w-full">
        <Navbar />
        <Hero />
        <EventNameInput/>
        <EventCategoryInput/>
      </div>
    </>
  );
}

export default App;
