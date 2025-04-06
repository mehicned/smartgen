"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedFadeIn } from "../animation/animated-section";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

function FaqItem({ question, answer, isOpen, toggleOpen, index }: FaqItemProps) {
  return (
    <motion.div 
      className="border-b border-gray-200 py-4 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-primary transition-colors focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg">{question}</span>
        <motion.span 
          className="text-primary"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const faqs = [
    {
      question: "How much will a solar system save me?",
      answer:
        "Most homeowners save 60-90% on their electricity bills with our solar systems. The exact amount depends on your current usage, system size, and sun exposure. Our personalized savings calculator provides a detailed breakdown based on your specific situation.",
    },
    {
      question: "What rebates are available for solar in Queensland?",
      answer:
        "Queensland homeowners can access the federal Small-scale Renewable Energy Scheme (SRES), which provides Small-scale Technology Certificates (STCs) that significantly reduce upfront costs. The average 6.6kW system receives around $3,000 in rebates. Our team handles all rebate paperwork for you.",
    },
    {
      question: "How long does it take to install a solar system?",
      answer:
        "For most residential installations, the actual installation takes just 1 day. The entire process from sign-up to connection typically takes 2-3 weeks, including approval from your electricity provider and scheduling. Our installations are performed by Master Electricians with solar-specific qualifications.",
    },
    {
      question: "Do you offer battery storage solutions?",
      answer:
        "Yes, we offer a range of battery storage solutions including Tesla Powerwall, LG Chem, and Enphase. Battery storage allows you to store excess energy generated during the day for use at night, further reducing your dependence on the grid. Our consultants can help determine if battery storage makes economic sense for your situation.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We provide comprehensive warranties that include 25 years on panels (performance), 10-15 years on inverters, 10 years on mounting equipment, and 5 years on workmanship. All our systems come with free monitoring for the life of the system, allowing us to proactively identify and address any performance issues.",
    },
    {
      question: "Will solar panels damage my roof?",
      answer:
        "No. Our installation team uses industry-best practices that protect your roof's integrity. We use high-quality mounting systems specifically designed for your roof type, whether it's tile, metal, or composite. All mounting points are sealed with weatherproof materials, and we provide a 10-year warranty against leaks or roof damage related to our installation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl">
        <AnimatedFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about going solar with SmartGen
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
        </AnimatedFadeIn>

        <motion.div 
          className="bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Have a question that&apos;s not answered here?
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Ask Us Directly
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 