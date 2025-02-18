export default function FormContainer() {
    return (
        <div className="flex flex-col w-full max-w-[1200px] mx-auto gap-6">
            {/* Event Description */}
            <div className="flex flex-col gap-3">
                <h2 className="text-white font-outfit font-medium text-lg leading-5">Event description</h2>
                <textarea 
                    placeholder="Enter Event Description"
                    className="w-full min-h-[120px] text-lg rounded-xl bg-[rgba(30,37,36,1)] text-[#FFFFFF]/[0.2] p-4 font-outfit resize-none focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                />
            </div>

            {/* Date and Event Type Row */}
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Start Date</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">Wednesday, 1st January</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">End Date</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">Wednesday, 1st January</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Registration Deadline and Event Type Row */}
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Registration Deadline</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">DD/MM/YYYY</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Event Type</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">Select Type</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Venue and City Row */}
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Enter Venue Name</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">Enter Venue</span>
                        </div>
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Enter City</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">e.g Banglore</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Price and Tickets Row */}
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Price per Ticket</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">Enter Amount</span>
                        </div>
                    </button>
                    <div className="text-white font-outfit text-sm">This is the standard price for your tickets <span className="text-red-600">*</span></div>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-white font-outfit text-xl">Total Tickets</label>
                    <button className="flex items-center justify-between w-full bg-[rgba(30,37,36,1)] text-gray-400 px-4 py-5 rounded-xl">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-outfit text-[#FFFFFF]/[0.25]">Enter Tickets</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Tiered Pricing Checkbox */}
            <div className="flex items-center gap-2">
            <input 
                type="checkbox"  
                className="w-6 h-6 bg-[#1E2524] accent-[#58E9D6] border-[#58E9D6] border-2 rounded-md focus:ring-[#58E9D6] bg-[rgba(88,233,214,0.3)] appearance-none checked:bg-[#58E9D6] checked:border-[#58E9D6]"
            />
                <label className="text-white font-outfit">Add Tiered Pricing Options (Optional)</label>
            </div>
        </div>
    )
}