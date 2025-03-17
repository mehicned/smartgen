"use client";

import React from "react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="section bg-primary-600 text-white">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-white">Ready to Get Started?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-100">
            Join thousands of satisfied customers already using our boilerplate to build amazing websites and applications.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started"
              className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 rounded-md shadow-md"
            >
              Get Started Free
            </Link>
            <Link
              href="/get-started"
              className="btn btn-lg bg-primary-700 text-white hover:bg-primary-800 rounded-md shadow-md"
            >
              Schedule a Demo
            </Link>
          </div>
          <p className="mt-8 text-sm text-primary-200">
            No credit card required. Free 14-day trial.
          </p>
        </div>
      </div>
    </section>
  );
} 