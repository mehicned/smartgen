import React from "react";

export function SocialProof() {
  return (
    <section className="py-16 border-y border-gray-200 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
            Trusted by over 10,000+ developers and teams worldwide
          </h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        {/* Logos grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-16">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center h-10">
              <span className="text-xl font-semibold">Vercel</span>
            </div>
          </div>
          
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center h-10">
              <span className="text-xl font-semibold">Next.js</span>
            </div>
          </div>
          
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center h-10">
              <span className="text-xl font-semibold">Prisma</span>
            </div>
          </div>
          
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center h-10">
              <span className="text-xl font-semibold">Stripe</span>
            </div>
          </div>
          
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center h-10">
              <span className="text-xl font-semibold">Tailwind</span>
            </div>
          </div>
          
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center h-10">
              <span className="text-xl font-semibold">Radix</span>
            </div>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">10k+</span>
            <span className="text-sm font-medium text-gray-600">Developers</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">50+</span>
            <span className="text-sm font-medium text-gray-600">Components</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">98%</span>
            <span className="text-sm font-medium text-gray-600">Satisfaction</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">24/7</span>
            <span className="text-sm font-medium text-gray-600">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
} 