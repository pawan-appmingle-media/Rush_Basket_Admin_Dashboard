import { useState } from "react";

const InventoryProduct = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Electronics", image: "https://via.placeholder.com/50", inventory: 10 },
    { id: 2, name: "Product 2", category: "Clothing", image: "https://via.placeholder.com/50", inventory: 5 },
    { id: 3, name: "Product 3", category: "Home Appliances", image: "https://via.placeholder.com/50", inventory: 0 },
  ]);

  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(filter.toLowerCase()) ||
      product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleEdit = (id) => {
    const newInventory = prompt(`Edit inventory for product ID ${id}:`);
    if (newInventory !== null) {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, inventory: Number(newInventory) } : product
      );
      setProducts(updatedProducts);
    }
  };

  // Function to determine the inventory color class
  // const getInventoryColor = (inventory) => {
  //   if (inventory === 0) return "text-dark-red"; // Custom class for dark red
  //   if (inventory < 10) return "text-red-600"; // Tailwind CSS red
  //   if (inventory > 20) return "text-green-600"; // Tailwind CSS green
  //   return "text-yellow-600"; // Tailwind CSS yellow
  // };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Inventory</h2>

        {/* Filter Input */}
        <div className="mb-6 flex justify-end">
          <div className="w-1/4">
            <label
              htmlFor="filter"
              className="block text-gray-600 mb-2 font-medium"
            >
              Search
            </label>
            <input
              type="text"
              id="filter"
              placeholder="Search....."
              value={filter}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-[#86C3D7] text-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Product Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Product Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Product Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Inventory</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {product.inventory}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-blue-950 hover:bg-[#74b9d0] rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryProduct;
