"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedFadeIn } from "../animation/animated-section";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <AnimatedFadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary rounded-full bg-primary/10 mb-3">
              ABOUT SMARTGEN SOLAR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Queensland&apos;s Solar Specialists</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              With almost a decade of experience in designing custom solar solutions, 
              we&apos;re committed to helping Queensland homes and businesses harness the power of the sun.
            </p>
          </div>
        </AnimatedFadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <AnimatedFadeIn>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Story</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    The team at SmartGen Solar have almost a decade of experience in designing solar solutions to suit the needs of their clients. A rich passion for ensuring their customers get a good deal, and reliable service saw the start of SmartGen Solar.
                  </p>
                  <p className="text-gray-600">
                    We will analyse your current and prospective power needs, and then develop a system to help you cut costs and save money well into the future.
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image 
                          src="/cec.avif" 
                          alt="Clean Energy Council Member" 
                          width={60} 
                          height={60}
                        />
                      </div>
                      <p className="text-gray-700 font-medium">
                        We are a proud member of the Clean Energy Council.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFadeIn>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-1">Quality Guaranteed</h4>
                  <p className="text-gray-600 text-sm">Premium Tier-1 equipment with 25-year warranties</p>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-1">Local Experts</h4>
                  <p className="text-gray-600 text-sm">Queensland-based team with local knowledge</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/solar-man.webp"
                  alt="SmartGen Solar team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { value: '1000+', label: 'Installations' },
                { value: '4.9/5', label: 'Customer Rating' },
                { value: '10+', label: 'Years Experience' },
                { value: '25+', label: 'Years Warranty' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="bg-white text-center p-4 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 