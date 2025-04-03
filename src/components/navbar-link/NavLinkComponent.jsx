import Link from "next/link";

export default function NavLinkComponent() {
  return (
    <>
      <div className="flex items-center text-[#1E293B] font-medium text-lg">
        <Link href="#">Workspace</Link>
        <div className="p-5">
            <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M1.41 16.92L7.93 10.4C8.7 9.62999 8.7 8.36999 7.93 7.59999L1.41 1.07999"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
        </div>
        <Link href="#">HRD Design</Link>
      </div>
      <div className="bg-[#4379F2] w-[200px] h-1 rounded-full"></div>
    </>
  );
}
