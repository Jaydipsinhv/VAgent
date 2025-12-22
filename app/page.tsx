"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./components/Logo";
import FadeIn from "./components/FadeIn";
import FadeInStagger from "./components/FadeInStagger";

export default function Home() {
  const features = [
    {
      title: "24/7 Patient Communication",
      description: "Never miss a patient call. VAgent handles all incoming calls, texts, and emails instantly, ensuring every patient receives immediate attention.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Intelligent Appointment Scheduling",
      description: "Automatically schedule, reschedule, and manage appointments with natural language understanding. Seamlessly integrates with your existing EHR systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "HIPAA-Compliant & Secure",
      description: "Built with healthcare security standards in mind. VAgent ensures all patient data is encrypted, secure, and fully compliant with HIPAA regulations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      title: "Proactive Patient Follow-ups",
      description: "Automated appointment reminders, medication refill notifications, and post-visit check-ins keep patients engaged and improve health outcomes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Real-time dashboards provide insights into patient communication patterns, appointment conversion rates, and operational efficiency metrics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Seamless EHR Integration",
      description: "Connect with major EHR platforms to sync patient data, appointments, and records automatically. No manual data entry required.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const goals = [
    {
      title: "Improve Patient Access",
      description: "Ensure every patient can reach healthcare services when they need them, regardless of time or day.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Reduce Administrative Burden",
      description: "Free healthcare staff from routine communication tasks so they can focus on delivering quality care.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Enhance Patient Experience",
      description: "Provide instant, empathetic, and accurate responses that make patients feel heard and valued.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Increase Operational Efficiency",
      description: "Streamline workflows, reduce no-shows, and optimize resource allocation through intelligent automation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "AI-Powered Voice Technology",
      description: "Leverage cutting-edge natural language processing and voice recognition to create human-like conversations that understand context, medical terminology, and patient needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "02",
      title: "Healthcare-Specific Training",
      description: "Train our AI models on healthcare protocols, medical terminology, and patient communication best practices to ensure accurate, empathetic interactions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: "03",
      title: "Continuous Learning",
      description: "Implement machine learning systems that continuously improve from every interaction, feedback, and outcome to become smarter and more effective over time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Seamless Integration",
      description: "Build robust APIs and integrations that connect VAgent with existing healthcare infrastructure, ensuring smooth data flow and minimal disruption.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo href="/" />
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5">Features</a>
              <Link href="/how-it-works" className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5">How It Works</Link>
              <a href="#goals" className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5">Our Goals</a>
              <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:-translate-y-0.5">Contact</Link>
            </div>
            <Link href="/contact" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-2 rounded-full font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <FadeIn delay={0}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-500 rounded-full animate-pulse"></span>
                  AI-Powered Healthcare Communication
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  Transform Healthcare<br />
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Communication</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  VAgent is an intelligent voice agent designed specifically for healthcare. We're building the future where every patient call is answered instantly, every appointment is scheduled seamlessly, and healthcare providers can focus on what matters most—delivering exceptional care.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:-translate-y-0.5">
                    Learn How It Works
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-teal-300 hover:-translate-y-0.5">
                    Contact Us
                  </Link>
                </div>
                <div className="flex items-center gap-4 sm:gap-8 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-gray-200 justify-center lg:justify-start">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-500">Always Available</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">HIPAA</div>
                    <div className="text-xs sm:text-sm text-gray-500">Compliant</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">AI</div>
                    <div className="text-xs sm:text-sm text-gray-500">Powered</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative hidden lg:flex items-center justify-center">
                <Image
                  src="/vagent-hero.png"
                  alt="VAgent - Intelligent Healthcare Voice Agent"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-[500px]"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We're Building Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2">
            <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Product</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">What We're Building</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              VAgent is an AI-powered voice assistant specifically designed for healthcare facilities. We're creating an intelligent system that understands medical terminology, handles patient inquiries with empathy, and seamlessly integrates with your existing healthcare infrastructure.
            </p>
          </div>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
            {features.map((feature, index) => (
              <div key={index} className="group p-5 sm:p-6 lg:p-8 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-teal-200 hover-lift">
                {/* Icon with gradient card styling - responsive */}
                <div className="mb-4 sm:mb-6">
                  <div className="relative inline-block group/icon">
                    {/* Outer glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-30 group-hover/icon:opacity-50 transition-opacity`}></div>
                    
                    {/* Main icon card - responsive sizing */}
                    <div className={`relative bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg sm:shadow-xl transform group-hover/icon:scale-105 transition-all duration-300`}>
                      {/* Icon - responsive sizing */}
                      <div className="text-white w-5 h-5 sm:w-6 sm:h-6">
                        {feature.icon}
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 bg-white/10 rounded-tl-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Our Goals Section - Mobile Optimized */}
      <section id="goals" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2">
            <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">What We Aim to Achieve</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our vision is to revolutionize healthcare communication by making it more accessible, efficient, and patient-centered. Here's what drives us:
            </p>
          </div>

          <FadeInStagger className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon with gradient card styling - responsive */}
                  <div className="relative flex-shrink-0 group/icon">
                    {/* Outer glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-30 group-hover/icon:opacity-50 transition-opacity`}></div>
                    
                    {/* Main icon card - responsive sizing */}
                    <div className={`relative bg-gradient-to-br ${goal.gradient} rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-lg sm:shadow-xl transform group-hover/icon:scale-105 transition-all duration-300`}>
                      {/* Icon - responsive sizing */}
                      <div className="text-white w-5 h-5 sm:w-6 sm:h-6">
                        {goal.icon}
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute bottom-0 right-0 w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-tl-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{goal.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{goal.description}</p>
                  </div>
                  </div>
                </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* How We Plan to Achieve It - Mobile Optimized */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 bg-gradient-to-br from-white via-gray-50 to-teal-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2">
            <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">How We Plan to Achieve It</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're combining cutting-edge AI technology with deep healthcare domain expertise to build a solution that truly understands and serves the healthcare industry.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 via-cyan-200 to-teal-200 transform -translate-x-1/2"></div>
            
            <FadeInStagger className="space-y-6 sm:space-y-8 lg:space-y-10 px-2 sm:px-0">
              {approach.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}>
                    {/* Step Number & Icon Card - responsive */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="relative group">
                        {/* Outer glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                        
                        {/* Main card - responsive sizing */}
                        <div className={`relative bg-gradient-to-br ${item.gradient} rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg sm:shadow-xl transform group-hover:scale-105 transition-all duration-300`}>
                          {/* Step number - responsive */}
                          <div className="absolute -top-2 -left-2 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-xs sm:text-sm font-bold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                              {item.step}
                            </span>
                          </div>
                          
                          {/* Icon - responsive sizing */}
                          <div className="text-white w-6 h-6 sm:w-8 sm:h-8">
                            {item.icon}
                          </div>
                          
                          {/* Decorative element */}
                          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-tl-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Card - responsive */}
                    <div className={`flex-1 lg:w-2/5 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-teal-200">
                        <div className={`flex items-center gap-2 mb-2 sm:mb-3 ${index % 2 === 0 ? "" : "lg:justify-end"}`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.gradient}`}></div>
                          <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">Step {item.step}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block flex-1 lg:w-2/5"></div>
                  </div>
                  
                  {/* Connecting arrow for mobile - responsive */}
                  {index < approach.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4 sm:my-6">
                      <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-teal-300 to-cyan-300">                      </div>
                    </div>
                  )}
                </div>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Communication?
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Join us in building the future of healthcare communication. Let's discuss how VAgent can help your facility deliver better patient experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition shadow-lg"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border-2 border-white/30"
            >
              Learn More
            </Link>
          </div>
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
                  <a href="#features" className="hover:text-teal-400 transition">Features</a>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-teal-400 transition">How It Works</Link>
                </li>
                <li>
                  <a href="#goals" className="hover:text-teal-400 transition">Our Goals</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-teal-400 transition">Contact Us</Link>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">Blog</a>
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
              &copy; 2025 VAgent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
