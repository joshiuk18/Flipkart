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
                    <p className="font-semibold text-xs mb-3">CATEGORIES</p>
                    <ul className="text-gray-500">
                        <li className="flex cursor-pointer">
                            Clothing and Accessories
                        </li>
                        <li className="flex cursor-pointer">
                            Sarees and Saree Essentials
                        </li>
                        <li className="flex cursor-pointer">
                            Sarees
                        </li>
                        <li className="font-semibold text-black mt-2">
                            Women's Sarees
                        </li>
                    </ul>
                </div>

                {sections.map((item) => (
                    <div key={item} className="flex px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                        <span className="font-semibold text-xs">{item}</span>
                    </div>
                ))}

                <div className="p-4 border-b">
                    <h3 className="font-semibold text-xs mb-4">
                        PRICE
                    </h3>
                    <input
                        type="range"
                        className="w-full"
                    />
                    <div className="flex justify-between mt-4">
                        <select className="border-2 px-2 py-1 text-sm rounded">
                            <option>Min</option>
                            <option>1000</option>
                            <option>5000</option>
                            <option>10000</option>
                        </select>
                        <span>to</span>
                        <select className="border-2 px-2 py-1 text-sm rounded">
                            <option>Max</option>
                            <option>10000</option>
                            <option>20000</option>
                            <option>30000</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar