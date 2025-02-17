import { useEffect, useRef, useState } from "react";

export default function EventCategoryInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    { value: "social", label: "Social" },
    { value: "business", label: "Business" },
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
  ];

  return (
    <div className={"max-w-[284px] pt-4 font-outfit text-lg "}>
      <div className="w-full gap-2 text-white font-medium leading-none pl-1">
        Event Category
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[rgba(30,37,36,1)] shadow-[0px_2px_6px_rgba(19,18,66,0.07)] min-h-[66px] mt-[17px] rounded-xl border-none text-white flex items-center justify-between px-4"
        >
          <div className="flex items-center gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/efd38cb46d9c21423bf11021dfaf55fdf469b520d710e11fed7803ca459aa4ec"
              className="aspect-[1] object-contain w-5"
              alt=""
            />
            <span className="text-[#FFFFFF]/[0.25]">{selected || "Select Category"}</span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/5e970aad5625bbd76000ce69d114c4cc8cda400ceb5e786b2b8a619f5776ae2d"
            className={`aspect-[1] object-contain w-5 transition-transform duration-200
              ${isOpen ? "rotate-180" : ""}`}
            alt=""
          />
        </button>

        {isOpen && (
          <div className="absolute w-full font-outfit text-lg mt-2 bg-white rounded-xl shadow-lg z-50 py-2 border border-gray-200">
            {categories.map((category) => (
              <button
                key={category.value}
                className="w-full px-4 py-2.5 font-outfit text-lg text-left hover:bg-gray-50  transition-colors"
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
        <div className="text-white font-poppins text-xs font-semibold mt-[12px]">Event name limit to 16 letters</div>
      </div>
    </div>
  );
}
