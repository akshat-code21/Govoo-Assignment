export default function Button({children,className}: {children: React.ReactNode, className: string}) {
  return (
    <button
      className={`inline-flex items-center justify-center
        shadow-[0px_3px_12px_rgba(74,58,255,0.18)]
        text-lg
        text-white
        font-semibold
        leading-none
        px-[41px]
        py-[13px]
        rounded-lg
        border
        border-[rgba(88,233,214,1)]
        border-solid
        hover:bg-[rgba(88,233,214,0.1)]
        transition-colors
        disabled:opacity-50
        disabled:pointer-events-none
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        sfocus:ring-[rgba(88,233,214,1)] ${className}`}
    >
      {children}
    </button>
  );
}
