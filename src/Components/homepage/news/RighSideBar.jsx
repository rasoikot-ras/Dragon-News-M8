import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from "next/image";
import swimming from "@/assets/swimming.png";
import userClass from "@/assets/class.png";
import playGround from "@/assets/playground.png";
import useBg from "@/assets/bg.png";

const RighSideBar = () => {
  return (
    <div>

        <h2 className='font-semibold text-xl mb-4'>Login With</h2>
        <div className='flex flex-col gap-2'>
            <button className='btn border-sky-400 text-blue-500 flex gap-1 items-center'> 
                <FaGoogle />
                Login with Google
            </button>

            <button className='btn border-black flex gap-1 items-center'>
                <FaGithub />    
                Login With Github
            </button>
        </div>

        <h2 className='font-semibold text-xl mb-4 mt-7'>Find Us On</h2>
        <div className='flex flex-col'>
            <a href="https://www.facebook.com/ra.soikot.143" target="_blank" rel="noopener noreferrer" className='btn'>
                <button className='flex gap-1 items-center'>
                    <FaFacebook  className='text-blue-900'/>
                    Facebook
                </button>
            </a>
            <a href="https://www.linkedin.com/in/ra-soikot/" target="_blank" rel="noopener noreferrer" className='btn'>
                <button className='flex gap-1 items-center'>
                    <FaTwitter className='text-blue-600' />
                    Twitter
                </button>
            </a>
            <a href="https://www.linkedin.com/in/ra-soikot/" target="_blank" rel="noopener noreferrer" className='btn'>
                <button className='flex gap-1 items-center'>
                    <FaInstagram className='text-red-600'/>
                    Instagram
                </button>
            </a>
        </div>

        
        <div>
            <h2 className='font-semibold text-xl mb-4 mt-7'>Q-Zone</h2>

            <Image src={swimming} alt="swimming" width={259} height={220}/>
            <Image src={userClass} alt='Class' width={259} height={220} />
            <Image src={playGround} alt='PlayGround' width={259} height={220} />
            <Image src={useBg} alt='Bg' width={259} height={509} />
        </div>

    </div>
  );
};

export default RighSideBar;