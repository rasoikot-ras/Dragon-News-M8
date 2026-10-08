import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-5">
      <div></div>
      <ul className="flex justify-between items-center gap-1.5 text-[#706F6F]">
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink href={'/about-us'}>About</NavLink>
        </li>
        <li>
          <NavLink href={'/career'}>Career</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-1.5">
        <Image src={userAvatar} alt="userAvatar" width={41} height={41}/>
        <button className="btn-l bg-[#403F3F] text-white py-2.5 px-10"><Link href={'/login'}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;