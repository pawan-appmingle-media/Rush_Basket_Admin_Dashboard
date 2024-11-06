import React from "react";
import logo1 from '../../../assets/onion.png';

const PreviewAllProducts = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#172554' }}>
        Product Preview
      </h2>

      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left Column: Product Details */}
        <div className="flex-1 space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Product Name</label>
            <p className="text-gray-600">Onion</p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Category</label>
            <p className="text-gray-600">Vegetables</p>
          </div>

          {/* Subcategory */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Subcategory</label>
            <p className="text-gray-600">Root Vegetables</p>
          </div>

          {/* MRP */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">MRP</label>
            <p className="text-gray-600">₹50</p>
          </div>

          {/* Sell Price */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Sell Price</label>
            <p className="text-gray-600">₹45</p>
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Product Description</label>
            <p className="text-gray-600">Fresh onions sourced from organic farms.</p>
          </div>
        </div>

        {/* Center Column: Product Image */}
        <div className="flex-shrink-0">
          <img
            src={logo1}
            alt="Product Preview"
            className="h-80 w-80 rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Column: Additional Details */}
        <div className="flex-1 space-y-6">
          {/* Discount */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Discount</label>
            <p className="text-gray-600">10% Off</p>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Quantity</label>
            <p className="text-gray-600">100 Units</p>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Weight</label>
            <p className="text-gray-600">500g</p>
          </div>

          {/* SKU */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">SKU</label>
            <p className="text-gray-600">SKU98765</p>
          </div>

          {/* Visibility */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Visibility</label>
            <p className="text-gray-600">Published</p>
          </div>

          {/* Additional Product Info */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">Additional Information</label>
            <p className="text-gray-600">This product is available in multiple sizes and packaging options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewAllProducts;
