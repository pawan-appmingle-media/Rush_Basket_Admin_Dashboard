import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// navigation
import { useNavigate } from "react-router-dom";

// Dummy data for products
const products = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
    quantity: 10,
    price: 200,
    sellprice: 10,
    visibility: "Published",
  },
  {
    id: 2,
    name: "Banana",
    image:
      "https://imgs.search.brave.com/RuvMQxxlistne_eiXZ0StrC_qcW8zJeiT92Cjrej8jE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2JhbmFu/YS1pc29sYXRlZC1j/bGlwcGluZy1wYXRo/LW1hY3JvLTI2MG53/LTI0NzIyMDQ3MjUu/anBn",
    quantity: 20,
    price: 120,
    sellprice: 10,
    visibility: "Draft",
  },
  // additional products...
];

const AllProduct = () => {
  const navigate = useNavigate();

  const handleeditallproduct = () => {
    navigate("/allproducts-edit"); // desired path
  };
  const handlepreviewallproduct = () => {
    navigate("/allproducts-preview"); // desired path
  };

  return (
    <div className="w-3xl m-2 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-semibold text-center mb-4">All Products</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Product Name
            </th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Image
            </th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Quantity
            </th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Price
            </th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Sell Price
            </th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Visibility
            </th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-black-700">
                {product.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <img
                  src={product.image}
                  alt={product.name}
                  width={"auto"}
                  height={"auto"}
                  className="h-12 w-12 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {product.quantity}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {product.price.toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {product.sellprice.toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm">
                <span
                  className={`px-2 py-1 rounded ${
                    product.visibility === "Published"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {product.visibility}
                </span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                <button className="text-xl" onClick={handleeditallproduct}>
                  <FaEdit />
                </button>
                <button className="text-xl mx-2" onClick={handlepreviewallproduct}>
                  <FaEye />
                </button>
                <button className="text-xl">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
