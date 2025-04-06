"use client";

import React, { useState } from "react";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-50 to-primary-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white rounded-full text-primary font-semibold shadow-sm mb-3">
            LIMITED TIME OFFER
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Start Saving <span className="text-primary">Today</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-4">
            Join over 1,200+ Queensland homeowners who are saving up to 90% on electricity bills
          </p>
          <div className="flex justify-center items-center space-x-4 mb-2">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Free Site Assessment</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>No Obligation Quote</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Response Within 24hrs</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="p-8 md:p-12">
              {formStatus === "success" ? (
                <div className="max-w-md mx-auto text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-100">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">You&apos;re All Set!</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Thank you for choosing SmartGen Solar. One of our energy experts will call you within 24 hours to discuss your custom solar solution.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-lg hover:bg-primary-600 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {[
                      {
                        title: "Call Us Directly",
                        content: "1300 92 61 61",
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                        )
                      },
                      {
                        title: "Email Us",
                        content: "info@smartgensolar.com.au",
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        )
                      },
                      {
                        title: "Visit Our Office",
                        content: "6/2404 Logan Rd, Eight Mile Plains QLD 4113",
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        )
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0 bg-primary rounded-full p-3 text-white mb-4 shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white px-8 py-2 rounded-full font-bold text-lg shadow-lg">
                      Get Your Free Quote Now
                    </div>
                    
                    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white p-8 pt-10 rounded-lg border border-gray-100 shadow-inner">
                      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm"
                            placeholder="John Smith"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm"
                            placeholder="(04) 1234 5678"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm"
                            placeholder="4000"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in:</label>
                          <select
                            id="interest"
                            name="interest"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm"
                          >
                            <option value="">Select an option</option>
                            <option value="residential">Residential Solar</option>
                            <option value="commercial">Commercial Solar</option>
                            <option value="battery">Battery Storage</option>
                            <option value="maintenance">Maintenance/Repair</option>
                          </select>
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know?</label>
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm"
                            placeholder="Tell us about your current energy usage or any specific requirements"
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            required
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                          />
                          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-500">
                            I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a>
                          </label>
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md shadow-lg text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                          disabled={formStatus === "submitting"}
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Get My Savings Estimate
                              <svg className="ml-2 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <div className="mt-8 flex justify-center">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 max-w-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-3">
                              <svg className="h-5 w-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <p className="text-sm text-gray-500">
                              On average, our customers save <span className="font-semibold text-primary">$1,850/year</span> on electricity bills with a payback period of 3-5 years.
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 