import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddProductCategories = () => {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Category Added:', categoryName);
    
    if (image) {
      console.log('Image Uploaded:', image.name);
      // Handle the image upload logic, e.g., send to an API
    }

    // Reset the form after submission
    setCategoryName('');
    setImage(null);
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate('/categories'); // Replace with the actual route of your CategoryProduct page
  };

  return (
    <div className="container mx-auto mt-5 p-10">
      <h2 className="text-2xl font-bold mb-4 ml-9">Add New Category</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg mx-10 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryName">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter category name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUpload">
            Upload Image
          </label>
          <input
            type="file"
            id="imageUpload"
            onChange={handleImageChange}
            accept="image/*"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Category
          </button>
          <button
            type="button" // Prevents it from submitting the form
            onClick={handleBackClick} // Handle the back button click
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductCategories;
