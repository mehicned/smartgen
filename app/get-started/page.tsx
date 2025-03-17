"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GetStarted() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  // Mock sign-up functionality
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // In a real app, this would handle account creation
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 bg-white">
        <div className="container py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary-600 flex items-center justify-center">
              <span className="text-white font-semibold">B</span>
            </div>
            <span className="text-xl font-semibold">Boilerplate</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-3xl font-bold">Start your free trial</h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-medium text-primary-600 hover:text-primary-500">
                Sign in
              </Link>
            </p>
          </div>
          
          <div className="mt-8 bg-white py-8 px-6 shadow-sm rounded-lg border border-gray-200">
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className={`h-2 rounded-full ${step >= 1 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                </div>
                <div className="w-4"></div>
                <div className="flex-1">
                  <div className={`h-2 rounded-full ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Account Details</span>
                <span>Plan Selection</span>
              </div>
            </div>
            
            {step === 1 ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Continue
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <p className="text-lg font-medium text-gray-900">Choose your plan</p>
                  
                  {/* Free Plan */}
                  <div className="relative border rounded-md p-4 flex hover:border-primary-500 cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      id="free-plan"
                      defaultChecked
                      className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <label htmlFor="free-plan" className="block text-sm font-medium text-gray-900">
                        Free Plan
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        Basic features, perfect for personal projects
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-900">$0/month</p>
                    </div>
                  </div>
                  
                  {/* Pro Plan */}
                  <div className="relative border rounded-md p-4 flex hover:border-primary-500 cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      id="pro-plan"
                      className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <label htmlFor="pro-plan" className="block text-sm font-medium text-gray-900">
                        Pro Plan
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        All features, priority support, perfect for professionals
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-900">$19/month</p>
                    </div>
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary-500 text-white text-xs rounded-full px-2 py-1">
                      Popular
                    </div>
                  </div>
                  
                  {/* Team Plan */}
                  <div className="relative border rounded-md p-4 flex hover:border-primary-500 cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      id="team-plan"
                      className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <label htmlFor="team-plan" className="block text-sm font-medium text-gray-900">
                        Team Plan
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        Perfect for teams, includes team management features
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-900">$49/month</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Start free trial
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-6 text-xs text-gray-500 text-center">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-primary-600 hover:text-primary-500">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary-600 hover:text-primary-500">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Boilerplate Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 