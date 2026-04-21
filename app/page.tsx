import React from 'react';
import { Headphones, BookOpen, Mic, PenTool, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-blue text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            انجح في اختبار <span className="text-secondary-accent text-nowrap">TCF CANADA</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            نفس الأسئلة التي ستجدها يوم الامتحان، هنا على <span className="font-bold whitespace-nowrap">TestTCFCanada</span>! 
            اختبارات حقيقية، تمارين مصححة وتدريب ذكي.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register/free" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
              ابدأ مجاناً
              <ArrowLeft className="w-5 h-5 rtl:rotate-0" />
            </Link>
            <Link href="/subscriptions-plans" className="bg-secondary-accent text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:brightness-105 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
              فتح جميع الاختبارات
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-blue-100 text-sm font-medium">
            <div className="flex items-center gap-2 font-bold"><CheckCircle className="w-5 h-5 text-secondary-accent" /> 36 اختبار صوتي</div>
            <div className="flex items-center gap-2 font-bold"><CheckCircle className="w-5 h-5 text-secondary-accent" /> +500 موضوع مصحح</div>
            <div className="flex items-center gap-2 font-bold"><CheckCircle className="w-5 h-5 text-secondary-accent" /> إحصائيات التقدم</div>
          </div>
        </div>
      </section>

      {/* Les 4 Épreuves Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">الاختبارات الأربعة لـ TCF Canada</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">استعد لكل قسم من خلال اختباراتنا التفاعلية وآلاف التصحيحات.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {epreuves.map((item, idx) => (
            <Link key={idx} href={item.href} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-center">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <span className="text-primary font-bold text-sm flex items-center justify-center gap-1">
                {item.stats} <ArrowLeft className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خطط الاشتراك لدينا</h2>
          <p className="text-gray-600">اختر المدة التي تناسب استعدادك.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl bg-white border ${plan.popular ? 'border-primary ring-2 ring-primary ring-opacity-10' : 'border-gray-100'} shadow-md flex flex-col`}>
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">الأكثر شيوعاً</span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm"> / وصول</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const epreuves = [
  { title: "الفهم الشفهي", desc: "استمع إلى المقاطع الصوتية وأجب على الأسئلة.", stats: "36 اختبار", icon: Headphones, color: "bg-blue-500", href: "/epreuve/comprehension-orale" },
  { title: "الفهم الكتابي", desc: "اقرأ النصوص وأجب على الأسئلة في ظروف حقيقية.", stats: "38 اختبار", icon: BookOpen, color: "bg-emerald-500", href: "/epreuve/comprehension-ecrite" },
  { title: "التعبير الشفهي", desc: "استعد للمهام الثلاث للشفهي مع مواضيعنا الحالية.", stats: "+500 موضوع", icon: Mic, color: "bg-orange-500", href: "/epreuve/expression-orale" },
  { title: "التعبير الكتابي", desc: "اكتب نصوصك واحصل على تصحيحات مفصلة.", stats: "+500 موضوع", icon: PenTool, color: "bg-purple-500", href: "/epreuve/expression-ecrite" },
];

const plans = [
  { name: "5 أيام", price: "9.99€", features: ["الفهم الكتابي: 38 اختبار", "الفهم الشفهي: 36 اختبار", "التعبير الشفهي: +500 موضوع", "التعبير الكتابي: +500 موضوع", "دعم عبر البريد والواتساب", "نماذج سيرة ذاتية كندية"], popular: false },
  { name: "30 يوم", price: "24.99€", features: ["كل ما في باقة 5 أيام", "تتبع متقدم للتقدم", "وصول ممتد", "تصحيحات ذات أولوية", "دعم واتساب 24/7"], popular: true },
  { name: "60 يوم", price: "39.99€", features: ["كل ما في باقة 30 يوم", "وصول كامل غير محدود", "استشارات جماعية", "أسرار النجاح في الامتحان"], popular: false },
];
