"use client";

import ContactForm from "@/components/sections/ContactForm";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="site">
        <ContactForm />
        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}
