import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | Vertexia",
  description: "Find answers to common questions about Vertexia's website design, development, SEO, and done-for-you services.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/faqs",
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
