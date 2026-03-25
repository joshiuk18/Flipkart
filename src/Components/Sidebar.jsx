import React from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {

    const sections = [
        "SAREE TYPE",
        "FABRIC",
        "COLOR",
        "OCCASION",
        "BRAND",
        "GENDER",
        "PATTERN",
        "SAREE STYLE",
        "PACK OF",
        "CUSTOMER RATINGS",
        "DISCOUNT",
        "NEW ARRIVALS",
        "COLLECTIONS",
        "OFFERS",
        "BLOUSE INCLUDED",
        "AVAILABILITY",
    ];

    function handleClick() {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setIsOpen(false)} />
            )}

            <div className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-full bg-white border-r text-sm z-50 transform 
            transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>

                <div className="p-4 border-y font-semibold text-lg flex justify-between items-center">
                    Filters
                    <button className="md:hidden" onClick={handleClick}><i className="fa-solid fa-xmark"></i></button>
                </div>

                <div className="p-4 border-b">
                    <p className="font-semibold text-xs mb-3">CATEGORIES</p>
                    <ul className="text-gray-500">
                        <li className="cursor-pointer">Clothing and Accessories</li>
                        <li className="cursor-pointer">Sarees and Saree Essentials</li>
                        <li className="cursor-pointer">Sarees</li>
                        <li className="font-semibold text-black mt-2">Women's Sarees</li>
                    </ul>
                </div>

                {sections.map((item) => (
                    <div key={item} className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                        <span className="font-semibold text-xs">{item}</span>
                    </div>
                ))}

                <div className="p-4 border-b">
                    <h3 className="font-semibold text-xs mb-4">PRICE</h3>
                    <input type="range" className="w-full" />

                    <div className="flex justify-between mt-4 gap-2">
                        <select className="border px-2 py-1 text-sm rounded w-full">
                            <option>Min</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>1500</option>
                            <option>2000</option>
                        </select>
                        <select className="border px-2 py-1 text-sm rounded w-full">
                            <option>Max</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;