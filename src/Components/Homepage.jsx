import React from 'react'
import Navbar from "./Navbar.jsx"
import Sidebar from './Sidebar.jsx'
import Clothing from "./Clothing.jsx"


const HomePage = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <div className='flex'>
                    <div className='w-1/5'>
                        <Sidebar />
                    </div>
                    <div className='w-4/5'>
                        <Clothing />
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage