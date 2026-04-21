import React from 'react';
import { Layers, Play, ChevronDown, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Calendar, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ExpressionEcritePage() {
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-12 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/epreuve/expression-ecrite/sujets-actualites" className="group mb-6 inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            العودة إلى الأشهر
          </Link>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Layers className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">أبريل 2026 - التعبير الكتابي</h1>
          <p className="max-w-2xl mx-auto text-blue-100 opacity-90">
            تدرب مع التجميعات الكاملة. كل تجميعة تحتوي على 3 مهام يجب إنجازها في 60 دقيقة.
          </p>
        </div>
      </section>

      {/* Sticky Combinations Selector */}
      <section className="sticky top-16 z-40 border-b border-blue-200 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <div className="rounded-full bg-primary p-1.5"><Calendar className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-sm text-primary">التجميعات</span>
            </div>
            
            <div className="flex-1 flex items-center gap-2 overflow-hidden">
              <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button key={num} className={`shrink-0 px-4 py-2 rounded-xl border text-sm font-bold transition-all ${num === 1 ? 'bg-primary text-white border-primary shadow-lg' : 'bg-white text-gray-600 border-gray-100 hover:border-primary hover:text-primary'}`}>
                    التجميعة {num}
                  </button>
                ))}
              </div>
              <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Warning Alert */}
        <div className="mb-8 rounded-2xl bg-blue-50 border border-blue-100 p-6 flex gap-4">
          <div className="bg-blue-500/10 p-2 rounded-lg h-fit">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-blue-900 mb-1 text-lg">انتباه !</h3>
            <p className="text-sm text-blue-800/80 leading-relaxed">
              هذه المحتويات مبنية على مواضيع حقيقية. وهي محمية: يمنع منعا باتا أي نسخ دون إذن.
            </p>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <Link href="#" className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold">المنهجية</span>
          </Link>
          <Link href="#" className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold">الدورات</span>
          </Link>
          <Link href="#" className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg hover:scale-105 transition-transform">
            <CheckCircle className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold">المحاكي</span>
          </Link>
          <Link href="#" className="flex flex-col items-center p-4 rounded-2xl bg-red-600 text-white shadow-lg hover:scale-105 transition-transform">
            <Youtube className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold">يوتيوب</span>
          </Link>
        </div>

        {/* Combinations List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="group overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-sm hover:border-primary transition-colors">
              <button className="flex w-full items-center justify-between bg-white px-6 py-5 text-right group-hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">التجميعة {num}</h3>
                    <p className="text-sm text-gray-500">3 مهام للإنجاز</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                    <Play className="w-4 h-4 ml-1" />
                    ابدأ الآن
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
