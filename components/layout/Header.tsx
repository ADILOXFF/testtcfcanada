import React from 'react';
import Link from 'next/link';
import { Menu, User, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              TEST<span className="text-primary-dark">TCF</span>CANADA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-600 hover:text-primary font-bold transition-colors">الرئيسية</Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary font-bold transition-colors">المدونة</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary font-bold transition-colors">اتصل بنا</Link>
          </nav>

          {/* Auth Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link href="/login" className="flex items-center gap-2 text-gray-600 hover:text-primary font-bold transition-colors">
              <LogIn className="w-4 h-4" />
              تسجيل الدخول
            </Link>
            <Link href="/subscriptions-plans" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary-dark transition-all shadow-md">
              ابدأ الآن
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
