"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

function PricingTier({
  name,
  price,
  description,
  features,
  highlighted = false,
  ctaText,
}: PricingTierProps) {
  return (
    <div
      className={`relative flex flex-col rounded-lg border p-6 sm:p-8 ${
        highlighted
          ? "border-primary bg-primary/5 shadow-lg"
          : "border-border bg-background"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="mb-4 flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-muted-foreground">/month</span>}
      </div>
      <ul className="mb-8 space-y-3 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`mt-auto w-full ${
          highlighted ? "" : "bg-primary/90 hover:bg-primary"
        }`}
        variant={highlighted ? "default" : "outline"}
      >
        {ctaText}
      </Button>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-4 text-sm font-medium text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that&apos;s right for you and start building beautiful interfaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <PricingTier
            name="Free"
            price="Free"
            description="Perfect for small projects and learning."
            features={[
              "Core components",
              "Light & dark mode",
              "Basic support",
              "Community access",
              "Documentation",
            ]}
            ctaText="Get Started"
          />
          <PricingTier
            name="Pro"
            price="$29"
            description="For serious developers and small teams."
            features={[
              "All Free features",
              "Advanced components",
              "Priority support",
              "Component customization",
              "No attribution required",
              "Updates & Fixes",
            ]}
            highlighted={true}
            ctaText="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$99"
            description="For large teams and organizations."
            features={[
              "All Pro features",
              "Custom development",
              "Dedicated support",
              "Custom branding",
              "Advanced security",
              "SLA",
              "24/7 Support",
            ]}
            ctaText="Contact Sales"
          />
        </div>

        <div className="mt-16 rounded-lg border bg-background p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Need a custom plan?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us for custom pricing for large organizations and special requirements.
          </p>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
} 