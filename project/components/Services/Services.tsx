'use client';

import React from 'react';
import { 
  Heart, 
  Camera, 
  Music, 
  Flower, 
  Sparkles, 
  MapPin, 
  Users, 
  ChefHat, 
  Palette, 
  Video, 
  Mic,
  ArrowRight,
  Star
} from 'lucide-react';

interface ServicesPreviewProps {
  onNavigate?: (page: string) => void;
}

const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onNavigate }) => {
  const allServices = [
    {
      id: 1,
      title: 'Wedding Planning',
      description: 'Complete wedding planning from engagement to reception with traditional Indian ceremonies and modern touches.',
      icon: Heart,
      gradient: 'from-pink-500 to-red-500',
      hoverGradient: 'hover:from-pink-600 hover:to-red-600',
      featured: true
    },
    {
      id: 2,
      title: 'Birthday & Baby Shower Events',
      description: 'Memorable celebrations for birthdays and baby showers with creative themes and decorations.',
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'hover:from-purple-600 hover:to-pink-600',
      featured: true
    },
    {
      id: 3,
      title: 'Rangoli & Floral Decorations',
      description: 'Traditional rangoli designs and stunning floral arrangements for authentic Indian celebrations.',
      icon: Flower,
      gradient: 'from-orange-500 to-yellow-500',
      hoverGradient: 'hover:from-orange-600 hover:to-yellow-600',
      featured: true
    },
    {
      id: 4,
      title: 'Beauty & Makeup Services',
      description: 'Professional bridal makeup and beauty services for your special day.',
      icon: Palette,
      gradient: 'from-pink-500 to-purple-500',
      hoverGradient: 'hover:from-pink-600 hover:to-purple-600'
    },
    {
      id: 5,
      title: 'Engagement Planning',
      description: 'Perfect engagement ceremonies with traditional rituals and modern celebrations.',
      icon: Users,
      gradient: 'from-red-500 to-pink-500',
      hoverGradient: 'hover:from-red-600 hover:to-pink-600'
    },
    {
      id: 6,
      title: 'Destination Weddings',
      description: 'Exotic destination weddings across India with complete logistics management.',
      icon: MapPin,
      gradient: 'from-blue-500 to-purple-500',
      hoverGradient: 'hover:from-blue-600 hover:to-purple-600'
    },
    {
      id: 7,
      title: 'Reception Planning',
      description: 'Grand reception parties with entertainment, dining, and unforgettable experiences.',
      icon: Star,
      gradient: 'from-yellow-500 to-orange-500',
      hoverGradient: 'hover:from-yellow-600 hover:to-orange-600'
    },
    {
      id: 8,
      title: 'Catering Services',
      description: 'Authentic Indian cuisine and international dishes for all your events.',
      icon: ChefHat,
      gradient: 'from-green-500 to-teal-500',
      hoverGradient: 'hover:from-green-600 hover:to-teal-600'
    },
    {
      id: 9,
      title: 'DJ & Sound Systems',
      description: 'Professional DJ services and high-quality sound systems for entertainment.',
      icon: Music,
      gradient: 'from-indigo-500 to-blue-500',
      hoverGradient: 'hover:from-indigo-600 hover:to-blue-600'
    },
    {
      id: 10,
      title: 'Professional Photography',
      description: 'Capture every precious moment with our professional photography services.',
      icon: Camera,
      gradient: 'from-teal-500 to-green-500',
      hoverGradient: 'hover:from-teal-600 hover:to-green-600'
    },
    {
      id: 11,
      title: 'Cinematic Videography',
      description: 'Cinematic wedding videos and event documentation with storytelling approach.',
      icon: Video,
      gradient: 'from-purple-500 to-indigo-500',
      hoverGradient: 'hover:from-purple-600 hover:to-indigo-600'
    }
  ];

  const featuredServices = allServices.filter(service => service.featured);
  const otherServices = allServices.filter(service => !service.featured);

  const handleViewAllServices = () => {
    if (onNavigate) {
      onNavigate('services');
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    if (onNavigate) {
      onNavigate('services');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From traditional Indian weddings to modern celebrations, we provide comprehensive event management 
            services to make your special moments unforgettable.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.title)}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center text-orange-500 font-semibold group-hover:text-pink-500 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={18} />
                  </div>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Services Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Additional Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {otherServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.title)}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 p-6 text-center border border-gray-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                    {service.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={handleViewAllServices}
            className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-700 font-medium">Happy Clients</p>
            <p className="text-gray-500 text-sm">Satisfied customers across Maharashtra</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
              11
            </div>
            <p className="text-gray-700 font-medium">Services Offered</p>
            <p className="text-gray-500 text-sm">Complete event management solutions</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-700 font-medium">Customer Support</p>
            <p className="text-gray-500 text-sm">Always here when you need us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;