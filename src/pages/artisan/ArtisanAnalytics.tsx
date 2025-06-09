import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  Users, 
  Eye,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award,
  Clock,
  MapPin,
  Star,
  ShoppingCart,
  Heart,
  Share2
} from 'lucide-react';

const ArtisanAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const timeRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' },
  ];

  const overviewStats = [
    {
      title: 'Total Revenue',
      value: '₹1,25,430',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      title: 'Products Sold',
      value: '234',
      change: '+8.2%',
      trend: 'up',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'Profile Views',
      value: '3,421',
      change: '+15.3%',
      trend: 'up',
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      title: 'Avg. Rating',
      value: '4.8',
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
  ];

  const topProducts = [
    {
      name: 'Blue Pottery Vase',
      sales: 45,
      revenue: '₹1,12,500',
      growth: '+23%',
      image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Handwoven Silk Saree',
      sales: 28,
      revenue: '₹2,38,000',
      growth: '+18%',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Wooden Elephant',
      sales: 32,
      revenue: '₹57,600',
      growth: '+12%',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Brass Lamp Set',
      sales: 56,
      revenue: '₹53,200',
      growth: '+8%',
      image: 'https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  const customerInsights = [
    {
      metric: 'Repeat Customers',
      value: '68%',
      description: 'Customers who made multiple purchases',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      metric: 'Avg. Order Value',
      value: '₹2,450',
      description: 'Average amount per order',
      icon: ShoppingCart,
      color: 'text-green-600'
    },
    {
      metric: 'Customer Satisfaction',
      value: '4.7/5',
      description: 'Based on reviews and ratings',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      metric: 'Referral Rate',
      value: '24%',
      description: 'Customers who referred others',
      icon: Share2,
      color: 'text-purple-600'
    }
  ];

  const geographicData = [
    { region: 'Maharashtra', orders: 45, revenue: '₹1,12,500', percentage: 28 },
    { region: 'Delhi', orders: 38, revenue: '₹95,000', percentage: 24 },
    { region: 'Karnataka', orders: 32, revenue: '₹80,000', percentage: 20 },
    { region: 'Gujarat', orders: 25, revenue: '₹62,500', percentage: 16 },
    { region: 'Others', orders: 20, revenue: '₹50,000', percentage: 12 },
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 85000, orders: 45, views: 1200 },
    { month: 'Feb', revenue: 92000, orders: 52, views: 1350 },
    { month: 'Mar', revenue: 78000, orders: 41, views: 1180 },
    { month: 'Apr', revenue: 105000, orders: 58, views: 1420 },
    { month: 'May', revenue: 118000, orders: 67, views: 1580 },
    { month: 'Jun', revenue: 125000, orders: 72, views: 1650 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Analytics Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Track your business performance and insights
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {timeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <button className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Revenue Trend
              </h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-xl transition-colors duration-200">
                  <LineChart className="w-4 h-4" />
                </button>
                <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-xl transition-colors duration-200">
                  <BarChart3 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Simplified Chart Representation */}
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-12">
                    {data.month}
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                        style={{
                          width: `${(data.revenue / Math.max(...monthlyData.map(d => d.revenue))) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white w-20 text-right">
                    ₹{(data.revenue / 1000).toFixed(0)}k
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Top Products
            </h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {product.revenue}
                    </p>
                    <p className="text-xs text-green-600">
                      {product.growth}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Insights */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Customer Insights
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {customerInsights.map((insight, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mx-auto mb-3`}>
                    <insight.icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {insight.value}
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {insight.metric}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Sales by Region
            </h2>
            <div className="space-y-4">
              {geographicData.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {region.region}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {region.revenue}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {region.orders} orders
                      </p>
                    </div>
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${region.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Goals */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Performance Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Monthly Revenue Goal
              </h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary-600">₹1,50,000</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full" style={{ width: '83%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ₹1,25,000 achieved (83%)
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Customer Rating Goal
              </h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-green-600">4.9/5</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '96%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  4.8/5 current rating (96%)
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Order Fulfillment Goal
              </h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-blue-600">24h</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  18h average time (75%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanAnalytics;