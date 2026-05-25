import React from "react";

const Schema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vertexia",
    url: "https://vertexiaio.vercel.app",
    logo:
      "https://vertexiaio.vercel.app/favicon_io/android-chrome-512x512.png",
    description:
      "Vertexia is a custom website development agency in Pakistan specializing in Next.js and React websites.",
    sameAs: [
      "https://twitter.com/vertexia",
      "https://facebook.com/vertexia",
      "https://linkedin.com/company/vertexia",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vertexia",
    url: "https://vertexiaio.vercel.app",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};

export default Schema;