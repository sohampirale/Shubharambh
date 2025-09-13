"use client"

import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Users, Handshake, Award, Star, MapPin, Camera } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    couples: 0,
    experience: 0,
    events: 0,
    partners: 0
  });

  const statsData = [
    {
      icon: Heart,
      number: 500,
      suffix: '+',
      title: 'Happy Couples',
      description: 'Beautiful weddings planned with love and perfection',
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50',
      key: 'couples'
    },
    {
      icon: Calendar,
      number: 5,
      suffix: '+',
      title: 'Years Experience',
      description: 'Years of dedicated service in event management',
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      key: 'experience'
    },
    {
      icon: Users,
      number: 1000,
      suffix: '+',
      title: 'Events Organized',
      description: 'Memorable celebrations across Maharashtra',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      key: 'events'
    },
    {
      icon: Handshake,
      number: 50,
      suffix: '+',
      title: 'Vendor Partners',
      description: 'Trusted network of premium service providers',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      key: 'partners'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every event crafted with attention to detail'
    },
    {
      icon: Star,
      title: '5-Star Rating',
      description: 'Consistently rated excellent by our clients'
    },
    {
      icon: MapPin,
      title: 'Pan-Maharashtra',
      description: 'Serving clients across Maharashtra state'
    },
    {
      icon: Camera,
      title: 'Photo-Perfect',
      description: 'Instagram-worthy setups for every occasion'
    }
  ];

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const timers = statsData.map((stat) => {
      const increment = stat.number / steps;
      let currentCount = 0;
      
      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.number) {
          setCounters(prev => ({ ...prev, [stat.key]: stat.number }));
          clearInterval(timers.find(timer => timer === this));
        } else {
          setCounters(prev => ({ ...prev, [stat.key]: Math.floor(currentCount) }));
        }
      }, stepDuration);
    });

    // Cleanup timers
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Numbers that speak for our dedication, quality, and the trust our clients place in us.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${stat.bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent size={32} />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-800">
                    {counters[stat.key]}
                  </span>
                  <span className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent ml-1`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Achievements */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-pink-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Shubharambh?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond the numbers, here's what makes us the preferred choice for your special events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us make your special day as memorable as the hundreds of celebrations we've crafted before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Plan Your Event
              </a>
              <a
                href="https://wa.me/918180939260"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;