"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FaqSection() {
  const faqs = [
    {
      question: "What is RadixUI Kit?",
      answer:
        "RadixUI Kit is a comprehensive collection of accessible, customizable UI components built with Radix UI primitives, Tailwind CSS, and TypeScript. It's designed to help developers create beautiful interfaces with minimal effort while maintaining high standards for accessibility and performance.",
    },
    {
      question: "Do I need to know Tailwind CSS to use RadixUI Kit?",
      answer:
        "While a basic understanding of Tailwind CSS is helpful, it's not required. Our components are pre-styled and ready to use out of the box. You can easily customize them using Tailwind classes if you want to match your brand's design language.",
    },
    {
      question: "Is RadixUI Kit accessible?",
      answer:
        "Yes, accessibility is a core feature of RadixUI Kit. All components follow WAI-ARIA standards, support keyboard navigation, and are thoroughly tested with screen readers. We believe that great UIs should be usable by everyone.",
    },
    {
      question: "Can I use RadixUI Kit with Next.js?",
      answer:
        "Absolutely! RadixUI Kit is designed to work seamlessly with Next.js. In fact, our components are optimized for Next.js App Router and work with both Server and Client Components where appropriate.",
    },
    {
      question: "Is RadixUI Kit free to use?",
      answer:
        "We offer both free and paid plans. The free plan includes all core components and is perfect for personal projects and learning. Our Pro and Enterprise plans offer additional components, priority support, and other benefits for professional use.",
    },
    {
      question: "How do I get support if I need help?",
      answer:
        "We provide comprehensive documentation, tutorials, and examples to help you get started. For Pro and Enterprise customers, we offer priority email support and dedicated assistance. Our community forum is also a great place to get help from other developers.",
    },
  ];

  return (
    <section className="py-24 bg-muted/20" id="faq">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-4 text-sm font-medium text-primary transition-colors border-primary/20 bg-primary/10">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about RadixUI Kit
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Have more questions? We're here to help.
            </p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 