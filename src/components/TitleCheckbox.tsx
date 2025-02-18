export default function TitleCheckbox() {
    return (
        <div className="flex items-center gap-2">
            <input 
                type="checkbox"  
                className="w-6 h-6 bg-[rgba(88,233,214,0.3)] accent-[#58E9D6] border-[#58E9D6] border-2 rounded-md focus:ring-[#58E9D6]  appearance-none checked:bg-[#58E9D6] checked:border-[#58E9D6]"
            />
            <label className="text-white font-outfit text-sm">Display title on the card</label>
        </div>
    )
}