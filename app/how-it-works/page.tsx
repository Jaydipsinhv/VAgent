"use client";

import { useEffect } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import FadeIn from "../components/FadeIn";
import FadeInStagger from "../components/FadeInStagger";

export default function HowItWorks() {
  // Preserve SEO: Set page title and meta description
  useEffect(() => {
    document.title = "How It Works | Loqua";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn how Loqua transforms healthcare communication in 8 simple steps. From consultation to fully autonomous operation, see our AI-powered implementation process.');
    }
    
    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'How Loqua Works | AI Healthcare Voice Agent Implementation');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Learn how Loqua transforms healthcare communication in 8 simple steps.');
    }
  }, []);
  const steps = [
    {
      number: "1",
      title: "Initial Consultation & System Assessment",
      description: "We begin with a comprehensive consultation to understand your healthcare facility's workflow, patient communication patterns, and identify key pain points in your current system. Together, we map out your ideal patient experience and define what success looks like for your organization.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "2",
      title: "Review Historical Patient Interactions",
      description: "You provide examples of past patient calls, appointment scheduling interactions, and common inquiries. We analyze these interactions to understand your patient communication style, medical terminology preferences, and the types of questions your staff handles daily.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "3",
      title: "Train Your AI Healthcare Assistant",
      description: "Using your inputs and healthcare protocols, we train your AI assistant to replicate your best staff member's approach. The system learns medical terminology, appointment scheduling protocols, triage questions, HIPAA compliance requirements, and the compassionate communication style your patients expect.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "4",
      title: "AI Assistant Goes Live",
      description: "Your AI healthcare assistant is assigned a dedicated phone number and begins handling patient calls immediately. Every call is answered, every patient is engaged with empathy, and each interaction is automatically documented. The system handles appointment scheduling, answers common medical questions, and triages urgent concerns appropriately.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "5",
      title: "Proactive Patient Follow-ups",
      description: "Your AI assistant doesn't just wait for calls, it proactively follows up with patients. Whether it's appointment reminders, medication refill notifications, post-visit check-ins, or preventive care reminders, the system maintains consistent, HIPAA-compliant communication across voice, SMS, and email channels.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "6",
      title: "Monitor Performance Dashboard",
      description: "Gain complete visibility into your patient communication system. Review call recordings, read conversation summaries, monitor appointment booking rates, and track patient satisfaction scores. Instantly see how many patients were served, appointment conversion rates, and identify areas for improvement, all in real-time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "7",
      title: "Continuous Learning & Optimization",
      description: "You provide feedback on the AI assistant's conversations and performance. Each round of feedback makes the system smarter, more accurate, and better aligned with your healthcare protocols. The system continuously learns from interactions to improve medical knowledge, appointment handling, and patient communication quality.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      number: "8",
      title: "Fully Autonomous Operation",
      description: "With training, feedback, and workflows in place, your AI healthcare assistant operates as a fully independent member of your team. It handles all patient calls, manages appointment scheduling, executes follow-ups, integrates seamlessly with your EHR system, and ensures smooth, end-to-end patient communication 24/7, without breaks or holidays.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
  ];

  const benefits = [
    {
      title: "Improved Patient Access",
      description: "Every patient call gets an instant, empathetic response. No more busy signals, voicemails, or missed opportunities. Patients can schedule appointments, get answers, and receive care guidance 24/7.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Reduced Administrative Burden",
      description: "Eliminate the need for additional front desk staff or call centers while handling hundreds of patient inquiries daily. Your existing team can focus on in-person care while the AI handles routine communications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Higher Appointment Conversion",
      description: "No wasted marketing spend. Every call, text, and form submission is answered immediately, qualified appropriately, and converted into scheduled appointments. Your patient acquisition costs decrease while satisfaction increases.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Always-On Patient Engagement",
      description: "Patients receive consistent, HIPAA-compliant communication through voice, text, and email, regardless of time of day. Appointment reminders, follow-ups, and care coordination happen automatically, keeping patients engaged in their health journey.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Faster Patient Triage",
      description: "The AI assistant qualifies patient needs immediately, routing urgent concerns appropriately while handling routine inquiries efficiently. Your clinical staff only spend time with patients who need their expertise, reducing wait times and improving care quality.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Enhanced Clinical Efficiency",
      description: "Your healthcare providers stop wasting hours on administrative tasks, voicemails, and appointment coordination. Instead, they focus 100% on delivering quality patient care, leading to better outcomes and higher job satisfaction.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-teal-600 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo href="/" />
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#features" className="text-gray-600 hover:text-teal-600 transition">Features</Link>
              <Link href="/how-it-works" className="text-teal-600 font-medium">How It Works</Link>
              <Link href="/#goals" className="text-gray-600 hover:text-teal-600 transition">Our Goals</Link>
              <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition">Contact</Link>
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
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Loqua Implementation Process
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 px-2">
              From First Call to<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Seamless Patient Care</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              The faster you respond, the better patient outcomes you achieve. Loqua ensures no call goes unanswered, every patient is engaged with empathy, and all interactions are seamlessly integrated with your healthcare system, so your team spends time on care, not administration.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Modern Zigzag Timeline Layout */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16 px-2">
            <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">8-Step Process</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">Your Journey to Success</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              A comprehensive, step-by-step approach to transforming your patient communication system
            </p>
          </div>

          {/* Desktop & Tablet: Enhanced Zigzag Timeline */}
          <div className="hidden md:block relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-cyan-300 to-teal-200 transform -translate-x-1/2 rounded-full"></div>
            
            <FadeInStagger className="space-y-0" staggerDelay={0.15}>
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const isLast = index === steps.length - 1;
                
                return (
                  <div key={index} className={`relative flex items-center ${index > 0 ? 'mt-16' : ''}`}>
                    {/* Content container - alternates left/right */}
                    <div className={`w-1/2 ${isLeft ? 'pr-8' : 'ml-auto pl-8'}`}>
                      {/* Card */}
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-300 group ${
                        isLast ? 'bg-gradient-to-br from-teal-600 to-cyan-600 border-teal-500' : ''
                      }`}>
                        {/* Step label */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                          <span className={`text-xs font-semibold uppercase tracking-wider ${
                            isLast ? 'text-teal-200' : 'text-gray-500'
                          }`}>
                            Step {step.number}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="flex items-start gap-4">
                          {/* Icon badge */}
                          <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${
                            isLast ? 'bg-white/20 border-2 border-white/30' : step.gradient
                          } shadow-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform`}>
                            <div className="text-white">
                              {step.icon}
                            </div>
                          </div>
                          
                          {/* Text content - always left-aligned for readability */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-lg font-bold mb-2 ${
                              isLast ? 'text-white' : 'text-gray-900'
                            }`}>
                              {step.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${
                              isLast ? 'text-teal-50' : 'text-gray-600'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center node with connecting line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                      {/* Node */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} shadow-xl flex items-center justify-center border-4 border-white`}>
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      
                      {/* Connecting line to next step */}
                      {!isLast && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-teal-300 to-cyan-300 mt-2"></div>
                      )}
                    </div>

                    {/* Decorative arrow pointing to center */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 z-0 ${
                      isLeft ? 'right-1/2 mr-4' : 'left-1/2 ml-4'
                    }`}>
                      <div className={`w-6 h-0.5 bg-gradient-to-r ${
                        isLeft ? 'from-teal-300 to-transparent' : 'from-transparent to-cyan-300'
                      }`}></div>
                    </div>
                  </div>
                );
              })}
            </FadeInStagger>
          </div>

          {/* Mobile: Modern Vertical Timeline - Optimized for Small Screens */}
          <div className="md:hidden">
            <div className="max-w-2xl mx-auto relative px-2 sm:px-4">
              {/* Modern timeline with gradient line */}
              <div className="relative">
                {/* Responsive timeline line - adjusted for smaller screens */}
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-400 rounded-full"></div>
                
                <FadeInStagger className="space-y-4 sm:space-y-6">
                  {steps.map((step, index) => {
                    const isLast = index === steps.length - 1;
                    
                    return (
                      <div key={index} className="relative pl-16 sm:pl-20">
                        {/* Step number badge with icon - responsive sizing */}
                        <div className={`absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg sm:shadow-xl flex items-center justify-center transition-transform ${
                          isLast ? 'ring-4 ring-teal-200' : ''
                        }`}>
                          <div className="text-white text-xs sm:text-sm">
                            {step.icon}
                          </div>
                          {/* Number badge - responsive positioning */}
                          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                            <span className={`text-[10px] sm:text-xs font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Card - optimized padding and typography */}
                        <div className={`bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md sm:shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 ${
                          isLast ? 'bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-400' : 'border-gray-200'
                        }`}>
                          {/* Step label */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`h-0.5 sm:h-1 w-6 sm:w-8 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                            <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${
                              isLast ? 'text-teal-700' : 'text-gray-500'
                            }`}>
                              Step {step.number}
                            </span>
                          </div>
                          
                          {/* Title - responsive sizing */}
                          <h3 className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 ${
                            isLast ? 'text-teal-900' : 'text-gray-900'
                          }`}>
                            {step.title}
                          </h3>
                          
                          {/* Description - optimized for mobile reading */}
                          <p className={`text-sm leading-relaxed ${
                            isLast ? 'text-teal-800' : 'text-gray-600'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-2">
            <span className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Value Proposition</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
              The ROI of Never Missing a Patient
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transform your healthcare operations with intelligent patient communication
            </p>
          </div>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover-lift h-full flex flex-col"
              >
              {/* Icon with gradient card styling - responsive sizing */}
              <div className="mb-4 sm:mb-6">
                <div className="relative inline-block group/icon">
                  {/* Outer glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-30 group-hover/icon:opacity-50 transition-opacity`}></div>
                  
                  {/* Main icon card - responsive sizing */}
                  <div className={`relative bg-gradient-to-br ${benefit.gradient} rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg sm:shadow-xl transform group-hover/icon:scale-105 transition-all duration-300`}>
                    {/* Icon - responsive sizing */}
                    <div className="text-white w-5 h-5 sm:w-6 sm:h-6">
                      {benefit.icon}
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 bg-white/10 rounded-tl-full"></div>
                  </div>
                </div>
              </div>
              
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{benefit.description}</p>
                </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Communication?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join forward-thinking healthcare facilities that are revolutionizing patient care with Loqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition shadow-lg">
              Schedule a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition border-2 border-teal-500">
              Contact Us
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@loqua.ai</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
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
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Loqua. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
