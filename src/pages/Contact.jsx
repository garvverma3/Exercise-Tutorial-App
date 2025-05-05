
import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally would send this to a server, but for this demo we'll just show a toast
    toast.success("Message sent successfully! We'll get back to you soon.", {
      description: `Thank you for contacting us, ${formData.name}!`,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about FitFlex? Want to provide feedback or suggest new features? We'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-[#9b87f5]">support@fitflex.example.com</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">123 Fitness Street<br/>Wellness City, Health State 12345</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9b87f5] focus:border-[#9b87f5]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9b87f5] focus:border-[#9b87f5]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9b87f5] focus:border-[#9b87f5]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#9b87f5] text-white px-6 py-2 rounded-md hover:bg-[#8a77e0] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
