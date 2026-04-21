import React from 'react';
import Link from 'next/link';
import { PenTool, Mic, BookOpen, Headphones } from 'lucide-react';

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]" dir="rtl">
      <div className="flex items-center justify-around h-16">
        <Link href="/epreuve/expression-ecrite" className="flex flex-col items-center justify-center flex-1 space-y-1 text-gray-500 hover:text-primary transition-colors">
          <div className="p-1 rounded-lg">
            <PenTool className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">تعبير كتابي</span>
        </Link>
        <Link href="/epreuve/expression-orale" className="flex flex-col items-center justify-center flex-1 space-y-1 text-gray-500 hover:text-primary transition-colors">
          <div className="p-1 rounded-lg">
            <Mic className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">تعبير شفهي</span>
        </Link>
        <Link href="/epreuve/comprehension-ecrite" className="flex flex-col items-center justify-center flex-1 space-y-1 text-gray-500 hover:text-primary transition-colors">
          <div className="p-1 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">فهم كتابي</span>
        </Link>
        <Link href="/epreuve/comprehension-orale" className="flex flex-col items-center justify-center flex-1 space-y-1 text-gray-500 hover:text-primary transition-colors">
          <div className="p-1 rounded-lg">
            <Headphones className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">فهم شفهي</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
