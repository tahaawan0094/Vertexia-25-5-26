"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(31,56,255,0.35)_0%,rgba(31,56,255,0)_62%),radial-gradient(68%_58%_at_50%_62%,rgba(31,56,255,0.55)_0%,rgba(31,56,255,0)_72%),linear-gradient(180deg,#020a4b_0%,#031057_42%,#0a25e8_62%,#050a54_82%,#01030b_100%)]">
      {/* Contact Header Section */}
      <div className="relative py-12 px-4">
        <div className="mx-auto max-w-[1300px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display max-[640px]:text-3xl">Contact Us</h1>
            <div className="flex items-center justify-center gap-3 text-white/80 text-lg font-body">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>»</span>
              <span>Contact</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
        <StaggerContainer className="relative z-10 mx-auto max-w-[1300px] w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Contact Info Card */}
          <StaggerItem>
            <motion.div
              className="relative overflow-visible bg-gradient-to-br from-slate-700/40 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between font-body"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none scale-150">
                <img 
                  src="/vertexia-logo.png" 
                  alt="Vertexia Logo" 
                  style={{ width: '1200px', height: '1200px' }}
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 font-display max-[640px]:text-2xl"
                >
                  Get In Touch
                </motion.h2>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-8"
                >
                  <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Address</h3>
                  <p className="text-white/80 text-base">DHA phase 6 Defence V Defence Housing Authority</p>
                  <div className="mt-3 border-t border-white/10" />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Phone</h3>
                  <p className="text-white/80 text-base">+92 336 824 0877</p>
                  <div className="mt-3 border-t border-white/10" />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-8"
                >
                  <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Email</h3>
                  <p className="text-white/80 text-base">reach.vertexia@gmail.com</p>
                  <div className="mt-3 border-t border-white/10" />
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">We Are Open</h3>
                  <p className="text-white/80 text-base">Monday To Saturday •• 09:30 to 18:00</p>
                </motion.div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Right Side - Form */}
          <StaggerItem>
            <motion.div
              className="flex flex-col justify-center font-body"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-display max-[640px]:text-2xl">
                  Do You Have A Website Design In Mind?
                </h2>
                <p className="text-lg md:text-xl text-white mb-2 max-[640px]:text-base">Bring Your Vision To Life With Us</p>
                <p className="text-white/70 max-[640px]:text-sm">
                  Visit us or send a message to consult with our Representative.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl z-50"
                >
                  <motion.div
                    className="text-center bg-white p-8 rounded-2xl"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    >
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-gray-800 text-xl font-bold mb-2 font-display">Message Sent!</h3>
                    <p className="text-gray-600 font-body">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    whileFocus={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-white font-medium mb-2 text-sm">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg bg-white border-b-2 transition-all duration-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 ${
                        errors.name
                          ? "border-b-red-500"
                          : "border-b-gray-300 hover:border-b-gray-400 focus:border-b-blue-500"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    whileFocus={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-white font-medium mb-2 text-sm">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-lg bg-white border-b-2 transition-all duration-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 ${
                        errors.email
                          ? "border-b-red-500"
                          : "border-b-gray-300 hover:border-b-gray-400 focus:border-b-blue-500"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Phone and Address Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <motion.div
                    whileFocus={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-white font-medium mb-2 text-sm">
                      Phone
                    </label>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 (300) 000-0000"
                      className="w-full px-4 py-3 rounded-lg bg-white border-b-2 border-b-gray-300 hover:border-b-gray-400 focus:border-b-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    />
                  </motion.div>

                  {/* Address Field */}
                  <motion.div
                    whileFocus={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-white font-medium mb-2 text-sm">
                      Address
                    </label>
                    <motion.input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      className="w-full px-4 py-3 rounded-lg bg-white border-b-2 border-b-gray-300 hover:border-b-gray-400 focus:border-b-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    />
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div
                  whileFocus={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-white font-medium mb-2 text-sm">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg bg-white border-b-2 transition-all duration-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 resize-none ${
                      errors.message
                        ? "border-b-red-500"
                        : "border-b-gray-300 hover:border-b-gray-400 focus:border-b-blue-500"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="pt-6"
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black hover:bg-gray-900 disabled:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg uppercase tracking-wider text-sm"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </StaggerItem>
        </div>
      </StaggerContainer>
      </div>
    </section>
  );
}
