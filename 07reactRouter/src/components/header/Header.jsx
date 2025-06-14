import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow-md sticky top-0 z-50 bg-white">
            <nav className="border-b border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://images.pexels.com/photos/30395221/pexels-photo-30395221/free-photo-of-scenic-cape-point-landscape-with-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            className="h-12 w-auto rounded"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right Side Buttons */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden lg:flex lg:items-center lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? "text-orange-700 font-semibold"
                                                : "text-gray-700"
                                        } hover:text-orange-700 lg:hover:bg-transparent`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? "text-orange-700 font-semibold"
                                                : "text-gray-700"
                                        } hover:text-orange-700 lg:hover:bg-transparent`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? "text-orange-700 font-semibold"
                                                : "text-gray-700"
                                        } hover:text-orange-700 lg:hover:bg-transparent`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? "text-orange-700 font-semibold"
                                                : "text-gray-700"
                                        } hover:text-orange-700 lg:hover:bg-transparent`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            {/* Add more links here if needed */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        // <header className="shadow sticky z-50 top-0">
        //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">
        //                 <img
        //                     src=" https://images.pexels.com/photos/30395221/pexels-photo-30395221/free-photo-of-scenic-cape-point-landscape-with-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load  "
        //                     className="mr-3 h-12"
        //                     alt="Logo"
        //                 />
        //             </Link>
        //             <div className="flex items-center lg:order-2">
        //                 <Link
        //                     to="#"
        //                     className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Log in
        //                 </Link>
        //                 <Link
        //                     to="#"
        //                     className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        //                 >
        //                     Get started
        //                 </Link>
        //             </div>
        //             <div
        //                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2"
        //             >
        //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <NavLink
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700": "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        //                             }
        //                         >
        //                             Home
        //                         </NavLink>
        //                     </li>
                            
                            
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
    );
}

