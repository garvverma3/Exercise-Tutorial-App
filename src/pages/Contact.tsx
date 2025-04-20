
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <p className="text-gray-600 mb-6">
              Have questions about our workouts or need support? We're here to help!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9b87f5] text-white py-3 px-6 rounded-lg hover:bg-[#7e69ab] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center text-gray-600">
            <p className="mb-2">
              <strong>Email:</strong> support@fitflow.example.com
            </p>
            <p>
              <strong>Hours:</strong> Monday-Friday, 9am-5pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
