"use client";

import React from "react";
import Image from "next/image";

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

function Testimonial({ content, author }: TestimonialProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <svg
            className="h-10 w-10 text-primary-200 mb-4"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-lg leading-relaxed text-gray-700">{content}</p>
        </div>
        <div className="mt-2 flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-gray-200">
            <Image
              src={author.avatar}
              alt={`${author.name}'s avatar`}
              width={48}
              height={48}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{author.name}</h4>
            <p className="text-sm text-gray-500">{author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  const testimonials = [
    {
      content:
        "This boilerplate saved us countless hours of development time. The clean code and structure made it easy to customize to our needs.",
      author: {
        name: "Sarah Johnson",
        role: "CTO at TechCorp",
        avatar: `https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff&size=200`,
      },
    },
    {
      content:
        "I've used many templates in the past, but this one stands out for its attention to detail and performance. Highly recommended!",
      author: {
        name: "Michael Chen",
        role: "Product Manager",
        avatar: `https://ui-avatars.com/api/?name=Michael+Chen&background=a855f7&color=fff&size=200`,
      },
    },
    {
      content:
        "The responsive design works flawlessly across all devices. Our conversion rate increased by 30% after launching with this template.",
      author: {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        avatar: `https://ui-avatars.com/api/?name=Emily+Rodriguez&background=3b82f6&color=fff&size=200`,
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="testimonials">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 