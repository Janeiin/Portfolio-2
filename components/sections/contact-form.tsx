"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    // Wire to your email service, CRM or API route.
    setSent(true);
  };

  return (
    <div className="rounded-card border border-stone/70 bg-ivory p-8 shadow-soft md:p-12">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-14 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-burgundy text-ivory">
              <Check className="h-6 w-6" />
            </span>
            <h3 className="mt-8 font-serif text-3xl font-light text-ink">
              Message received
            </h3>
            <p className="mt-4 max-w-sm text-graphite/90">
              Thank you for reaching out. Expect a considered reply within two
              business days.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-graphite"
                >
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-graphite"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="organisation"
                className="text-xs font-medium uppercase tracking-[0.18em] text-graphite"
              >
                Organisation
              </label>
              <Input
                id="organisation"
                name="organisation"
                placeholder="Company or organisation"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.18em] text-graphite"
              >
                What are you working towards?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about the challenge, the ambition, or both."
                required
              />
            </div>
            <Button onClick={handleSubmit} size="lg" className="w-full md:w-auto">
              Start the Conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
