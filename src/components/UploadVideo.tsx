import video from "../assets/vuesax/outline/video-play.svg"
import FileTypeBadge from "./events/FileTypeBadge"
export default function UploadVideo() {
    return (
        <div className="w-[646px] h-[220px] bg-[#1E2524] shadow-[0px_2px_6px_rgba(19,18,66,0.07)] border flex min-h-[220px] flex-col overflow-hidden items-center justify-around px-[41px] py-5 rounded-xl border-[rgba(239,240,246,1)] border-solid">
            <img src={video} alt="" />
            <div className="text-[#FFFFFF]/[0.5] font-outfit font-medium text-sm">Click to upload Video</div>
            <div className="flex items-center gap-1.5 text-xs justify-center text-white">
                <FileTypeBadge FileType="PDF" bg={true} />
                <FileTypeBadge FileType="DOCX" bg={true} />
                <FileTypeBadge FileType="TXT" bg={true} />
                <FileTypeBadge FileType="<10 SEC" bg={false} />
            </div>
        </div>
    )
}