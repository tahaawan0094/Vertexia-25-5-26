import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & SEO Blog | Vertexia",
  description: "Read guides on web development, SEO, and growing your business online.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
