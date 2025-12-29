"use client";

import { useEffect } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import FadeIn from "../components/FadeIn";
import FadeInStagger from "../components/FadeInStagger";

export default function Contact() {
  // Preserve SEO: Set page title and meta description
  useEffect(() => {
    document.title = "Contact Us | Loqua";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Loqua to transform your healthcare facility\'s communication. Schedule a demo or learn more about our AI-powered voice agent.');
    }
    
    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Contact Loqua | Schedule a Demo');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Get in touch with Loqua to transform your healthcare facility\'s communication.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo href="/" />
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#features" className="text-gray-600 hover:text-teal-600 transition">Features</Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-teal-600 transition">How It Works</Link>
              <Link href="/#goals" className="text-gray-600 hover:text-teal-600 transition">Our Goals</Link>
              <Link href="/contact" className="text-teal-600 font-medium">Contact</Link>
            </div>
            <Link href="/contact" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-2 rounded-full font-medium hover:from-teal-700 hover:to-cyan-700 transition shadow-lg shadow-teal-600/30">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 px-2">
            Let&apos;s Transform Healthcare<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to see how Loqua can revolutionize your healthcare facility&apos;s communication? We&apos;d love to hear from you and discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information - Mobile Optimized */}
            <FadeIn delay={0}>
              <div>
              <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Contact Information</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 sm:mb-6">We&apos;re Here to Help</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Have questions about Loqua? Want to schedule a demo? Or simply want to learn more about how we can help transform your healthcare communication? Reach out to us—we&apos;re here to help.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email Us</h4>
                    <p className="text-sm sm:text-base text-gray-600">hello@loqua.ai</p>
                    <p className="text-sm sm:text-base text-gray-600">support@loqua.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Call Us</h4>
                    <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Visit Us</h4>
                    <p className="text-sm sm:text-base text-gray-600">123 Innovation Drive<br />Tech City, TC 12345<br />United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl sm:rounded-2xl border border-teal-100">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Schedule a Demo</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Interested in seeing Loqua in action? Schedule a personalized demo and we&apos;ll show you how it can transform your healthcare facility&apos;s communication.
                </p>
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition text-sm sm:text-base"
                >
                  Schedule Now
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </div>
            </FadeIn>

            {/* Contact Form - Mobile Optimized */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                    placeholder="john.doe@healthcare.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                    placeholder="Healthcare Facility Name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Schedule a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="integration">Integration Questions</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition resize-none"
                    placeholder="Tell us about your healthcare facility and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition shadow-lg shadow-teal-600/30"
                >
                  Send Message
                </button>

                <p className="text-[10px] sm:text-xs text-gray-500 text-center leading-relaxed">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2">
            <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          </div>

          <FadeInStagger className="space-y-4 sm:space-y-6">
            {[
              {
                question: "How quickly can Loqua be implemented?",
                answer: "Implementation typically takes 2-4 weeks, depending on your facility's specific requirements and integration needs. We work closely with your team to ensure a smooth transition.",
              },
              {
                question: "Does Loqua integrate with our existing EHR system?",
                answer: "Yes! Loqua is designed to integrate seamlessly with major EHR platforms including Epic, Cerner, Allscripts, and others. Our team will work with you to ensure proper integration.",
              },
              {
                question: "Is Loqua HIPAA compliant?",
                answer: "Absolutely. Loqua is built with healthcare security standards in mind and is fully HIPAA compliant. All patient data is encrypted and handled according to strict healthcare privacy regulations.",
              },
              {
                question: "Can Loqua handle emergency situations?",
                answer: "Yes, Loqua is trained to recognize urgent medical situations and can immediately escalate calls to appropriate medical staff or emergency services when necessary.",
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer comprehensive support including 24/7 technical assistance, regular system updates, training for your staff, and ongoing optimization based on your facility's needs.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-md sm:shadow-lg border border-gray-100 hover-lift hover:border-teal-200 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Logo variant="footer" size="md" className="mb-4" href="/" />
              <p className="text-gray-400">
                Intelligent voice agent for healthcare. Transforming patient communication with AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-teal-400 transition">Home</Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-teal-400 transition">How It Works</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal-400 transition">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">HIPAA Compliance</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Loqua. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

