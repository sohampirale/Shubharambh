"use client"

import React, { useState } from 'react';
import { Camera, Heart, Gift, Flower, Eye, X } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  const categories = [
    { name: 'All', icon: Camera },
    { name: 'Weddings', icon: Heart },
    { name: 'Birthdays', icon: Gift },
    { name: 'Engagements', icon: Heart },
    { name: 'Decorations', icon: Flower }
  ];

  // Gallery items with image paths
  const galleryItems = [
    { 
      id: 1, 
      category: 'Weddings', 
      title: 'Traditional Mandap Wedding', 
      description: 'Beautiful golden mandap with floral decorations',
      image: '/images/gallery/weddings/wedding1.jpg'
    },
    { 
      id: 2, 
      category: 'Weddings', 
      title: 'Destination Wedding Setup', 
      description: 'Elegant beachside wedding arrangement',
      image: '/images/gallery/weddings/wedding2.jpg'
    },
    { 
      id: 3, 
      category: 'Birthdays', 
      title: 'Princess Theme Birthday', 
      description: 'Pink and gold birthday party setup',
      image: '/images/gallery/birthdays/birthday1.jpg'
    },
    { 
      id: 4, 
      category: 'Engagements', 
      title: 'Ring Ceremony Decoration', 
      description: 'Romantic engagement ceremony setup',
      image: '/images/gallery/engagements/engagement1.jpg'
    },
    { 
      id: 5, 
      category: 'Decorations', 
      title: 'Rangoli Art Display', 
      description: 'Traditional rangoli with flower petals',
      image: '/images/gallery/decorations/decoration1.jpg'
    },
    { 
      id: 6, 
      category: 'Weddings', 
      title: 'Reception Hall Setup', 
      description: 'Grand reception with lighting and decor',
      image: '/images/gallery/weddings/wedding3.jpg'
    },
    { 
      id: 7, 
      category: 'Birthdays', 
      title: 'Baby Shower Celebration', 
      description: 'Pastel themed baby shower decoration',
      image: '/images/gallery/birthdays/birthday2.jpg'
    },
    { 
      id: 8, 
      category: 'Decorations', 
      title: 'Floral Entrance Arch', 
      description: 'Stunning entrance with fresh flowers',
      image: '/images/gallery/decorations/decoration2.jpg'
    },
    { 
      id: 9, 
      category: 'Engagements', 
      title: 'Garden Engagement Party', 
      description: 'Outdoor engagement with fairy lights',
      image: '/images/gallery/engagements/engagement2.jpg'
    },
    { 
      id: 10, 
      category: 'Weddings', 
      title: 'Mehendi Ceremony Setup', 
      description: 'Vibrant mehendi function decoration',
      image: '/images/gallery/weddings/wedding4.jpg'
    },
    { 
      id: 11, 
      category: 'Decorations', 
      title: 'Stage Background Design', 
      description: 'Elegant stage backdrop with draping',
      image: '/images/gallery/decorations/decoration3.jpg'
    },
    { 
      id: 12, 
      category: 'Birthdays', 
      title: 'Themed Kids Party', 
      description: 'Fun and colorful children\'s birthday setup',
      image: '/images/gallery/birthdays/birthday3.jpg'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageError = (itemId: number) => {
    setImageError(prev => ({ ...prev, [itemId]: true }));
  };

  const openModal = (item: any) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Image Area */}
              <div className="aspect-square relative overflow-hidden">
                {!imageError[item.id] ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(item.id)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  /* Fallback when image fails to load */
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 flex items-center justify-center">
                    <Camera size={48} className="text-gray-400" />
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {item.category}
                </div>

                {/* View Button - Shows on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
                    <Eye size={16} />
                    View Details
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
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

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                  {!imageError[selectedImage.id] ? (
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      fill
                      className="object-cover"
                      sizes="90vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 flex items-center justify-center">
                      <Camera size={64} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <p className="text-gray-700 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Note for Missing Images */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 max-w-2xl mx-auto">
            <Camera className="mx-auto mb-3 text-pink-500" size={32} />
            <h4 className="font-bold text-gray-800 mb-2">Add Your Gallery Images</h4>
            <p className="text-gray-600 text-sm">
              Place your images in <code className="bg-gray-100 px-2 py-1 rounded text-xs">public/images/gallery/</code> folder.
              Images that can't be loaded will show a placeholder until you add them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;