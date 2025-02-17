import Button from "../Button";

export default function Options() {
    return (
        <div className="p-8">
            <h1 className="text-white text-4xl font-bold mb-12">Tiered Pricing Options</h1>
            
            <div className="grid grid-cols-2 gap-x-24 gap-y-8">
                {/* Left Column */}
                <div>
                    <label className="text-white text-2xl font-bold block mb-4">Name</label>
                    <input 
                        type="text"
                        placeholder="e.g Early Bird"
                        className="w-full p-4 rounded-xl bg-[#1C1F1E] text-gray-400 text-xl"
                    />
                </div>

                {/* Right Column */}
                <div>
                    <label className="text-white text-2xl font-bold block mb-4">Price per Ticket</label>
                    <input 
                        type="text"
                        placeholder="Enter Amount"
                        className="w-full p-4 rounded-xl bg-[#1C1F1E] text-gray-400 text-xl"
                    />
                </div>

                {/* Second Row - Left */}
                <div>
                    <label className="text-2xl font-bold block mb-4">Availability Deadline</label>
                    <div className="relative">
                        <input 
                            type="text"
                            placeholder="DD/MM/YYYY"
                            className="w-full p-4 rounded-xl bg-[#1C1F1E] text-gray-400 text-xl"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                <path d="M12 6v6l4 2" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Second Row - Right */}
                <div>
                    <label className="text-white text-2xl font-bold block mb-4">Slots</label>
                    <input 
                        type="text"
                        placeholder="Limited slots"
                        className="w-full p-4 rounded-xl bg-[#1C1F1E] text-gray-400 text-xl"
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-12">
                <Button className="flex items-center flex-row px-12 text-xl font-bold border-2 border-[#26292B] rounded-xl py-3 hover:bg-[#26292B] transition-colors">
                    + Add More
                </Button>
                <Button className="flex items-center flex-row px-12 text-xl font-bold bg-black border-none rounded-xl py-3 text-white
                    shadow-[0_0_20px_rgba(88,233,214,0.4),0_0_40px_rgba(88,233,214,0.3),0_0_60px_rgba(88,233,214,0.2)]
                    hover:shadow-[0_0_25px_rgba(88,233,214,0.5),0_0_45px_rgba(88,233,214,0.4),0_0_65px_rgba(88,233,214,0.3)]
                    transition-all duration-300">
                    Done
                </Button>
            </div>
        </div>
    )
}