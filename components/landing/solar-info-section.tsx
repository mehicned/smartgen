"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedFadeIn } from "../animation/animated-section";

export function SolarInfoSection() {
  return (
    <section id="solar-info" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedFadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Math Is Simple</h2>
              <h3 className="text-xl font-bold mb-6 text-primary">Solar pays you five different ways</h3>
            </AnimatedFadeIn>
            
            <div className="space-y-6 text-gray-600">
              {[
                {
                  num: 1,
                  title: "Immediate Bill Reduction",
                  desc: "Your electricity bill drops by 70-100% from month one. For a typical home, that&apos;s $175-$225 saved every month, starting immediately."
                },
                {
                  num: 2,
                  title: "Feed-in Tariff Payments",
                  desc: "Energy companies pay you 8-12¢ per kWh for excess power you generate. Many customers earn $400-$800 annually from this alone."
                },
                {
                  num: 3,
                  title: "Property Value Increase",
                  desc: "Homes with solar sell for 4.1% more on average. On a $500,000 home, that&apos;s $20,500 in added value—often exceeding the system&apos;s cost."
                },
                {
                  num: 4,
                  title: "Government Incentives",
                  desc: "Federal and state rebates can reduce your upfront cost by $3,000-$5,000, significantly accelerating your payback period."
                },
                {
                  num: 5,
                  title: "Protection From Price Hikes",
                  desc: "While others face annual 8% electricity price increases, your rates stay locked at today&apos;s levels for 25+ years."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.num}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center mt-1 mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-bold">{item.num}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center shadow-md"
                >
                  <span className="mr-2">Calculate All 5 Benefits For Your Home</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/aussie.avif"
                alt="Residential solar installation"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-xl font-bold text-gray-800">25-Year<br />Performance Warranty</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: 5 }}
            >
              <div className="text-center">
                <motion.p 
                  className="font-bold text-3xl text-primary"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  3.2 Years
                </motion.p>
                <p className="text-sm text-gray-700">Average Payback Period</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 