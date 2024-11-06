import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [discountType, setDiscountType] = useState("rupees");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [sku, setSku] = useState("");
  const [visibility, setVisibility] = useState("publish");
  const [description, setDescription] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...images, ...Array.from(e.target.files)]);
  };

  const handleDiscountAmount = () => {
    const discountAmount = mrp - sellPrice;
    const discountPercentage = ((discountAmount / mrp) * 100).toFixed(2);
    return discountType === "rupees" ? `${discountAmount} ₹` : `${discountPercentage}%`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      category,
      subCategory,
      mrp,
      sellPrice,
      discountType,
      quantity,
      weight,
      sku,
      visibility,
      description,
      productInfo,
      images,
    });
  };

  const subCategoriesData = {
    electronics: ["Mobile", "Laptop", "Camera"],
    kitchen: ["Mixer", "Microwave", "Cookware"],
    fashion: ["Men's Wear", "Women's Wear", "Accessories"],
    dailyproduct: ["Toothpaste", "Soap", "Shampoo"],
    groceries: ["Rice", "Wheat", "Lentils"],
    vegetables: ["Carrot", "Potato", "Onion"],
    gym: ["Protein", "Vitamins", "Supplements"],
    drinks: ["Juices", "Soft Drinks", "Energy Drinks"],
    toys: ["Electronic Toys", "Learning Toys", "Outdoor Toys"],
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-5">Add Product</h2>
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700">Product Name*</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700">Category*</label>
            <select
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubCategory("");
              }}
              required
            >
              <option value="">Select a category</option>
              {Object.keys(subCategoriesData).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {category && (
            <div>
              <label className="block text-base font-medium text-gray-700">Subcategory*</label>
              <select
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                required
              >
                <option value="">Select a subcategory</option>
                {subCategoriesData[category].map((subCat) => (
                  <option key={subCat} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-base font-medium text-gray-700">MRP*</label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700">Sell Price*</label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              required
            />
            <p className="text-sm  text-red-500 mt-2">Discount: {handleDiscountAmount()}</p>
          </div>

          {/* discount-radio  */}

           {/* Discount Type */}
        <div className="mb-3.5">
          <label className="block text-base font-medium text-gray-700">
            Discount Type*
          </label>
          <div className="flex mt-2">
          <label className="block text-base font-medium text-gray-700 mr-4">Rupees</label>
            <label className="mr-4">
              <input
                type="radio"
                name="discountType"
                value="rupees"
                 className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
                checked={discountType === "rupees"}
                onChange={() => setDiscountType("rupees")}
              />
              {/* <span className="ml-2">Rupees</span> */}
            </label>
            
            <label className="block text-base font-medium text-gray-700 mr-4">Percentage</label>
            <label className="mr-4">
              <input
                type="radio"
                name="discountType"
                value="percentage"
                 className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
                checked={discountType === "percentage"}
                onChange={() => setDiscountType("percentage")}
              />
              </label>
              {/* <span className="ml-2">Percentage</span> */}
          </div>
        </div>

        {/*  */}
        <div>
            <label className="block text-base font-medium text-gray-700">Quantity*</label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
        {/* product information */}

          <div className="col-span-2">
            <label className="block text-base font-medium text-gray-700">Product Information*</label>
            <textarea
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={productInfo}
              onChange={(e) => setProductInfo(e.target.value)}
              required
            />
          </div>

          {/* <div>
            <label className="block text-lg font-medium text-gray-700">Quantity*</label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div> */}

          <div>
            <label className="block text-base font-medium text-gray-700">Weight*</label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700">Product Code Or SKU* </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-base font-medium text-gray-700">Product Description</label>
            <textarea
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>


           {/* Product Images */}
        <div className=" col-span-2 mb-5">
          <label className="block text-base font-medium text-gray-700" htmlFor="images">
            Product Images:
          </label>
          <input
            type="file"
            id="images"
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="mt-2 flex flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="w-32 h-32 mr-4 mb-4">
                <img src={URL.createObjectURL(image)} alt='ff' className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-3 text-base text-blue-500"
            onClick={() => document.getElementById("images").click()}
          >
            + Add More Images
          </button>
        </div>
        </div>


{/* visibility */}
        <div className="mb-5">
          <label className="block text-base font-medium text-gray-700">Visibility*</label>
          <div className="flex mt-2">
            <label className="mr-4">
              <input
                type="radio"
                name="visibility"
                value="publish"
                checked={visibility === "publish"}
                onChange={() => setVisibility("publish")}
              />
              <span className="ml-2">Publish</span>
            </label>
            <label>
              <input
                type="radio"
                name="visibility"
                value="draft"
                checked={visibility === "draft"}
                onChange={() => setVisibility("draft")}
              />
              <span className="ml-2">Draft</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="p-4  text-white font-semibold text-base py-3 rounded-lg hover:bg-blue-700"
          style={{backgroundColor:'#172554'}}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
