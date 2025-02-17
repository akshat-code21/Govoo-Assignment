export default function Navbar() { 
    const navItems = ["Home", "Dashboard", "Reports", "History"]
    return(
        <div className="flex justify-center items-center py-4 gap-9">
            {navItems.map((item, index) => (
                <div key={index} className="font-outfit leading-6 text-base text-white">
                    {item}
                </div>
            ))}
            <div className="font-outfit leading-6 font-bold text-xl bg-gradient-to-l from-[#0E9CBD] to-[#1DE771] text-transparent bg-clip-text relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:to-[#0E9CBD] after:from-[#1DE771]">Create Event</div>
        </div>
    )
}