import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const TailorDesign = () => {
  const [file, setFile] = useState(null);
  const [sketch, setSketch] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for API request
  const [formData, setFormData] = useState({
    name: '',
    measurements: '',
    design: '',
  });

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formDataToSend = new FormData();
    formDataToSend.append('file', file);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('measurements', formData.measurements);
    formDataToSend.append('design', formData.design);
  
    try {
      const sketchUrl = await generateDesign(formDataToSend); // Sending the form data
      setSketch(sketchUrl);
    } catch (error) {
      console.error('Error generating design:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const generateDesign = async (formData) => {
    const apiKey = 'YOUR_HUGGING_FACE_API_KEY'; // Replace with your API key
    const apiUrl = 'https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4';
  
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'multipart/form-data',
    };
  
    try {
      const response = await axios.post(apiUrl, formData, { headers });
      return response.data?.generated_images?.[0] || 'https://via.placeholder.com/400x600?text=Image+Not+Generated';
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  };
  
  return (
    <section className="py-28 bg-gray-50 px-8">
      <div className="container mx-auto flex flex-wrap">
        {/* Form Section on the left */}
        <div className="w-full md:w-1/2 px-4">
          <motion.h2
            className="text-4xl font-bold text-center md:text-left mb-12 text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Create Your Custom Outfit Design
          </motion.h2>

          <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Measurements (Height, Weight, etc.)
              </label>
              <input
                type="text"
                name="measurements"
                placeholder="Enter your measurements"
                value={formData.measurements}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Design Preferences
              </label>
              <textarea
                name="design"
                placeholder="Describe the outfit you'd like to design"
                value={formData.design}
                onChange={handleChange}
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
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Design'}
              </motion.button>
            </div>
          </form>
        </div>

        {/* Sketch/Generated Design Section on the right */}
        <div className="w-full md:w-1/2 px-4 mt-12 md:mt-0">
          {sketch ? (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 text-lg font-semibold mb-4">Generated Sketch:</p>
              <img
                src={sketch}
                alt="Generated Design"
                className="w-full h-auto object-cover rounded-lg"
              />
              <motion.button
                className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Design
              </motion.button>
            </div>
          ) : (
            <div className="bg-blue-500 my-20 h-40 p-8 rounded-lg shadow-lg  text-center">
              <p className="text-gray-700 text-lg font-semibold mb-4">Your sketch will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TailorDesign;
