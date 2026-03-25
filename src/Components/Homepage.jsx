import React, { useState } from 'react'
import Navbar from "./Navbar.jsx"
import Sidebar from './Sidebar.jsx'
import Clothing from "./Clothing.jsx"

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(true);
    }

    return (
        <>
            <Navbar />
            <div className="md:hidden p-2">
                <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Filters
                </button>
            </div>
            <div className="w-full max-w-[1400px] mx-auto flex">
                <div className="md:w-1/5">
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <div className="w-full md:w-4/5 p-2 md:p-3">
                    <Clothing />
                </div>
            </div>
        </>
    )
}

export default HomePage;