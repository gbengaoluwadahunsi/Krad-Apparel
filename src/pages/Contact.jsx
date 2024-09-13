import { useState } from 'react';
import emailjs from '@emailjs/browser';
import machine from "../assets/images/machine.mp4";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 h-[100vh] lg:h-[96vh] gap-1 flex p-4 w-screen mx-auto lg:px-32">
      {/* Left side: 3D scene */}
      <div className="basis-1/2 hidden md:block">
        <video 
          src={machine} 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover">
        </video>
      </div>
      {/* Right side: Contact form */}
      <div className="w-full md:w-1/2 flex items-center justify-center border-4 border-dashed border-blue-600 p-8 py-32 md:py-16 bg-gray-100">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="mb-4 text-4xl lg:text-5xl font-extrabold text-blue-900">Get In Touch</h2>
          <p className="text-lg font-mono mb-4 text-blue-500">Please, we would love to hear from you so we can serve you better.</p>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
          {submitStatus === 'success' && (
            <p className=" mt-2 lg:mt-4 text-green-600">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-2 lg:mt-4 text-red-600">Error sending message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
