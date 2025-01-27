"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
import { useAuth } from '@/context/AuthContext';

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, SetIsCartOpen] = useState(false)
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleProfile = () => {
        if (!user) {
          router.push('/login');
        }
        setIsProfileOpen((prev) => !prev);
    };
    
    return (
        <div className=" flex items-center gap-4 xl:gap-6 relative">
            <Image 
                src="/profile.png"
                alt="" 
                width={22}
                height={22}
                className="cusor-pointer"
                onClick={handleProfile}
            />
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0.2)]">
                    <Link href="/">Profile</Link>
                    <div className="mt-2 cursor-pointer" onClick={logout}>Logout</div>
                </div> 
            )}
            <div className="reltive cursor-pointer">
                <Image
                    src="/cart.png"
                    alt=""
                    width={22}
                    height={22}
                    onClick={() => SetIsCartOpen((prev) => !prev)}
                />
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#F35c7A] rounded-full text-white test-sm flex itemms-center justify-center">
                    2
                </div>
            </div>
            {isCartOpen && (
                <CartModal/>
            )}
        </div>
    );
};

export default NavIcons;