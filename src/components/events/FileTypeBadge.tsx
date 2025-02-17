export default function FileTypeBadge({FileType,bg}: {FileType: string,bg:boolean}) {
    return (
        <div className={`text-xs flex border border-solid border-[#FFFFFF]/[0.1] items-center justify-center font-dm-sans font-medium text-[#9DA4AE] px-2 py-1 rounded-md ${bg ? "bg-[rgba(255,255,255,0.1)] px-2" : "bg-transparent "}`}>
            {FileType}
        </div>
    )
}