const Navbar = () => {

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
    ]

    return (
        <header>
            <div className="w-full">
                <div className="bg-blue-500 text-white px-6 py-2 flex items-center justify-center gap-6">
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold italic">Flipkart</span>
                        <span className="text-xs font-semibold italic text-yellow-300">Explore Plus</span>
                    </div>
                    <div className="flex flex-1 max-w-2xl bg-white rounded-sm overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            className="flex-1 px-4 py-2 text-sm text-black outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <button className="bg-white text-blue-500 px-6 py-1 rounded-sm font-semibold">Login</button>
                        <span className="cursor-pointer">Become a Seller</span>
                        <span className="flex items-center gap-1 cursor-pointer">More</span>
                        <span className="flex items-center gap-1 cursor-pointer">Cart</span>
                    </div>
                </div>
                <div className="bg-white border-b px-6 py-2">
                    <ul className="flex items-center justify-between text-sm font-medium">
                        {items.map((item) => (
                            <li key={item} className="flex items-center gap-1 cursor-pointer hover:text-blue-500">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
