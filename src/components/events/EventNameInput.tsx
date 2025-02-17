
export default function EventNameInput() {
    return(
        <> 
            <div className="text-white font-outfit font-medium text-lg leading-5 mb-[28px]">Event Name</div>
            <input 
                type="text" 
                placeholder="Mohan Yadav R"
                maxLength={16}
                aria-label="Event name"
                className="w-[284px] h-[66px] rounded-[12px] bg-[rgba(30,37,36,1)] text-[#FFFFFF]/[0.25] font-outfit font-medium text-lg leading-[32px] px-4" 
                style={{
                    backgroundImage: `url()`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 24px center',
                    backgroundSize: '40px',
                }} 
            />
            <div className="text-white font-poppins text-xs font-semibold mt-[12px]">Event name limit to 16 letters</div>
        </>
    )
}
