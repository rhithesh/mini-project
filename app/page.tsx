import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black">Mini Project</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
          <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
          <button className="bg-green-800 text-white px-4 py-2 rounded-full flex items-center">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl text-black md:text-6xl font-bold leading-tight">
              Sustainable farming solutions for a better tomorrow.
            </h1>
            <p className="text-gray-600 text-lg">
              Bringing cutting-edge technology and innovative practices to the world of agriculture, helping you maximize yields while keeping sustainability in mind.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-800 text-white px-6 py-3 rounded-full flex items-center">
                Get Started Today
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border text-black border-gray-300 px-6 py-3 rounded-full">
                How It Works
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-green-50 rounded-2xl p-4 h-48">
                <img src="/api/placeholder/400/320" alt="Farm visualization" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="bg-green-800 text-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Join us in transforming the future of farming</h3>
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-4 mt-12">
              <div className="bg-amber-100 rounded-2xl p-4 h-48">
                <img src="/api/placeholder/400/320" alt="Smart farming" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">A Greener, More Productive World</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Embrace Eco-Friendly Practices</h3>
                <ChevronRight className="h-6 w-6 text-green-800" />
              </div>
              <p className="text-gray-600 mt-2">
                Adopt sustainable methods that not only boost productivity but also protect our natural resources, ensuring the long-term health of your land and the surrounding environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Leverage Cutting-Edge Technology</h3>
                <ChevronRight className="h-6 w-6 text-green-800" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Save Water Efficiently</h3>
                <ChevronRight className="h-6 w-6 text-green-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Insights, Trends, and Tips from Industry Experts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border">
              <img src="/api/placeholder/400/320" alt="Future of Agriculture" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Future of Sustainable Agriculture: 5 Key Trends to Watch</h3>
                <button className="text-green-800 font-semibold flex items-center">
                  Read more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border">
              <img src="/api/placeholder/400/320" alt="Smart Irrigation" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">How Smart Irrigation Saves Water and Boosts Efficiency</h3>
                <button className="text-green-800 font-semibold flex items-center">
                  Read more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-12 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to our newsletter for the latest updates</h2>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-gray-900"
            />
            <button className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;