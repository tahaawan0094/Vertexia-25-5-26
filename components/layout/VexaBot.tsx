"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const quickReplies = [
  "I’m already a customer 🙋‍♂️",
  "I’m new — help me get started 🚀",
];

function getBotReply(text: string) {
  const lower = text.toLowerCase();

  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("pricing") ||
    lower.includes("budget") ||
    lower.includes("kitna")
  ) {
    return "Our websites start from PKR 22,000 depending on features and complexity.";
  }

  if (
    lower.includes("ecom") ||
    lower.includes("shop") ||
    lower.includes("store") ||
    lower.includes("payment") ||
    lower.includes("checkout")
  ) {
    return "Yes 👍 We build full ecommerce stores with cart, checkout, and payment integration.";
  }

  if (
    lower.includes("service") ||
    lower.includes("build") ||
    lower.includes("website") ||
    lower.includes("design")
  ) {
    return "We create custom React / Next.js websites, ecommerce stores, and SEO-optimized business websites.";
  }

  if (
    lower.includes("seo") ||
    lower.includes("ranking") ||
    lower.includes("google")
  ) {
    return "Yes 👍 We also provide SEO services to help your website rank on Google and get organic traffic.";
  }

  if (
    lower.includes("hi") ||
    lower.includes("hello") ||
    lower.includes("hey")
  ) {
    return "Hey 👋 I’m Vexa. Tell me what you want to build or improve for your business.";
  }

  const fallback = [
    "Can you tell me a bit more so I can help you better?",
    "I can help with pricing, websites, SEO, or ecommerce. What are you looking for?",
    "Are you trying to build a new website or improve an existing one?",
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
}

export default function VexaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text:
        "Hi 👋 I’m Vexa. I can help you with websites, pricing, SEO, or ecommerce.",
    },
  ]);

  const handleSend = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: value },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "bot",
          text: getBotReply(value),
        },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* CHAT WINDOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-10 right-10 w-[420px] max-w-[95vw] rounded-[28px] bg-[#0b0f1a] border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  {/* CUSTOM ICON (NO LIBRARY) */}
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="black"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  <circle cx="9" cy="12" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="15" cy="12" r="1" />
</svg>
                  </div>

                  <div>
                    <p className="text-white font-semibold">Vexa</p>
                    <p className="text-xs text-gray-400">AI Website Assistant</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* INTRO */}
              <div className="px-5 pt-4 text-sm text-gray-300">
                Ask anything about websites, pricing, or SEO 👇
              </div>

              {/* MESSAGES */}
              <div className="h-[360px] overflow-y-auto px-5 py-4 space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${
                      m.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        m.from === "user"
                          ? "bg-white text-black"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* QUICK REPLIES */}
              <div className="px-5 flex gap-2 flex-wrap pb-3">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* INPUT */}
              <div className="p-4 border-t border-white/10 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 text-white px-4 py-2 rounded-full outline-none"
                />
                <button
                  onClick={() => handleSend()}
                  className="bg-white text-black px-4 py-2 rounded-full font-medium hover:scale-105 transition"
                >
                  Send
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition"
      >
        {/* SAME ICON */}
<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="black"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  <circle cx="9" cy="12" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="15" cy="12" r="1" />
</svg>
      </button>
    </div>
  );
}