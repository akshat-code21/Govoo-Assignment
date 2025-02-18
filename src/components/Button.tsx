export default function Button({children,className}: {children: React.ReactNode, className: string}) {
  return (
    <button
      className={`inline-flex items-center justify-center
        text-lg
        text-white
        font-semibold
        leading-none
        rounded-lg
        border
        border-solid
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
