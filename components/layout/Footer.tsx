import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 pt-16 pb-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              TESTTCFCANADA
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              TestTCFcanada هي المنصة رقم 1 للتحضير لاختبار TCF Canada. استفد من تجارب مجانية ومرافقة ذكية للنجاح.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm">اتصل بنا</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary transition-colors text-sm">الأسئلة الشائعة</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors text-sm">المدونة</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">قانوني</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors text-sm">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary transition-colors text-sm">الشروط والأحكام</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">اتصل بنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                ayoub@tcfcanada.com
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-primary" dir="ltr" />
                +1 506 253 6067
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                مونتريال، كيبك، كندا
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} testtcfcanada.com | جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
