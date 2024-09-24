import { useState } from 'react';

const Spinner = () => (
  <div className="loader"></div> // You can style this as needed
);

const TailorDesign = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [colors, setColors] = useState('');
  const [style, setStyle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState(''); // Set country as an empty string
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const MAX_WORD_COUNT = 50; // Set a maximum word count limit for the prompt

  const query = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
      {
        headers: {
          Authorization: `Bearer ${ import.meta.env.VITE_HUGGING_FACE_API_KEY}`, // Use environment variable for the token
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json(); // Get error details if available
      throw new Error(`Error: ${response.status} - ${errorDetails?.error || response.statusText}`);
    }

    const result = await response.blob();
    return URL.createObjectURL(result); // Create a URL for the image blob
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Check if the description is provided
    if (!description || description.trim().length === 0) {
      setError("Description is required.");
      setLoading(false);
      return;
    }

    // Count the words in the description and the other fields for the prompt
    const promptParts = [
      `Design a sketch of a female outfit in ${style || "casual"} style from ${country || "England"}.`, // Default country in prompt
      "Details:"
    ];

    if (height) promptParts.push(`height: ${height} cm`);
    if (weight) promptParts.push(`weight: ${weight} kg`);
    if (colors) promptParts.push(`colors: ${colors}`);
    promptParts.push(`description: ${description}`);

    const prompt = promptParts.join(', '); // Join all parts to form the final prompt
    const wordCount = prompt.split(/\s+/).length; // Count the number of words

    // Check if the total word count exceeds the maximum limit
    if (wordCount > MAX_WORD_COUNT) {
      alert(`The total word count exceeds the limit of ${MAX_WORD_COUNT} words. Current count: ${wordCount}.`);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await query({ inputs: prompt });
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError(`Failed to generate the design: ${err.message}`);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'sketch.png';
      link.click();
    }
  };

  return (
    <div className="container mx-auto py-28 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row  lg:gap-4 items-center justify-center">
      <div className="w-full lg:w-1/2 flex flex-col h-full"> {/* Ensure equal height */}
        <h1 className="text-3xl lg:text-5xl text-blue-900 font-bold text-center mb-10">
          Create Your Custom Outfit and Fashion
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 flex-grow"> {/* Use flex-grow for form to fill available space */}
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (in cm):</label>
            <input
              id="height"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g., 170"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (in kg):</label>
            <input
              id="weight"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g., 60"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="colors" className="block text-sm font-medium text-gray-700">Favorite Colors:</label>
            <input
              id="colors"
              type="text"
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              placeholder="e.g., red, blue"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700">Style (e.g., casual, formal):</label>
            <input
              id="style"
              type="text"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              placeholder="e.g., casual"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country:</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder=" e.g., England"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your outfit..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder-gray-400"
              rows={4}
            />
            <p className="text-sm text-gray-500 mt-1">Maximum {MAX_WORD_COUNT} words. Current count: {description.split(/\s+/).filter(Boolean).length}</p>
          </div>
          <button type="submit" className="w-fit bg-blue-600 text-white p-2 rounded-md">
            {loading ? 'Generating Sketch...' : 'Generate Sketch'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      
      {/* Right Side Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full"> {/* Ensure equal height */}
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        ) : generatedImage ? (
          <div className=" lg:relative mt-6 w-full max-w-xs lg:max-w-none flex-grow"> {/* Set width to fit the content */}
            <h2 className="text-lg font-medium text-center">Generated Sketch:</h2>
            <img src={generatedImage} alt="Generated Sketch" className="mx-auto mt-2" />
            <button onClick={handleDownload} className=" mt-2 lg:mt-0 lg:absolute bottom-1 left-1 inline-block bg-green-600 text-white py-2 px-4 rounded-md">
              Download Sketch
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-600 flex-grow">
            <p>No sketch yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TailorDesign;
