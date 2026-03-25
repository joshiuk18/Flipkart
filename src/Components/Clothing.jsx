import Products from "./Products.jsx";

function Clothing() {
    return (
        <div className="px-2 md:px-6 py-4">

            <h2 className="text-lg md:text-xl font-semibold mb-4">
                Women's Sarees
                <span className="block md:inline text-xs md:text-sm text-gray-500 md:ml-2">(Showing 1 - 40 products</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">

                {Products.map((item) => (
                    <div key={item.id} className="bg-white border rounded-sm hover:shadow-xl transition duration-300 cursor-pointer">

                        <div className="relative bg-white h-60 sm:h-80 md:h-80 lg:h-88 overflow-hidden">
                            <img src={item.img} className="w-full h-full object-cover md:object-contain" alt={item.title} />
                            <span className="absolute top-2 left-2 text-[10px] text-gray-500 bg-white px-1">Sponsored</span>
                            <span className="absolute top-2 right-2 text-lg text-gray-500 bg-white px-1 rounded-full">
                                <i className="fa-regular fa-heart"></i>
                            </span>
                        </div>

                        <div className="p-3">
                            <h3 className="text-sm font-semibold text-gray-700">{item.brand}</h3>
                            <p className="text-xs text-gray-600 truncate mt-1">{item.title}</p>
                            <p className="text-xs text-gray-400 mt-1">{item.color}</p>

                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                <span className="text-base md:text-lg font-semibold">&#8377;{item.price}</span>
                                <span className="text-xs text-gray-400 line-through">&#8377;{item.oldPrice}</span>
                                <span className="text-xs text-green-600 font-semibold">{item.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clothing;