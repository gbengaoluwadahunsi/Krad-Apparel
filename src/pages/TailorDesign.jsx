import  { useState } from 'react';

const TailorDesign = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [colors, setColors] = useState('');
  const [style, setStyle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const prompt = `Design a female outfit in ${style} style from ${country}. Details: height: ${height} cm, weight: ${weight} kg, colors: ${colors}, description: ${description}.`;

    try {
      const imageBlob = await queryDesign({ inputs: prompt });
      const imageUrl = URL.createObjectURL(imageBlob);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError('Failed to generate the design. Please try again.');
      console.error('Error:', err);
    }

    setLoading(false);
  };

  const queryDesign = async (data) => {
    const response = await fetch('https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HUGGING_FACE}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch the design.');
    }

    const result = await response.blob();
    return result;
  };

  return (
    <div className="container mx-auto py-28 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl lg:text-5xl text-blue-900  font-bold text-center mb-10">Create Your Custom Outfit and Fashion</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (in cm):</label>
              <input
                id="height"
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (in kg):</label>
              <input
                id="weight"
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="colors" className="block text-sm font-medium text-gray-700">Favorite Colors:</label>
              <input
                id="colors"
                type="text"
                value={colors}
                onChange={(e) => setColors(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="style" className="block text-sm font-medium text-gray-700">Style (e.g., casual, formal):</label>
              <input
                id="style"
                type="text"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country:</label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description of the Dress/Shirt:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <button
              type="submit"
              className="w-fit text-blue-900 bg-yellow-400 hover:bg-yellow-300 hover:scale-110  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Design'}
            </button>
          </form>

          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>

        <div className="w-full md:w-1/2">
          {generatedImage ? (
            <img src={generatedImage} alt="Custom design" className="w-full h-auto rounded-lg shadow-lg" />
          ) : (
            <div className="bg-gray-200 w-full h-96 rounded-lg flex items-center justify-center shadow-lg">
              <p className="text-gray-600 text-lg font-medium">Ready-Made Dress Image</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TailorDesign;