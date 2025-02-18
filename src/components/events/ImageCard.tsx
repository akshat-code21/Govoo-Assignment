import dummy from "../../assets/Group 2085653177.png"

export default function ImageCard() {
    return (
        <div className="relative w-[290px] h-[220px] rounded-xl overflow-hidden">
            <img 
                src={dummy} 
                alt="Trek" 
                className="w-full h-full object-cover"
            />
        </div>
    )
}