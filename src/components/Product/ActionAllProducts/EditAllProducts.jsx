import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditAllProducts = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const mockProduct = {
    name: "Sample Product",
    category: "Electronics",
    subcategory: "Smartphones",
    quantity: 100,
    price: 999,
    sellPrice: 899,
    description: "This is a sample description of the product.",
    images: [
      { id: 1, url: "https://m.media-amazon.com/images/I/41who+9qCLL._SR480,440_.jpg" },
      { id: 2, url: "https://m.media-amazon.com/images/I/41who+9qCLL._SR480,440_.jpg" },
      { id: 3, url: "https://m.media-amazon.com/images/I/414ly0wsjYL._AC_SY200_.jpg" },
      { id: 4, url: "https://via.placeholder.com/200" },
    ],
  };

  const [product, setProduct] = useState(mockProduct);
  const [visibility, setVisibility] = useState("published");
  const [discountType, setDiscountType] = useState("percentage");

  const handleImageDelete = (id) => {
    setProduct({
      ...product,
      images: product.images.filter((image) => image.id !== id),
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file, index) => ({
      id: product.images.length + index + 1,
      url: URL.createObjectURL(file),
    }));
    setProduct({
      ...product,
      images: [...product.images, ...newImages],
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">Edit Product</h1>

      <form>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.name} />
        </div>

        {/* Category and Subcategory */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700">Category</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.category} />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Subcategory</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.subcategory} />
          </div>
        </div>

        {/* Price and Sell Price */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700">Price</label>
            <input type="number" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.price} />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Sell Price</label>
            <input type="number" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.sellPrice} />
          </div>
        </div>

        {/* Quantity and Discount Type */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700">Quantity</label>
            <input type="number" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.quantity} />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Discount Type</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="discountType"
                  value="percentage"
                  checked={discountType === "percentage"}
                  onChange={(e) => setDiscountType(e.target.value)}
                />
                <span className="ml-2">Percentage</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="discountType"
                  value="rupees"
                  checked={discountType === "rupees"}
                  onChange={(e) => setDiscountType(e.target.value)}
                />
                <span className="ml-2">Rupees</span>
              </label>
            </div>
          </div>
        </div>

        {/* Weight and SKU/Product Code */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700">Weight (in grams)</label>
            <input type="number" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter weight" />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">SKU or Product Code</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter SKU or product code" />
          </div>
        </div>

        {/* Product Information */}
        <div className="mb-4">
          <label className="block text-gray-700">Product Information</label>
          <textarea className="w-full border border-gray-300 p-2 rounded" defaultValue={product.description}></textarea>
        </div>

        {/* Product Images */}
        <div className="mb-4">
          <label className="block text-gray-700">Product Images</label>
          <div className="flex flex-wrap gap-4 mb-2">
            {product.images.map((image) => (
              <div key={image.id} className="relative w-32 h-32">
                <img src={image.url} alt="Product" className="w-full h-full object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleImageDelete(image.id)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input type="file" multiple onChange={handleImageUpload} className="w-full border border-gray-300 p-2 rounded" />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea className="w-full border border-gray-300 p-2 rounded" defaultValue={product.description}></textarea>
        </div>

        {/* Visibility */}
        <div className="mb-4">
          <label className="block text-gray-700">Visibility</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="visibility"
                value="published"
                checked={visibility === "published"}
                onChange={(e) => setVisibility(e.target.value)}
              />
              <span className="ml-2">Published</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="visibility"
                value="draft"
                checked={visibility === "draft"}
                onChange={(e) => setVisibility(e.target.value)}
              />
              <span className="ml-2">Draft</span>
            </label>
          </div>
        </div>

        {/* Button Container */}
        <div className="flex justify-between mt-6">
          <button type="submit" className="text-white px-4 py-2 rounded" style={{ backgroundColor: '#172554' }}>
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleGoBack}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-3 rounded"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAllProducts;
