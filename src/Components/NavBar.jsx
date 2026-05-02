'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import eduapa from "@/asset/eduapa.png"
import { authClient } from '@/lib/auth-client';
import userAvatar from "@/asset/user.png"
import { redirect, usePathname } from 'next/navigation';

const NavBar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    const pathName = usePathname();
    // console.log(pathName);
    const links =<>
        <li><Link href={'/'} className={`${pathName === '/'? 'bg-orange-500 rounded-full btn text-white':''} font-semibold `}>Home</Link></li>
        <li><Link href={'/courses'} className={`${pathName === '/courses'? 'bg-orange-500 rounded-full btn text-white':''} font-semibold `}>Courses</Link></li>
        <li><Link href={'/profile'} className={`${pathName === '/profile'? 'bg-orange-500 rounded-full btn text-white':''} font-semibold `}>My Profile</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start flex items-center">
            <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">   
                {links}        
            </ul>
            </div>
            <Link href={'/'} >  
                <Image src={eduapa} alt='logo' width={110} height={110}/>
           </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {links}
            </ul>
        </div>
        <div className="navbar-end gap-2">
            {user ? <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
                src={user.image || userAvatar}
                alt="avatar"
                width={40}
                height={40}
                className="object-cover w-full h-full"
            />
            </div>: <FaUserCircle className='w-8 h-8' />}
            {user ? <button onClick={async ()=>{await authClient.signOut(); redirect('/')}} className="btn rounded-full">Logout</button> : <Link href={'/login'} className="btn rounded-full">Login</Link> } 
        </div>
        </div>
    );
};

export default NavBar;