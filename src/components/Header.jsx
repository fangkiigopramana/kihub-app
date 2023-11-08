import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/images/logo192.png"

export default function Header() {
    const [activePage, setActivePage] = useState('home');

    const handleNavigation = (page) => {
        setActivePage(page);
    }

    return (
        <>
            <nav class="bg-page mb-5">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src={icon} class="h-8 mr-3" alt="Kihub Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary">Kihub</span>
                    </a>
                </div>
                <div class="flex flex-wrap justify-end items-right mx-auto max-w-screen-xl p-4">

                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li className={activePage === 'home' ? 'text-blue-600 font-bold' : 'text-white'} onClick={() => handleNavigation('home')}>
                                <Link to="/home" class=" md:hover:text-blue-600 font-bold md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500">Home</Link>
                            </li>
                            <li className={activePage === 'about' ? 'text-blue-600 font-bold' : 'text-white'} onClick={() => handleNavigation('about')}>
                                <Link to="/about" class="md:hover:text-blue-600 font-bold md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500">About</Link>
                            </li>
                            <li className={activePage === 'skill' ? 'text-blue-600 font-bold' : 'text-white'} onClick={() => handleNavigation('skill')}>
                                <Link to="/skill" class=" md:hover:text-blue-600 font-bold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 ">Skill</Link>
                            </li>
                            <li className={activePage === 'project' ? 'text-blue-600 font-bold' : 'text-white'} onClick={() => handleNavigation('project')}>
                                <Link to="/project" class=" md:hover:text-blue-600 font-bold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 ">Projects</Link>
                            </li>
                            <li className={activePage === 'contact' ? 'text-blue-600 font-bold' : 'text-white'} onClick={() => handleNavigation('contact')}>
                                <Link to="contact" class=" md:hover:text-blue-600 font-bold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 ">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}