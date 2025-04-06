"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedFadeIn } from "../animation/animated-section";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <AnimatedFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;ve helped over 1,200 Brisbane homeowners switch to solar since 2019
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
        </AnimatedFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Shyan Gardner",
              image: "/user.png",
              quote: "We had a great experience dealing with Anky and Wes. We have had many Solar companies in the past come and explain to us why we should pick them. Anky made us feel heard and explained everything to us in a way we understood. Anky got the job done very promptly. Communication was great between us and any questions I had he answered with no troubles. We have our solar on now and don't know why we didn't do this sooner! "
            },
            {
              name: "J Stirk",
              image: "/user.png",
              quote: "Installation was trouble free, and the solar panels are paying for itself. Almost $1000 bucks in credit. Haven't paid a bill since Installation. I reckon everyone should have solar in texas qld. Smarten does what they say."
            },
            {
              name: "Robert Murray",
              image: "/user.png",
              quote: "Our experience with Smartgen solar has been marvelous. We are  in credit of $700 atm with ergon energy account. We are very pleased with the overall service we received from the sales team and installers. Aaron has been very informative and helpful which helped us to make the positive decision. Glad we got it"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={60} 
                    height={60} 
                    className="rounded-full object-cover border-2 border-primary"
                  />
                </motion.div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <p className="text-gray-600 italic mb-6 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-medium text-gray-700 mb-8">
            See our reviews on Google
          </p>
          <div className="flex justify-center">
            <motion.a 
              href="https://www.google.com/maps/place/SmartGen+Solar/@-27.5719945,150.652238,465099m/data=!3m1!1e3!4m6!3m5!1s0x6b9145da17e940b3:0x253f8fd8e65ee378!8m2!3d-27.5719945!4d153.0912028!16s%2Fg%2F11fb1bv867?coh=245187&entry=tts&g_ep=EgoyMDI1MDQwMi4xIPu8ASoJLDEwMjExNDUzSAFQAw%3D%3D&skid=2712880e-b361-4363-a9e3-1dea0ee9c347"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-8 py-6 rounded-lg shadow-md inline-flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="mr-2">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 mb-1">Google Reviews</h3>
                <div className="flex items-center gap-1">
                  <p className="text-lg font-bold text-primary">5.0 Rating</p>
                  <span className="text-sm text-gray-500">(60 reviews)</span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 