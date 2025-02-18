import { UserIcon } from "@heroicons/react/24/outline";

export default function EventNameInput() {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-white font-outfit font-medium text-lg leading-5 mb-[28px]">
          Event Name
        </div>
        <div className="relative bg-[rgba(30,37,36,1)] rounded-lg p-5">
          <input
            type="text"
            placeholder="Mohan Yadav R"
            className="bg-transparent font-outfit w-full pr-10 outline-none text-gray-400"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <UserIcon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
}
