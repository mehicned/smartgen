"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedFadeIn, AnimatedSlideUp, AnimatedSection } from "../animation/animated-section";

export function HeroSection() {
  const [billAmount, setBillAmount] = useState(486);
  const [systemSize, setSystemSize] = useState(6.6);
  
  // Calculate savings based on input values
  const calculateSavings = () => {
    // Base reduction percentage based on system size
    const baseReduction = Math.min(94, Math.max(60, Math.round(systemSize * 14)));
    
    // Estimated bill with solar
    const reducedBill = Math.round(billAmount * (100 - baseReduction) / 100);
    
    // Annual savings (4 quarters)
    const annualSavings = Math.round((billAmount - reducedBill) * 4);
    
    // Estimate system cost for payback calculation
    const estimatedCost = Math.round(systemSize * 1000);
    
    // Calculate payback period in years (to 1 decimal place)
    const paybackYears = (Math.round((estimatedCost / annualSavings) * 10) / 10).toFixed(1);
    
    return {
      reducedBill,
      savingsPercentage: baseReduction,
      annualSavings,
      paybackYears
    };
  };
  
  const savings = calculateSavings();
  
  // Format currency with commas
  const formatCurrency = (amount: number): string => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-gradient-to-b from-black/50 to-black/70 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/solar-hero.jpg"
          alt="Solar panels on house roof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:py-12">
            <AnimatedSection
              className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              animation="fadeIn"
              duration={0.8}
            >
              <motion.span 
                className="inline-block bg-primary px-4 py-1 text-sm font-semibold text-white rounded-full mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Queensland&apos;s Most Trusted Solar Provider
              </motion.span>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <AnimatedSection animation="slideUp" delay={0.5} className="block">
                    Save Up To <span className="text-primary">$2,380</span>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={0.7} className="block">
                    On Your Annual <span className="relative">
                      Electricity Bill
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary"></span>
                    </span>
                  </AnimatedSection>
                </h1>
              </motion.div>

              <AnimatedSlideUp delay={0.9}>
                <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
                  Join 6,500+ Queensland homeowners who are paying next to nothing for power. Slash your bills by 60-94% with our premium solar solutions.
                </p>
              </AnimatedSlideUp>

              <AnimatedFadeIn delay={1.1}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#contact"
                      className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-md transition-colors inline-flex items-center justify-center text-lg shadow-lg shadow-primary/30"
                    >
                      Get Your Free Quote
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#services"
                      className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-md transition-colors inline-flex items-center justify-center text-lg"
                    >
                      See Our Systems
                    </Link>
                  </motion.div>
                </div>
              </AnimatedFadeIn>
              
              <AnimatedSlideUp delay={1.3}>
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex flex-wrap gap-5">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>CEC Accredited</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>10+ Year Warranty</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Installed in 2-3 Weeks</span>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSlideUp>
            </AnimatedSection>
          </div>

          <div className="hidden md:block">
            <AnimatedSection animation="fadeIn" delay={0.5} className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20 relative">
                <div className="bg-primary p-4 text-white">
                  <h3 className="text-xl font-bold">Calculate Your Savings</h3>
                  <p className="text-white/80 text-sm">Adjust your bill to see potential savings</p>
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <label htmlFor="billSlider" className="block text-sm font-medium text-gray-700 mb-1">
                      Quarterly Bill: ${formatCurrency(billAmount)}
                    </label>
                    <input 
                      type="range" 
                      id="billSlider" 
                      min="200" 
                      max="1000" 
                      step="10" 
                      value={billAmount} 
                      onChange={(e) => setBillAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$200</span>
                      <span>$600</span>
                      <span>$1000</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="systemSlider" className="block text-sm font-medium text-gray-700 mb-1">
                      System Size: {systemSize} kW
                    </label>
                    <input 
                      type="range" 
                      id="systemSlider" 
                      min="3" 
                      max="15" 
                      step="0.1" 
                      value={systemSize} 
                      onChange={(e) => setSystemSize(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>3kW</span>
                      <span>9kW</span>
                      <span>15kW</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-3 border border-gray-100">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500 mb-0">Current Bill</p>
                        <p className="text-2xl font-bold text-gray-900">${formatCurrency(billAmount)}</p>
                        <p className="text-xs text-gray-500 -mt-1">per quarter</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0">With Solar</p>
                        <motion.p 
                          key={savings.reducedBill}
                          className="text-2xl font-bold text-primary"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ${savings.reducedBill}
                        </motion.p>
                        <p className="text-xs text-gray-500 -mt-1">per quarter</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          key={savings.savingsPercentage}
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: `${savings.savingsPercentage}%` }}
                          transition={{ duration: 0.5 }}
                        ></motion.div>
                      </div>
                      <motion.p 
                        key={savings.savingsPercentage + '%'}
                        className="text-right text-xs font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {savings.savingsPercentage}% Reduction
                      </motion.p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <motion.p 
                          key={savings.annualSavings}
                          className="text-sm font-semibold text-gray-900 leading-tight"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          ${formatCurrency(savings.annualSavings)}
                        </motion.p>
                        <p className="text-xs text-gray-600">Annual Savings</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <motion.p 
                          key={savings.paybackYears}
                          className="text-sm font-semibold text-gray-900 leading-tight"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {savings.paybackYears} years
                        </motion.p>
                        <p className="text-xs text-gray-600">Payback Period</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="#contact"
                      className="w-full bg-primary hover:bg-primary-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors flex justify-center items-center shadow-md shadow-primary/20 text-sm"
                    >
                      Get Your Personalized Quote
                    </Link>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="block w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
} 