'use client';

import React from 'react';
import { 
  Users, 
  Award, 
  Heart, 
  Star, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle,
  Quote,
  GraduationCap,
  Briefcase,
  Calendar
} from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We pour our heart into every event, ensuring each celebration is unique and memorable.',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Client-Centered Approach',
      description: 'Your dreams and vision are our priority. We build everything around your expectations.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Premium services with attention to detail, ensuring flawless execution of every element.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Star,
      title: 'Innovation & Tradition',
      description: 'Blending traditional Indian ceremonies with modern planning and contemporary touches.',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Couples', icon: Heart },
    { number: '1000+', label: 'Events Organized', icon: Calendar },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Vendor Partners', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                About Shubharambh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              "We Build Your Dream Around You" - Creating magical moments for your special occasions 
              with premium Indian wedding planning and unforgettable celebrations.
            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Shubharambh Event & Management was born from a passion for creating extraordinary celebrations 
                  that honor tradition while embracing modern elegance. Founded by two young entrepreneurs with 
                  a shared vision, we have grown from a small idea into a thriving event management company 
                  serving Maharashtra and beyond.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our journey began with the belief that every celebration deserves to be perfect. We specialize 
                  in Indian weddings and cultural events, bringing together the rich heritage of traditional 
                  ceremonies with contemporary planning expertise.
                </p>
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Start Planning Your Event
                </button>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8 border-2 border-dashed border-orange-300 rounded-lg bg-white/50">
                    <div className="text-6xl mb-4">🎊</div>
                    <p className="text-lg font-medium text-gray-700">Company Story Image</p>
                    <p className="text-sm text-gray-600">(Team photo or event showcase)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Meet Our Founders
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The visionary leaders behind Shubharambh's success story
            </p>
          </div>

          {/* Founder 1 - Mayuresh Karanjkar */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8 border-2 border-dashed border-orange-300 rounded-lg bg-white/50">
                      <div className="text-6xl mb-4">👨‍💼</div>
                      <p className="text-lg font-medium text-gray-700">Mayuresh Karanjkar</p>
                      <p className="text-sm text-gray-600">(Founder Photo)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Mayuresh Karanjkar</h3>
                      <p className="text-orange-600 font-semibold">Founder & CEO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <GraduationCap size={18} />
                      <span>BBA Graduate</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={18} />
                      <span>22 Years Old</span>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute top-0 left-0 text-orange-300" size={24} />
                    <blockquote className="pl-8 text-gray-700 leading-relaxed italic">
                      "Mayuresh Karanjkar, a BBA graduate, is the driving force behind Shubharambh Event's & Management. 
                      At just 22 years old, he has already demonstrated exceptional entrepreneurial spirit.
                    </blockquote>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    Mayuresh gained valuable experience working in a friend's business, learning key skills that 
                    empowered him to start his own venture. Remarkably, he founded Shubharambh entirely from his 
                    own earnings, without any external investment.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    His dedication and hands-on experience have helped transform Shubharambh from a small idea 
                    into a thriving event management company serving Maharashtra and beyond."
                  </p>

                  <div className="flex items-center space-x-4 mt-6">
                    <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                      <Briefcase className="text-orange-600" size={16} />
                      <span className="text-orange-800 font-medium">Self-Made Entrepreneur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2 - Shubham Patil */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Lightbulb className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Shubham Patil</h3>
                      <p className="text-purple-600 font-semibold">Co-Founder & Mentor</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-6 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <GraduationCap size={18} />
                      <span>B-Pharmacy Graduate</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={18} />
                      <span>24 Years Old</span>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute top-0 left-0 text-purple-300" size={24} />
                    <blockquote className="pl-8 text-gray-700 leading-relaxed italic">
                      "Shubham Patil, a B-Pharmacy graduate, is the visionary co-founder of Shubharambh Events & Management. 
                      At just 24 years old, Shubham's entrepreneurial journey began at the early age of 14."
                    </blockquote>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    Over the years, Shubham not only built a strong foundation for Shubharambh but also became 
                    a guiding light to many aspiring entrepreneurs. One of them is Mayuresh, who gained essential 
                    business skills and inspiration while working under Shubham's mentorship.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Today, Mayuresh continues to carry forward that legacy as a key part of the company's success."
                  </p>

                  <div className="flex items-center space-x-4 mt-6">
                    <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                      <TrendingUp className="text-purple-600" size={16} />
                      <span className="text-purple-800 font-medium">Young Entrepreneur (Started at 14)</span>
                    </div>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8 border-2 border-dashed border-purple-300 rounded-lg bg-white/50">
                      <div className="text-6xl mb-4">👨‍🎓</div>
                      <p className="text-lg font-medium text-gray-700">Shubham Patil</p>
                      <p className="text-sm text-gray-600">(Co-Founder Photo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide us in creating extraordinary celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <p className="text-lg opacity-90">{achievement.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;