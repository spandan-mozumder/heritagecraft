import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock,
  MessageCircle,
  Eye,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const ArtisanOrders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders = [
    {
      id: 'ORD-001',
      customer: {
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43210',
        address: '123 MG Road, Bangalore, Karnataka 560001',
      },
      products: [
        {
          name: 'Blue Pottery Decorative Vase',
          quantity: 1,
          price: 2500,
          image: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
      ],
      total: 2500,
      status: 'pending',
      orderDate: '2024-01-15',
      expectedDelivery: '2024-01-22',
      trackingNumber: null,
      notes: 'Customer requested gift wrapping',
    },
    {
      id: 'ORD-002',
      customer: {
        name: 'Rahul Kumar',
        email: 'rahul.kumar@email.com',
        phone: '+91 87654 32109',
        address: '456 Park Street, Kolkata, West Bengal 700016',
      },
      products: [
        {
          name: 'Handwoven Banarasi Silk Saree',
          quantity: 1,
          price: 8500,
          image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
      ],
      total: 8500,
      status: 'processing',
      orderDate: '2024-01-14',
      expectedDelivery: '2024-01-21',
      trackingNumber: 'TRK123456789',
      notes: 'Express delivery requested',
    },
    {
      id: 'ORD-003',
      customer: {
        name: 'Anita Patel',
        email: 'anita.patel@email.com',
        phone: '+91 76543 21098',
        address: '789 Gandhi Nagar, Ahmedabad, Gujarat 380001',
      },
      products: [
        {
          name: 'Carved Wooden Elephant',
          quantity: 2,
          price: 1800,
          image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
      ],
      total: 3600,
      status: 'shipped',
      orderDate: '2024-01-12',
      expectedDelivery: '2024-01-19',
      trackingNumber: 'TRK987654321',
      notes: '',
    },
    {
      id: 'ORD-004',
      customer: {
        name: 'Vikram Singh',
        email: 'vikram.singh@email.com',
        phone: '+91 65432 10987',
        address: '321 Connaught Place, New Delhi, Delhi 110001',
      },
      products: [
        {
          name: 'Brass Oil Lamp Set',
          quantity: 1,
          price: 950,
          image: 'https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
      ],
      total: 950,
      status: 'delivered',
      orderDate: '2024-01-10',
      expectedDelivery: '2024-01-17',
      trackingNumber: 'TRK456789123',
      notes: 'Delivered successfully',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'processing':
        return <Package className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Orders
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your orders and customer communications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {Object.entries(statusCounts).map(([status, count]) => (
            <div
              key={status}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-200 ${
                filterStatus === status ? 'ring-2 ring-primary-500' : 'hover:shadow-md'
              }`}
              onClick={() => setFilterStatus(status)}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {count}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {status === 'all' ? 'Total Orders' : status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search orders or customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {order.id}
                    </h3>
                    <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-2 capitalize">{order.status}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-xl transition-colors duration-200">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-xl transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-xl transition-colors duration-200">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Customer Info */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Customer Details
                    </h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-900 dark:text-white font-medium">
                        {order.customer.name}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span>{order.customer.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{order.customer.phone}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{order.customer.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Products
                    </h4>
                    <div className="space-y-3">
                      {order.products.map((product, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Qty: {product.quantity} × ₹{product.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Info */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Order Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Order Date:</span>
                        <span className="text-gray-900 dark:text-white">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Expected Delivery:</span>
                        <span className="text-gray-900 dark:text-white">
                          {new Date(order.expectedDelivery).toLocaleDateString()}
                        </span>
                      </div>
                      {order.trackingNumber && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Tracking:</span>
                          <span className="text-primary-600 dark:text-primary-400 font-medium">
                            {order.trackingNumber}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-gray-900 dark:text-white">Total:</span>
                        <span className="text-gray-900 dark:text-white">
                          ₹{order.total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {order.notes && (
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Notes:</strong> {order.notes}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex items-center space-x-3">
                  {order.status === 'pending' && (
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors duration-200">
                      Mark as Processing
                    </button>
                  )}
                  {order.status === 'processing' && (
                    <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl transition-colors duration-200">
                      Mark as Shipped
                    </button>
                  )}
                  {order.status === 'shipped' && (
                    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors duration-200">
                      Mark as Delivered
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200">
                    Contact Customer
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors duration-200">
                    Print Invoice
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtisanOrders;