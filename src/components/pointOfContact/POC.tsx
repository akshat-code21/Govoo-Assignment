import { UserIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Switch from '../ui/Switch';
import Button from '../Button';

export default function POC() {
    return (
        <div className="p-6 text-white">
            <h1 className="text-3xl font-semibold mb-8 underline">Point of Contact</h1>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                    <h2 className="text-2xl mb-4">Organiser Name</h2>
                    <div className="relative bg-[#2A2A2A] rounded-lg p-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="bg-transparent w-full pr-10 outline-none text-gray-400"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <UserIcon className="w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl mb-4">Phone Number</h2>
                    <div className="relative bg-[#2A2A2A] rounded-lg p-4">
                        <input 
                            type="tel" 
                            placeholder="(123) 456 - 7890" 
                            className="bg-transparent w-full pr-10 outline-none text-gray-400"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <PhoneIcon className="w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl mb-4">Terms and Conditions</h2>
                <div className="bg-[#2A2A2A] rounded-lg p-6">
                    <p className="text-gray-400 mb-4">E.g</p>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2">
                        <li>Tickets are non-refundable after [specific date].</li>
                        <li>The organizer is not liable for personal belongings during the event.</li>
                        <li>Participants must be 18+ years old.</li>
                        <li>Respect other attendees and adhere to event-specific dress codes.</li>
                        <li>Venue has been inspected for fire safety compliance.</li>
                        <li>Permits for large gatherings are secured.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#2A2A2A] rounded-lg p-4 flex justify-between items-center mb-8">
                <span className="text-white">Set Event to private</span>
                <Switch />
            </div>

            <button className="w-full bg-[#2A2A2A] text-white rounded-lg py-4 px-6 hover:bg-[#353535] transition-colors">
                Add Section
            </button>
            <Button className="flex items-center flex-row px-12 text-xl font-bold bg-black border-none rounded-xl py-3 text-white
                    shadow-[0_0_20px_rgba(88,233,214,0.4),0_0_40px_rgba(88,233,214,0.3),0_0_60px_rgba(88,233,214,0.2)]
                    hover:shadow-[0_0_25px_rgba(88,233,214,0.5),0_0_45px_rgba(88,233,214,0.4),0_0_65px_rgba(88,233,214,0.3)]
                    transition-all duration-300">
                    Preview
                </Button>
        </div>
    );
}