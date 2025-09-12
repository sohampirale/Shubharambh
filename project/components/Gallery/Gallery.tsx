import React, { useState } from 'react';
import { Camera, Heart, Gift, Flower } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Camera },
    { name: 'Weddings', icon: Heart },
    { name: 'Birthdays', icon: Gift },
    { name: 'Engagements', icon: Heart },
    { name: 'Decorations', icon: Flower }
  ];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: 'Weddings', title: 'Traditional Mandap Wedding', description: 'Beautiful golden mandap with floral decorations' },
    { id: 2, category: 'Weddings', title: 'Destination Wedding Setup', description: 'Elegant beachside wedding arrangement' },
    { id: 3, category: 'Birthdays', title: 'Princess Theme Birthday', description: 'Pink and gold birthday party setup' },
    { id: 4, category: 'Engagements', title: 'Ring Ceremony Decoration', description: 'Romantic engagement ceremony setup' },
    { id: 5, category: 'Decorations', title: 'Rangoli Art Display', description: 'Traditional rangoli with flower petals' },
    { id: 6, category: 'Weddings', title: 'Reception Hall Setup', description: 'Grand reception with lighting and decor' },
    { id: 7, category: 'Birthdays', title: 'Baby Shower Celebration', description: 'Pastel themed baby shower decoration' },
    { id: 8, category: 'Decorations', title: 'Floral Entrance Arch', description: 'Stunning entrance with fresh flowers' },
    { id: 9, category: 'Engagements', title: 'Garden Engagement Party', description: 'Outdoor engagement with fairy lights' },
    { id: 10, category: 'Weddings', title: 'Mehendi Ceremony Setup', description: 'Vibrant mehendi function decoration' },
    { id: 11, category: 'Decorations', title: 'Stage Background Design', description: 'Elegant stage backdrop with draping' },
    { id: 12, category: 'Birthdays', title: 'Themed Kids Party', description: 'Fun and colorful children\'s birthday setup' }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our stunning collection of weddings, birthdays, engagements, and decorations. 
            Each event is crafted with love and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 shadow-md'
                }`}
              >
                <IconComponent size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-square bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 relative overflow-hidden">
                {/* Image Placeholder with Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Camera Icon as Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera size={48} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>

                {/* View Button - Shows on Hover */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
                    View Details
                  </span>
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Images
          </button>
        </div>

        {/* Note for Images */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 max-w-2xl mx-auto">
            <Camera className="mx-auto mb-3 text-pink-500" size={32} />
            <h4 className="font-bold text-gray-800 mb-2">Gallery Images Coming Soon</h4>
            <p className="text-gray-600 text-sm">
              We're currently updating our gallery with beautiful high-resolution images of our recent events. 
              Each placeholder will be replaced with stunning photography showcasing our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


