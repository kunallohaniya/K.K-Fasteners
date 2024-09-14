import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.jpg.png"; 

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [dropdown, setDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    return (
        <header className='sticky top-0 z-50 bg-lime-50 shadow-md'>
            <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-40" loading="lazy" />
                </Link>

                <nav className='flex items-center gap-8'>
                    {["COMPANY", "PRODUCTS", "CLIENTS", "INDUSTRIES", "CONTACT US"].map((menu) => (
                        <div
                            key={menu}
                            className="relative group"
                            onMouseEnter={() => toggleDropdown(menu)}
                            onMouseLeave={() => toggleDropdown(null)}
                        >
                            <Link to="/" className='text-green-700 hover:text-green-900 font-semibold transition-colors duration-300'>
                                {menu}
                            </Link>
                            {dropdown === menu && (
                                <div className="absolute left-0 top-full bg-white shadow-lg mt-0.5 rounded w-64 py-4 grid gap-2 text-gray-700">
                                    {menu === "COMPANY" && (
                                        <>
                                            <Link to="/about" className="hover:bg-green-50 px-4 py-2 rounded">About Us</Link>
                                            <Link to="/team" className="hover:bg-green-50 px-4 py-2 rounded">Our Team</Link>
                                            <Link to="/careers" className="hover:bg-green-50 px-4 py-2 rounded">Careers</Link>
                                        </>
                                    )}
                                    {menu === "PRODUCTS" && (
                                        <>
                                            <Link to="/product1" className="hover:bg-green-50 px-4 py-2 rounded">Product 1</Link>
                                            <Link to="/product2" className="hover:bg-green-50 px-4 py-2 rounded">Product 2</Link>
                                            <Link to="/product3" className="hover:bg-green-50 px-4 py-2 rounded">Product 3</Link>
                                        </>
                                    )}
                                    {menu === "CLIENTS" && (
                                        <>
                                            <Link to="/client1" className="hover:bg-green-50 px-4 py-2 rounded">Client 1</Link>
                                            <Link to="/client2" className="hover:bg-green-50 px-4 py-2 rounded">Client 2</Link>
                                            <Link to="/client3" className="hover:bg-green-50 px-4 py-2 rounded">Client 3</Link>
                                        </>
                                    )}
                                    {menu === "INDUSTRIES" && (
                                        <>
                                            <Link to="/industry1" className="hover:bg-green-50 px-4 py-2 rounded">Industry 1</Link>
                                            <Link to="/industry2" className="hover:bg-green-50 px-4 py-2 rounded">Industry 2</Link>
                                            <Link to="/industry3" className="hover:bg-green-50 px-4 py-2 rounded">Industry 3</Link>
                                        </>
                                    )}
                                    {menu === "CONTACT US" && (
                                        <>
                                            <Link to="/contact-form" className="hover:bg-green-50 px-4 py-2 rounded">Contact Form</Link>
                                            <Link to="/support" className="hover:bg-green-50 px-4 py-2 rounded">Support</Link>
                                            <Link to="/locations" className="hover:bg-green-50 px-4 py-2 rounded">Our Locations</Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className='flex items-center gap-4'>
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login">
                                <button className='bg-green-700 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 '>
                                    Log in
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className='bg-orange-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105'>
                                    Sign up
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <button onClick={() => {
                                setIsLoggedIn(false);
                                toast.error("Logged Out");
                            }}
                                className='bg-red-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105'>
                                Log Out
                            </button>
                            <Link to="/dashboard">
                                <button className='bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105'>
                                    Dashboard
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
