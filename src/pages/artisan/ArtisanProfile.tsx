import React, { useState } from 'react';
import { 
  Camera, 
  Edit, 
  Save, 
  X, 
  Plus, 
  Trash2, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Award,
  Star,
  Upload,
  User,
  Palette,
  FileText
} from 'lucide-react';

const ArtisanProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    location: 'Jaipur, Rajasthan',
    speciality: 'Blue Pottery',
    experience: '25',
    bio: 'Master craftsman specializing in traditional Rajasthani blue pottery with over 25 years of experience. I learned this ancient art form from my grandfather and have been preserving and innovating traditional techniques.',
    avatar: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
    coverImage: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=800',
    achievements: [
      'National Handicrafts Award 2020',
      'UNESCO Recognition for Cultural Preservation',
      'Featured in National Geographic',
    ],
    skills: ['Blue Pottery', 'Ceramic Glazing', 'Traditional Painting', 'Kiln Management'],
  });

  const [portfolio, setPortfolio] = useState([
    {
      id: '1',
      title: 'Blue Pottery Collection',
      description: 'Traditional Rajasthani blue pottery pieces',
      image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pottery',
    },
    {
      id: '2',
      title: 'Decorative Vases',
      description: 'Hand-painted decorative vases with intricate patterns',
      image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pottery',
    },
    {
      id: '3',
      title: 'Traditional Plates',
      description: 'Blue pottery plates with traditional motifs',
      image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pottery',
    },
  ]);

  const stats = [
    { label: 'Products Sold', value: '1,234', icon: Award },
    { label: 'Customer Rating', value: '4.9', icon: Star },
    { label: 'Years Experience', value: '25+', icon: Calendar },
    { label: 'Orders Completed', value: '856', icon: Award },
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const addSkill = (skill: string) => {
    if (skill && !profileData.skills.includes(skill)) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage your artisan profile and portfolio
              </p>
            </div>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {isEditing ? (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="w-5 h-5 mr-2" />
                  Edit Profile
                </>
              )}
            </button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="relative h-48 bg-gradient-to-r from-primary-500 to-secondary-500">
            <img
              src={profileData.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            {isEditing && (
              <button className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-xl hover:bg-black/70 transition-colors duration-200">
                <Camera className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
              {/* Avatar */}
              <div className="relative -mt-16 mb-4 md:mb-0">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-2 right-2 p-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-200">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-2xl font-bold bg-transparent border-b-2 border-primary-500 focus:outline-none text-gray-900 dark:text-white"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {profileData.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Palette className="w-4 h-4" />
                        <span>{profileData.speciality}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{profileData.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{profileData.experience} years experience</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'profile', label: 'Profile Details', icon: User },
                { id: 'portfolio', label: 'Portfolio', icon: Palette },
                { id: 'achievements', label: 'Achievements', icon: Award },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Profile Details Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Speciality
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.speciality}
                        onChange={(e) => handleInputChange('speciality', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.speciality}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.location}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{profileData.bio}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skills
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-400 text-sm font-medium rounded-full"
                      >
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-primary-600 hover:text-primary-800"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </span>
                    ))}
                    {isEditing && (
                      <button
                        onClick={() => {
                          const skill = prompt('Enter new skill:');
                          if (skill) addSkill(skill);
                        }}
                        className="inline-flex items-center px-3 py-1 border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full hover:border-primary-500 hover:text-primary-600"
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        Add Skill
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Portfolio Gallery
                  </h3>
                  {isEditing && (
                    <button className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Image
                    </button>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {portfolio.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      {isEditing && (
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button className="p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isEditing && (
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center hover:border-primary-500 transition-colors duration-200">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Upload new image
                      </p>
                      <button className="text-primary-600 dark:text-primary-400 font-medium">
                        Choose File
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Achievements & Recognition
                  </h3>
                  {isEditing && (
                    <button className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Achievement
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {profileData.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
                          <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {achievement}
                        </span>
                      </div>
                      {isEditing && (
                        <button className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-xl transition-colors duration-200">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;