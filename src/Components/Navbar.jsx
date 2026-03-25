import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        "Electronics",
        "TVs & Appliances",
        "Men",
        "Women",
        "Baby & Kids",
        "Home & Furniture",
        "Sports, Books & More",
        "Flights",
        "Offer Zone",
    ];

    function handleClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="w-full">

            <div className="bg-blue-500 text-white px-4 md:px-6 py-2 flex items-center justify-between md:justify-center gap-4 md:gap-6">
                <div className="flex flex-col leading-none">
                    <span className="text-lg md:text-xl font-bold italic">Flipkart</span>
                    <span className="text-[10px] md:text-xs font-semibold italic text-yellow-300">Explore Plus</span>
                </div>

                <div className="hidden md:flex flex-1 max-w-2xl bg-white rounded-sm overflow-hidden">
                    <input type="text" placeholder="Search for products, brands and more"
                        className="flex-1 px-4 py-2 text-sm text-black outline-none" />
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <button className="bg-white text-blue-500 px-6 py-1 rounded-sm font-semibold">Login</button>
                    <span className="cursor-pointer">Become a Seller</span>
                    <span className="cursor-pointer">More</span>
                    <span className="cursor-pointer">Cart</span>
                </div>

                <div className="md:hidden">
                    <button onClick={handleClick}><i className="fa-solid fa-bars"></i></button>
                </div>
            </div>

            <div className="md:hidden bg-blue-500 px-4 pb-2">
                <div className="bg-white rounded-sm overflow-hidden">
                    <input type="text" placeholder="Search products..."
                        className="w-full px-3 py-2 text-sm text-black outline-none" />
                </div>
            </div>

            <div className="bg-white border-b px-4 md:px-6 py-2 overflow-x-auto">
                <ul className="flex items-center gap-4 md:justify-between text-sm font-medium whitespace-nowrap">
                    {items.map((item) => (
                        <li key={item} className="cursor-pointer hover:text-blue-500">{item}</li>
                    ))}
                </ul>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3 text-sm">
                    <span>Login</span>
                    <span>Become a Seller</span>
                    <span>More</span>
                    <span>Cart</span>
                </div>
            )}
        </header>
    );
};

export default Navbar;