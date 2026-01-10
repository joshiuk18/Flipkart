import Products from "./Products.jsx"

function Clothing() {
    return (
        <div>
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold mb-4">
                    Women's Sarees &nbsp;
                    <span className="text-sm text-gray-500">
                        (Showing 1 - 40 products)
                    </span>
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Products.map((item) => (
                        <div key={item.id} className="border rounded-sm hover:shadow-2xl transition">

                            <div className="relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-96 object-cover"
                                />
                                <span className="absolute top-2 left-2 text-sm text-gray-500 bg-white px-1">Sponsored</span>
                                <span className="absolute top-2 right-2 text-2xl text-gray-500 bg-white px-1">&#9825;</span>
                            </div>

                            <div className="p-2">
                                <h3 className="text-sm font-semibold text-gray-700">{item.brand}</h3>
                                <p className="text-sm text-gray-600 truncate">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.color}</p>

                                <div className="flex gap-2 mt-2">
                                    <span className="text-lg font-semibold">&#8377;{item.price}</span>
                                    <span className="text-sm text-gray-400 line-through">&#8377;{item.oldPrice}</span>
                                    <span className="text-sm text-green-600 font-semibold">{item.discount}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Clothing