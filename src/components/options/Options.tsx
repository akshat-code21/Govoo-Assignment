import { ClockIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

export default function Options() {
  return (
    <div className="">
      <h1 className="text-white text-2xl font-outfit font-medium mb-12">
        Tiered Pricing Options
      </h1>

      <div className="grid grid-cols-2 gap-x-24 gap-y-8">
        {/* Left Column */}
        <div>
          <label className="text-white text-lg font-outfit font-medium block mb-4">
            Name
          </label>
          <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">
                e.g Early Bird
              </span>
            </div>
          </button>
        </div>

        {/* Right Column */}
        <div>
          <label className="text-white text-lg font-outfit font-medium block mb-4">
            Price per Ticket
          </label>
          <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">
                Enter Amount
              </span>
            </div>
          </button>
        </div>

        {/* Second Row - Left */}
        <div>
          <label className="text-white text-lg font-outfit font-medium block mb-4">
            Availability Deadline
          </label>
          <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
            <div className="relative flex items-center justify-between">
              <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">
                DD/MM/YYYY
              </span>
            </div>
            <span className="right-0">
              <ClockIcon className="w-6 h-6 text-gray-400" />
            </span>
          </button>
        </div>

        {/* Second Row - Right */}
        <div>
          <label className="text-white text-lg font-outfit font-medium block mb-4">
            Slots
          </label>
          <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">
                Limited slots
              </span>
            </div>
          </button>
        </div>        
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-12">
        <Button className="flex items-center border-[rgba(88,233,214,1)] justify-center gap-5 flex-row text-lg font-semibold p-3  border-2 border-[#26292B] rounded-xl  hover:bg-[#26292B] transition-colors">
          <span className="text-xl">+</span> <span className="font-outfit text-lg">Add More</span>
        </Button>
        <Button
          className="w-[120px] bg-black text-white rounded-[32px] py-4   font-outfit text-lg font-semibold
                    shadow-[0_4px_15px_-2px_#58E9D6]
                    border-none"
        >
          Done
        </Button>
      </div>
    </div>
  );
}
