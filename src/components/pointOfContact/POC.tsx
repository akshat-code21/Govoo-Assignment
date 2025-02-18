import { UserIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Switch from "../ui/Switch";
import Button from "../Button";

export default function POC() {
  return (
    <div className=" text-white">
      <h1 className="text-2xl font-outfit font-medium mb-8">
        Point of Contact
      </h1>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-outfit font-medium mb-4">
            Organiser Name
          </h2>
          <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
            <div className="relative flex items-center justify-between">
              <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">
                Name
              </span>
            </div>
            <span className="right-0">
              <UserIcon className="w-6 h-6 text-white" />
            </span>
          </button>
        </div>

        <div>
          <h2 className="text-lg font-outfit font-medium mb-4">Phone Number</h2>
          <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
            <div className="relative flex items-center justify-between">
              <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">
                (123) 456 - 7890
              </span>
            </div>
            <span className="right-0">
              <PhoneIcon className="w-6 h-6 text-white" />
            </span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-outfit font-medium mb-4">
          Terms and Conditions
        </h2>
        <div className="bg-[rgba(30,37,36,1)] font-outfit rounded-lg p-6">
          <p className="text-[#FFFFFF]/[0.25] mb-4">E.g</p>
          <ul className="list-disc pl-6 text-[#FFFFFF]/[0.25] space-y-2">
            <li>Tickets are non-refundable after [specific date].</li>
            <li>
              The organizer is not liable for personal belongings during the
              event.
            </li>
            <li>Participants must be 18+ years old.</li>
            <li>
              Respect other attendees and adhere to event-specific dress codes.
            </li>
            <li>Venue has been inspected for fire safety compliance.</li>
            <li>Permits for large gatherings are secured.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-[rgba(30,37,36,1)] rounded-lg p-4 flex justify-between items-center">
          <span className="text-white font-outfit text-lg">
            Set Event to private
          </span>
          <Switch />
        </div>

        <div className="flex justify-end">
          <button className="w-[200px] font-outfit mt-[30px] bg-[rgba(30,37,36,1)] text-white rounded-lg py-4 px-6 border border-[#58E9D6] text-lg font-semibold">
            Add Section
          </button>
        </div>
        <div className="mt-10 flex justify-end">
        <Button
          className="w-[150px] bg-black text-white rounded-[32px] py-4  font-outfit text-lg font-semibold
                    shadow-[0_4px_15px_-2px_#58E9D6]
                    border-none"
        >
          Preview
        </Button>
        </div>
      </div>
    </div>
  );
}
