"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedFadeIn } from "../animation/animated-section";

export function PartnersSection() {
  const partners = [
    {
      name: "Fronius",
      logo: "/logos/Fronius Logo.avif", 
      width: 160,
      height: 60
    },
    {
      name: "Growatt",
      logo: "/logos/Growatt_PNG.avif",
      width: 160,
      height: 60
    },
    {
      name: "Seraphim",
      logo: "/logos/Seraphim_PNG.avif",
      width: 160,
      height: 60
    },
    {
      name: "Hyundai",
      logo: "/logos/Hyundai-250-X-150.avif",
      width: 160,
      height: 60
    },
    {
      name: "GoodWe",
      logo: "/logos/goodwe.avif",
      width: 160,
      height: 60
    },
    {
      name: "Partner 1",
      logo: "/logos/6539d5_32c03f75f0d34f8eba04c7fc0cf1df29~mv2.avif",
      width: 160,
      height: 60
    },
    {
      name: "Partner 2",
      logo: "/logos/6539d5_5732049845f84f1caf49771b11c38f5f~mv2.avif",
      width: 160,
      height: 60
    },
    {
      name: "Partner 3",
      logo: "/logos/6539d5_8e0b72e9baa34914884f5cb335382b2d~mv2.avif",
      width: 160,
      height: 60
    },
    {
      name: "Partner 4",
      logo: "/logos/6539d5_128dfa18fad34b5baa675f77263666e4~mv2.avif",
      width: 160,
      height: 60
    },
    {
      name: "Partner 5",
      logo: "/logos/6539d5_35a4b0ccddff49f18199f07e9328973c~mv2.avif",
      width: 160,
      height: 60
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container">
        <AnimatedFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with leading manufacturers to deliver the highest quality solar solutions
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
        </AnimatedFadeIn>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-auto object-contain max-h-12"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl font-medium text-gray-700 mb-6 text-center">
            Trusted by over 1,200 Queensland homeowners since 2019
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { label: "Years of Experience", value: "7+" },
              { label: "Systems Installed", value: "1,200+" },
              { label: "Customer Satisfaction", value: "98%" },
              { label: "Energy Generated", value: "9.8M kWh" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center px-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + (index * 0.1),
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ y: -5 }}
              >
                <motion.p 
                  className="text-4xl font-bold text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 