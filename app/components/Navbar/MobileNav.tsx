import Link from "next/link";
import { ImCross } from "react-icons/im";

interface MobileNavProps {
  nav: boolean;
  closeNav: () => void;
}

export default function MobileNav({ nav, closeNav }: MobileNavProps) {
  const navStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navStyle} left-0 top-0 bottom-0 right-0 z-[1002] transition-all duration-500 bg-[#000000e0]`}
    >
      {/* Close icon */}
      <ImCross
        className="w-[1.5rem] h-[1.5rem] absolute top-[2rem] right-[2rem] text-white"
        onClick={closeNav}
      />
      {/* Nav links placeholder */}
      <div
        className={
          "bg-red-600 ${navStyle} transition-all duration-500 delay-200 flex items-center justify-center w-[70%] h-[100%]"
        }
      >
        {/* Nav links */}
        <ul className="space-y-10">
          <li className="text-[27px] font-medium uppercase text-white hover:text-yellow-400 transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[27px] font-medium uppercase text-white hover:text-yellow-400 transition-all duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[27px] font-medium uppercase text-white hover:text-yellow-400 transition-all duration-200">
            <Link href="/news">News</Link>
          </li>
          <li className="text-[27px] font-medium uppercase text-white hover:text-yellow-400 transition-all duration-200">
            <Link href="/post">Post</Link>
          </li>
          <li className="text-[27px] font-medium uppercase text-white hover:text-yellow-400 transition-all duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
