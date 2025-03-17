"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform opacity-20">
          <svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="400" cy="400" r="400" fill="url(#paint0_radial_19_12)" />
            <defs>
              <radialGradient
                id="paint0_radial_19_12"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(400 400) rotate(90) scale(400)"
              >
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform opacity-20">
          <svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="400" cy="400" r="400" fill="url(#paint1_radial_19_13)" />
            <defs>
              <radialGradient
                id="paint1_radial_19_13"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(400 400) rotate(90) scale(400)"
              >
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">
            Modern Landing Page
            <span className="block text-primary-600">Boilerplate</span>
          </h1>
          <p className="mb-12 text-lg md:text-xl">
            A clean, professional landing page template built with Next.js, Tailwind CSS, and
            Radix UI. Perfect for startups, products, and services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#features" className="btn btn-primary btn-lg rounded-md">
              Get Started
            </Link>
            <Link href="#features" className="btn btn-secondary btn-lg rounded-md">
              Learn More
            </Link>
          </div>
          
          <div className="mt-16">
            <div className="relative mx-auto max-w-5xl">
              <div className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&h=720&q=80"
                  alt="Modern dashboard interface"
                  width={1280}
                  height={720}
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 