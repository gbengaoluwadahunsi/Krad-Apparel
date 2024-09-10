import { useState } from 'react';
import { motion } from 'framer-motion';

const TailorDesign = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the data to backend or sketch API
    console.log('Form submitted with file:', file);
  };

  return (
    <section className="py-28 bg-gray-50 px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upload Your Picture for Custom Designs
        </motion.h2>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-ash p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Measurements (Height, Waist, etc.)
            </label>
            <input 
              type="text" 
              placeholder="Enter your measurements"
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload a Full-Body Picture
            </label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              required
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Generate Design
            </motion.button>
          </div>
        </form>

        {/* Preview Section */}
        {file && (
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p className="text-center text-gray-700">Uploaded Image:</p>
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded Preview"
                className="w-64 h-64 object-cover mt-4"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TailorDesign;
