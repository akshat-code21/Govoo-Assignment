import { useEffect, useRef, useState } from "react";

export default function EventCategoryInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    { value: "social", label: "Social" },
    { value: "business", label: "Business" },
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
  ];

  return (
    <>
      <div className="flex w-[284px] flex-col">
        <div className="text-white font-outfit font-medium text-lg leading-5 mb-[28px]">
          Event Category
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[284px] h-[66px] rounded-[12px] bg-[rgba(30,37,36,1)] text-[#FFFFFF]/[0.25] font-outfit font-medium text-lg leading-[32px] px-4 text-left"
          >
            <div className="flex items-center gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/efd38cb46d9c21423bf11021dfaf55fdf469b520d710e11fed7803ca459aa4ec"
                className="aspect-[1] object-contain w-5"
                alt=""
              />
              <span>{selected || "Select Category"}</span>
            </div>
          </button>

          {isOpen && (
            <div className="absolute w-full font-outfit text-lg mt-2 bg-white rounded-xl shadow-lg z-50 py-2 border border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className="w-full px-4 py-2.5 font-outfit text-lg text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setSelected(category.label);
                    setIsOpen(false);
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="text-black bg-black font-poppins text-xs font-semibold mt-[12px]">
          Select event category
        </div>
      </div>
    </>
  );
}
