import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600">Creating unforgettable moments with expert planning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Wedding Planning */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-2xl font-bold mb-4">Wedding Planning</h3>
              <p className="opacity-90">Complete wedding planning with traditional Indian ceremonies and modern elegance</p>
            </div>
            
            {/* Event Management */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4">Event Management</h3>
              <p className="opacity-90">Birthday parties, baby showers, and special celebrations planned to perfection</p>
            </div>
            
            {/* Photography */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-4">Photography</h3>
              <p className="opacity-90">Professional photography and cinematic videography to capture your precious moments</p>
            </div>
          </div>
        </div>
      </section>
      
      <Stats />
    </div>
  )
}