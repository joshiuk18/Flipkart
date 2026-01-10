const Sidebar = () => {

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

    return (
        <div>
            <div className="bg-white border-r text-sm">
                <div className="p-4 border-y font-semibold text-lg">
                    Filters
                </div>
                <div className="p-4 border-b">
                    <h3 className="font-semibold text-xs mb-3">
                        CATEGORIES
                    </h3>
                    <ul className="space-y-2 text-gray-500">
                        <li className="flex items-center gap-1 cursor-pointer">
                            Clothing and Accessories
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer">
                            Sarees and Saree Essentials
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer">
                            Sarees
                        </li>
                        <li className="font-semibold text-black mt-2">
                            Women's Sarees
                        </li>
                    </ul>
                </div>

                {sections.map((item) => (
                    <div key={item} className="flex items-center justify-between px-4 py-3 border-b cursor-pointer hover:bg-gray-50">
                        <span className="font-semibold text-xs">{item}</span>
                    </div>
                ))}

                <div className="p-4 border-b">
                    <h3 className="font-semibold text-xs mb-4">
                        PRICE
                    </h3>
                    <input
                        type="range"
                        className="w-full accent-blue-600"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <select className="border px-2 py-1 text-sm rounded">
                            <option>Min</option>
                            <option>₹0</option>
                            <option>₹500</option>
                            <option>₹1000</option>
                        </select>
                        <span className="text-gray-500">to</span>
                        <select className="border px-2 py-1 text-sm rounded">
                            <option>₹1500+</option>
                            <option>₹2000+</option>
                            <option>₹3000+</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar