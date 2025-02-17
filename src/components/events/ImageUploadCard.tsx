import image from "../../assets/vuesax/outline/image.svg"
import FileTypeBadge from "./FileTypeBadge"
export default function ImageUploadCard() {
    return (
        <div className="w-[300px] h-[220px] bg-[rgba(30,37,36,1)] shadow-[0px_2px_6px_rgba(19,18,66,0.07)] border flex min-h-[220px] flex-col overflow-hidden items-center justify-around px-[41px] py-5 rounded-xl border-[rgba(239,240,246,1)] border-solid">
            <img src={image} alt="" className="size-9" />
            <div className="text-[#FFFFFF]/[0.5] font-outfit font-medium text-sm">Click to upload Horizontal</div>
            <div className="flex items-center gap-1.5 text-xs justify-center text-white">
                <FileTypeBadge FileType="PDF" bg={true} />
                <FileTypeBadge FileType="DOCX" bg={true} />
                <FileTypeBadge FileType="TXT" bg={true} />
                <FileTypeBadge FileType="<2.0 MB" bg={false} />
            </div>
        </div>
    )
}