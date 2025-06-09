import React from 'react';
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star, Target, Eye, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Artisans Supported', value: '500+', color: 'text-primary-600' },
    { icon: Globe, label: 'States Covered', value: '28', color: 'text-secondary-600' },
    { icon: Award, label: 'Products Sold', value: '10,000+', color: 'text-accent-600' },
    { icon: Heart, label: 'Happy Customers', value: '5,000+', color: 'text-success-600' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every product is genuinely handcrafted using traditional techniques passed down through generations.',
      color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build lasting relationships with artisans and customers, creating a supportive ecosystem.',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest standards of craftsmanship and ensure every piece meets our quality criteria.',
      color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We promote eco-friendly practices and support sustainable livelihoods for artisan communities.',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Passionate about preserving Indian crafts and empowering artisans.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Artisan Relations',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former artisan turned advocate, bridging traditional crafts with modern markets.'
    },
    {
      name: 'Anita Patel',
      role: 'Quality Assurance Director',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Ensures every product meets our high standards of authenticity and quality.'
    },
    {
      name: 'Vikram Singh',
      role: 'Technology Lead',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Building technology solutions to connect artisans with global customers.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'HeritageCraft was born with a vision to preserve Indian handicrafts' },
    { year: '2021', title: 'First 100 Artisans', description: 'Onboarded our first 100 artisans across 5 states' },
    { year: '2022', title: 'National Expansion', description: 'Expanded to cover all 28 states of India' },
    { year: '2023', title: 'International Recognition', description: 'Received UNESCO recognition for cultural preservation' },
    { year: '2024', title: 'Digital Innovation', description: 'Launched AI-powered artisan matching and quality verification' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Preserving Heritage,
                <span className="block text-accent-200">Empowering Artisans</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                HeritageCraft is more than a marketplace—we're a movement dedicated to preserving 
                India's rich craft traditions while providing sustainable livelihoods for artisans 
                and authentic treasures for customers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Our Impact
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors duration-200">
                  Meet Our Team
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Artisan at work"
                  className="rounded-2xl shadow-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Traditional crafts"
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">500+ Artisans</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Supported Nationwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-white dark:bg-gray-700 shadow-lg`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To preserve and promote India's rich handicraft traditions by creating sustainable 
                livelihoods for artisans and connecting them with customers who value authentic, 
                handcrafted products.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To become the world's leading platform for authentic Indian handicrafts, 
                ensuring that traditional craft forms thrive in the modern economy while 
                preserving cultural heritage for future generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 dark:bg-accent-900/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Through direct partnerships with artisans, we've helped increase their income by 
                300% on average, while ensuring customers receive authentic, high-quality 
                handcrafted products with verified provenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do, from selecting artisans to delivering products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Key milestones in our mission to preserve and promote Indian handicrafts
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate individuals dedicated to preserving craft traditions and empowering artisans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Whether you're an artisan looking to share your craft or a customer seeking authentic 
            handmade products, become part of our community dedicated to preserving cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Become an Artisan
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors duration-200">
              Shop Authentic Crafts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;