'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    console.log(pathname, "pathname");

    const isActive = href === pathname


  return (
    <Link href={href} className={`${isActive ? "border-b-2 border-green-500" : ""}`}>
        {children}
    </Link>
  )
};

export default NavLink;



// eta holo active dekhanor jonno alada kore nav link a jeno bujha jay amar kon path a achi
