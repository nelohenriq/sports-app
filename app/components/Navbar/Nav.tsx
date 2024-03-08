import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

interface NavProps {
  openNav: () => void;
}

export default function Nav({ openNav }: NavProps) {
  return (
    <div className="h-[14vh] shadow-md">
      <div className="flex items-center justify-between h-[100%] w-[90%] mx-auto">
        {/* logo */}
        <Image src={logo} alt="logo" width={80} height={80} />
        {/* Nav links */}
        <ul className="hidden lg:flex items-center space-x-16">
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200">
            <Link href="/news">News</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200">
            <Link href="/post">Post</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Join button */}
        <div className="flex items-center space-x-3">
          <button className="px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 hover:bg-blue-800 bg-blue-600 text-white font-semibold rounded">
            Join Now
          </button>
          {/* Menu */}
          <BiMenu
            className="w-[2rem] h-[2rem] text-red-500 lg:hidden"
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  );
}
