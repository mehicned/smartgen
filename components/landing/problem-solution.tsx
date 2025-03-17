import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-background" id="solutions">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-4 text-sm font-medium text-primary transition-colors border-primary/20 bg-primary/10">
            The Challenge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why building UIs has been so difficult
          </h2>
          <p className="text-xl text-muted-foreground">
            Most developers face significant challenges when creating accessible, 
            consistent, and beautiful user interfaces.
          </p>
        </div>

        {/* Problem Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              The frustrating reality of UI development
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Inconsistent design implementation</h4>
                  <p className="text-muted-foreground">
                    Teams struggle to maintain consistency across components, leading to disjointed user experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Accessibility is an afterthought</h4>
                  <p className="text-muted-foreground">
                    Most UI libraries ignore accessibility or make it difficult to implement correctly.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Slow development cycles</h4>
                  <p className="text-muted-foreground">
                    Building UI components from scratch is time-consuming and error-prone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-muted/30 rounded-lg p-6 relative">
            <div className="aspect-video rounded-md overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80"
                alt="Frustrated developer with code issues"
                width={800}
                height={450}
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-muted/30 rounded-lg p-6 relative">
            <div className="aspect-video rounded-md overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80"
                alt="Clean, organized code on a computer screen"
                width={800}
                height={450}
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent"></div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-4 text-sm font-medium text-primary transition-colors border-primary/20 bg-primary/10">
              The Solution
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              RadixUI Kit: UI development reimagined
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Consistent design system</h4>
                  <p className="text-muted-foreground">
                    Our components follow a unified design language, ensuring a cohesive user experience.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Accessibility built-in</h4>
                  <p className="text-muted-foreground">
                    Every component is WCAG compliant and keyboard navigable out of the box.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">10x development speed</h4>
                  <p className="text-muted-foreground">
                    Create beautiful interfaces in a fraction of the time with our ready-to-use components.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="rounded-md">
                Explore the Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 