import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Apple",
    category: "Fruits",
    subcategories: [
      {
        name: "Fresh Apples",
        image:
          "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
      },
      {
        name: "Dried Apples",
        image:
          "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
      },
    ],
    image:
      "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruits",
    subcategories: [
      {
        name: "Fresh Bananas",
        image:
          "https://imgs.search.brave.com/RuvMQxxlistne_eiXZ0StrC_qcW8zJeiT92Cjrej8jE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2JhbmFu/YS1pc29sYXRlZC1j/bGlwcGluZy1wYXRo/LW1hY3JvLTI2MG53/LTI0NzIyMDQ3MjUu/anBn",
      },
      {
        name: "Dried Bananas",
        image:
          "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg",
      },
    ],
    image:
      "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg",
  },
  {
    id: 3,
    name: "Carrot",
    category: "Vegetables",
    subcategories: [
      {
        name: "Fresh Carrots",
        image:
          "https://imgs.search.brave.com/yajyVh8_v4hoB22eRg-yutkBC9f4hAMWWQjBr6f2nhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2NhcnJv/dHMtaXNvbGF0ZWQt/Y2Fycm90LW9uLXdo/aXRlLTI2MG53LTI0/NzQ3OTI2MzkuanBn",
      },
    ],
    image:
      "https://imgs.search.brave.com/yajyVh8_v4hoB22eRg-yutkBC9f4hAMWWQjBr6f2nhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2NhcnJv/dHMtaXNvbGF0ZWQt/Y2Fycm90LW9uLXdo/aXRlLTI2MG53LTI0/NzQ3OTI2MzkuanBn",
  },
  {
    id: 4,
    name: "Milk",
    category: "Dairy Product",
    subcategories: [
      {
        name: "Almond Milk",
        image:
          "https://imgs.search.brave.com/Vkvd-jF9PM7bHpK9rxBHczzGz2XTug4vI45-4n-S7AM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/Nzc4MDMxL3Bob3Rv/L21pbGstYm90dGxl/LWNsaXBwaW5nLXBh/dGguanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJDM2RtSlB6/c0JTR25wZlJ0WTB3/ampiNUctTE9MdnhQ/NFpObXVfeUo4UWs9",
      },
    ],
    image:
      "https://imgs.search.brave.com/Vkvd-jF9PM7bHpK9rxBHczzGz2XTug4vI45-4n-S7AM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/Nzc4MDMxL3Bob3Rv/L21pbGstYm90dGxl/LWNsaXBwaW5nLXBh/dGguanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJDM2RtSlB6/c0JTR25wZlJ0WTB3/ampiNUctTE9MdnhQ/NFpObXVfeUo4UWs9",
  },
  {
    id: 5,
    name: "Bread",
    category: " Bakery Products",
    subcategories: [
      {
        name: "White Bread",
        image:
          "https://imgs.search.brave.com/kLj92ZKztt-rbKxX2Jb2Nr6QW8ieUbRFpnVjraHngv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9naGFy/c3R1ZmYuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAz/L0JyaXRhbm5pYS1C/cm93bi1CcmVhZC00/MDBnLmpwZw",
      },
    ],
    image:
      "https://imgs.search.brave.com/kLj92ZKztt-rbKxX2Jb2Nr6QW8ieUbRFpnVjraHngv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9naGFy/c3R1ZmYuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAz/L0JyaXRhbm5pYS1C/cm93bi1CcmVhZC00/MDBnLmpwZw",
  },
  {
    id: 6,
    name: "Haldiram Snacks",
    category: "Snacks",
    subcategories: [
      { name: "Chips", image: "https://via.placeholder.com/50?text=Chips" },
      { name: "Namkeen", image: "https://via.placeholder.com/50?text=Namkeen" },
    ],
    image: "https://via.placeholder.com/50x50?text=Snacks",
  },
];

const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

const CategoriesProduct = () => {
  const navigate=useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  


  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Function to handle showing subcategories
  const handleShowSubcategories = (product) => {
    setSelectedProduct(product);
  };

  // Function to go back to product list
  const handleBackToCategories = () => {
    setSelectedProduct(null);
  };
   
    const handleAddProductCategory = () => {
      navigate('/add-categories');
    };
    const handleAddProductSubcategory=()=>{
      navigate('/add-subcategories');
    }

  return (
    <div className="p-6   text-center">
      <h2 className="text-2xl font-bold mb-6 text-left">
        Product Categories List
      </h2>

      {/* Display Subcategories or Products */}
      {selectedProduct ? (
        <div>
        
          <div className="flex justify-between items-center  "
          style={{marginBottom:20}}>
      <div>
        
      <button
            onClick={handleBackToCategories}
            className="p-3  text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-700"
            style={{backgroundColor:'#172554'}}
          >
            Back to Categories
          </button>
        </div> {/* Empty div for spacing */}
      <button
        onClick={handleAddProductSubcategory}
        className="py-2 px-4  text-white rounded-lg"
        style={{backgroundColor:'#172554'}}
      >
        + Add Subcategory
      </button>
    </div>
          
          <h3 className="text-xl font-bold mb-2">
            Subcategories of {selectedProduct.name}
          </h3>
          <table className="min-w-full bg-white border text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">
                  Subcategory Name
                </th>
                <th className="py-2 px-4 border-b text-left">Image</th>
              </tr>
            </thead>
            <tbody>
              {selectedProduct.subcategories.map((subcategory, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-left">
                    {subcategory.name}
                  </td>
                  <td className="py-2 px-4 border-b text-left">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Render Products
        <div>
          {/* Category Filter Buttons */}
          <div className="mb-4 flex flex-wrap justify-start gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-4 rounded-lg focus:outline-none ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
            <button
                onClick={handleAddProductCategory}
                className="ml-auto py-2 px-4  text-white rounded-lg  "
                style={{backgroundColor:'#172554'}}
              >
                + Add Category
              </button>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto rounded-lg mx-auto mt-4">
            <table className="min-w-full bg-white border text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left text-base font-bold text-black-500">
                    Category Name
                  </th>
                  <th className="py-2 px-4 border-b text-left">Image</th>
                  <th className="py-2 px-4 border-b text-left">
                    Subcategories
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border-b">{product.category}</td>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleShowSubcategories(product)}
                        className="text-black-500 flex items-center"
                      >
                        <FaEye className="mr-2 text-center" /> {/* Using the Eye icon */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesProduct;
