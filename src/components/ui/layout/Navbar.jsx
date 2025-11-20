import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, ClipboardList, BookOpen, User, Upload, LogOut, Menu, X, Leaf, LayoutDashboard } from 'lucide-react';

const Navbar = ({ onNavigate, onLogout, mobileMenuOpen, setMobileMenuOpen }) => {
    const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'logs', label: 'Logs', icon: ClipboardList },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'upload', label: 'Upload', icon: Upload },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">EcoFood</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-600 transition"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition ml-4"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-green-50 text-gray-700"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={onLogout}
              className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-red-50 text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;