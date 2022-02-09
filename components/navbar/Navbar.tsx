import Link from 'next/link';
import React from 'react';
import Logo from "../../images/logoer/Online_hvit.svg" 

function Navbar() {
  return (
      <>
        <style jsx>{`nav {background: #0D5474}`}</style>

        <nav className="flex items-center flex-wrap bg-green-300 p-3">
            <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
                <svg width="40%" height="40%" viewBox="0 0 643 167" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"  fill="-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g transform="matrix(1,0,0,1,-121.126,-423)">
                        <g transform="matrix(1,0,0,1,-869.951,355.303)">
                            <g transform="matrix(1.33333,0,0,1.33333,887.586,-279.257)">
                                <g>
                                    <g transform="matrix(1,0,0,1,171.299,370.231)">
                                        <path d="M0,-101.72L-28.406,-59.668L-0.497,-59.312L-54.946,10.118L-33.175,-45.879L-60.813,-45.95L-29.288,-110.015C-29.288,-110.015 -21.027,-109.785 -13.921,-107.785C-6.834,-105.79 0,-101.72 0,-101.72Z" fill="rgb(250,183,89);fill-rule:nonzero;"/>
                                    </g>
                                    <g transform="matrix(0.75,0,0,0.75,0,186.709)">
                                        <path d="M236.622,114.629C239.737,116.969 242.712,119.544 245.548,122.352C253.395,130.276 259.416,139.289 263.611,149.388C267.807,159.488 269.904,170.093 269.904,181.203C269.904,192.313 267.807,202.898 263.611,212.959C259.416,223.02 253.395,232.013 245.548,239.937C237.624,247.862 228.612,253.922 218.512,258.117C208.412,262.312 197.807,264.41 186.697,264.41C179.342,264.41 172.217,263.491 165.322,261.652L185.836,235.386C186.123,235.39 186.41,235.392 186.697,235.392C196.719,235.392 205.829,232.945 214.025,228.051C222.222,223.156 228.767,216.611 233.662,208.414C238.556,200.218 241.003,191.147 241.003,181.203C241.003,171.181 238.556,162.071 233.662,153.875C230.11,147.928 225.69,142.85 220.401,138.642L236.622,114.629ZM178.079,98.428L160.843,133.456C160.388,133.709 159.936,133.97 159.486,134.239C151.29,139.133 144.744,145.679 139.85,153.875C134.955,162.071 132.508,171.181 132.508,181.203C132.508,191.147 134.955,200.218 139.85,208.414C144.337,215.929 150.213,222.057 157.477,226.796L147.204,254.408C140.211,250.596 133.797,245.772 127.963,239.937C120.038,232.013 113.979,223.02 109.783,212.959C105.588,202.898 103.49,192.313 103.49,181.203C103.49,170.093 105.588,159.488 109.783,149.388C113.979,139.289 120.038,130.276 127.963,122.352C135.887,114.505 144.88,108.484 154.941,104.289C162.368,101.192 170.081,99.238 178.079,98.428Z" fill="white;fill-rule:nonzero;"/>
                                    </g>
                                </g>
                                <g transform="matrix(179,0,0,179,213.46,385.103)">
                                    <path d="M0.429,0L0.31,0L0.31,-0.294C0.31,-0.317 0.301,-0.336 0.285,-0.353C0.269,-0.369 0.249,-0.377 0.227,-0.377C0.207,-0.377 0.19,-0.371 0.175,-0.359C0.16,-0.347 0.151,-0.332 0.146,-0.313L0.146,0L0.024,0L0.024,-0.498L0.146,-0.498L0.146,-0.455C0.153,-0.465 0.164,-0.473 0.178,-0.479C0.192,-0.486 0.206,-0.49 0.219,-0.493C0.233,-0.497 0.242,-0.498 0.248,-0.498C0.302,-0.498 0.347,-0.478 0.38,-0.438C0.413,-0.399 0.429,-0.351 0.429,-0.294L0.429,0Z" fill="white;fill-rule:nonzero;"/>
                                </g>
                                <g transform="matrix(1,0,0,1,20.5964,0)">
                                    <g transform="matrix(0.75,0,0,0.75,0,8.52651e-14)">
                                        <rect x="431.307" y="394.604" width="29.6" height="118.751" fill="white"/>
                                    </g>
                                    <g transform="matrix(0.75,0,0,0.75,-11.7993,1.7053e-13)">
                                        <circle cx="461.84" cy="362.79" r="15.732" fill="white"/>
                                    </g>
                                </g>
                                <g transform="matrix(179,0,0,179,301.231,385.103)">
                                    <path d="M0.025,0L0.025,-0.04C0.025,-0.244 0.025,-0.448 0.025,-0.652L0.025,-0.697L0.149,-0.697L0.149,-0.652C0.149,-0.448 0.149,-0.244 0.149,-0.04L0.149,0L0.025,0Z" fill="white;fill-rule:nonzero;"/>
                                </g>
                                <g transform="matrix(179,0,0,179,378.008,385.103)">
                                    <path d="M0.429,0L0.31,0L0.31,-0.294C0.31,-0.317 0.301,-0.336 0.285,-0.353C0.269,-0.369 0.249,-0.377 0.227,-0.377C0.207,-0.377 0.19,-0.371 0.175,-0.359C0.16,-0.347 0.151,-0.332 0.146,-0.313L0.146,0L0.024,0L0.024,-0.498L0.146,-0.498L0.146,-0.455C0.153,-0.465 0.164,-0.473 0.178,-0.479C0.192,-0.486 0.206,-0.49 0.219,-0.493C0.233,-0.497 0.242,-0.498 0.248,-0.498C0.302,-0.498 0.347,-0.478 0.38,-0.438C0.413,-0.399 0.429,-0.351 0.429,-0.294L0.429,0Z" fill="white;fill-rule:nonzero;"/>
                                </g>
                                <g id="e1" transform="matrix(0.75,0,0,0.75,33.6894,0)">
                                    <path d="M695.686,477.984C686.542,498.932 665.637,513.588 641.336,513.588C608.622,513.588 582.063,487.028 582.063,454.315C582.063,421.601 608.622,395.042 641.336,395.042C674.049,395.042 700.608,421.601 700.608,454.315C700.608,458.002 700.271,461.611 699.625,465.113L644.798,465.113L613.152,465.113C617.561,476.37 628.523,484.351 641.336,484.351C648.328,484.351 654.769,481.974 659.895,477.984L695.686,477.984ZM669.519,443.079C665.11,431.822 654.148,423.841 641.336,423.841C628.523,423.841 617.561,431.822 613.152,443.079L669.519,443.079Z" fill="white;"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            </Link>

            {// Burgermeny 
                }
            <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
            </button>

            <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href='/fondet'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                            Fondet
                        </a>
                    </Link>
                    <Link href='/onlinepotten'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Onlinepotten
                        </a>
                    </Link>
                    <Link href='/kvitteringer'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Kvitteringer
                        </a>
                    </Link>
                    <Link href='/bedrift'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Bedrift
                        </a>
                    </Link>
                    <Link href="/">
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            FAQ
                        </a>
                    </Link>
                    <Link href="/">
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Logg inn
                        </a>
                    </Link>
                </div>
            </div>    

        </nav>
      </>)
};

export default Navbar;
