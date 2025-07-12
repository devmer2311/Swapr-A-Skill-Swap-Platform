'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Search, Star, Shield, Zap, Globe, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-medium text-gray-900">Swapr</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
              <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/app"
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-200"
              >
                Get started
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
                <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
                <Link
                  href="/app"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 text-center"
                >
                  Get started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section ref={heroRef} className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-element opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
              Swap skills,
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                grow together
              </span>
            </h1>
          </div>
          
          <div className="fade-in-element opacity-0" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with your community to exchange skills, learn new talents, and build meaningful relationships. Your next learning opportunity is just a swap away.
            </p>
          </div>

          <div className="fade-in-element opacity-0" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/app"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              Start swapping
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-element opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal text-gray-900 mb-4 sm:mb-6">
              Built for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> everyone</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Whether you're a beginner or expert, Swapr makes skill sharing accessible, secure, and rewarding for all.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="fade-in-element opacity-0">
              <div className="space-y-6 sm:space-y-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-element opacity-0">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Sarah Chen</div>
                      <div className="text-sm text-gray-500">Graphic Designer</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-700">Skills I offer:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Photoshop</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Illustrator</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">UI Design</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-700">Skills I want:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Data Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-element opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal text-gray-900 mb-4 sm:mb-6">
              How it
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> works</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Getting started with skill swapping is simple. Follow these steps to begin your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.title}
                className={`fade-in-element opacity-0 floating-card p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${step.gradient} text-white relative overflow-hidden group cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative z-10">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 opacity-90" />
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-base sm:text-lg opacity-90 leading-relaxed">{step.description}</p>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 fade-in-element opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">Example Swap</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Sarah wants to learn Python programming and offers graphic design skills in return. 
                  She connects with Alex, a developer who wants to improve his design skills.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">S</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Sarah teaches Photoshop & Illustrator</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">A</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Alex teaches Python & Data Analysis</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl mb-4">🤝</div>
                  <div className="text-lg font-medium text-gray-900 mb-2">Successful Match!</div>
                  <div className="text-sm text-gray-600">Both users rated 5 stars</div>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-element opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal text-gray-900 mb-4 sm:mb-6">
              Join our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> community</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Connect with learners and experts from diverse backgrounds. Everyone has something to teach and learn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {communityProfiles.map((profile, index) => (
              <div
                key={profile.name}
                className={`fade-in-element opacity-0 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-medium ${profile.color}`}>
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">{profile.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{profile.role}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Offers:</div>
                    <div className="flex flex-wrap gap-1">
                      {profile.offers.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Wants:</div>
                    <div className="flex flex-wrap gap-1">
                      {profile.wants.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{profile.swaps} swaps completed</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="fade-in-element opacity-0">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">Popular Skills</h3>
              <div className="space-y-4">
                {popularSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm sm:text-base">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 sm:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 w-10 sm:w-12">{skill.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-element opacity-0">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">Community Guidelines</h3>
              <div className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`fade-in-element opacity-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4">{stat.value}</div>
                <div className="text-lg sm:text-xl text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-element opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal text-gray-900 mb-6 sm:mb-8">
              Ready to start
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> learning</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light">
              Join thousands of learners who are already swapping skills and growing together.
            </p>
            <Link
              href="/app"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              Get started with Swapr
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 sm:mb-0">Swapr</div>
            <div className="flex items-center space-x-4 sm:space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">Support</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 text-center text-gray-500 text-sm sm:text-base">
            <p>Building the future of skill sharing, one swap at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Shield,
    title: "Privacy Control",
    description: "Choose between public and private profiles. Control who can see your information and skills."
  },
  {
    icon: Star,
    title: "Rating System",
    description: "Build trust through ratings and reviews. Help others find reliable skill partners."
  },
  {
    icon: Globe,
    title: "Smart Matching",
    description: "Our algorithm connects you with the right people based on skills, location, and availability."
  }
];

const stats = [
  { value: "1K+", label: "Active Members" },
  { value: "100+", label: "Skills Available" },
  { value: "5K+", label: "Successful Swaps" }
];

const howItWorksSteps = [
  {
    icon: Users,
    title: "Create Profile",
    description: "Showcase your skills and what you'd love to learn. Make meaningful connections.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Search,
    title: "Find Matches",
    description: "Discover people with complementary skills in your area using smart search.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Start Learning Together",
    description: "Send requests, negotiate terms, and begin your learning journey together.",
    gradient: "from-teal-500 to-teal-600"
  }
];

const communityProfiles = [
  {
    name: "Dev Mer",
    role: "Software Developer",
    color: "bg-blue-500",
    offers: ["Flutter", "React", "UI Design"],
    wants: ["Python", "Data Analysis"],
    swaps: 12
  },
  {
    name: "Sanket Prajapati",
    role: "Software Developer",
    color: "bg-purple-500",
    offers: ["React", "Node.js", "Python"],
    wants: ["Flutter", "Android"],
    swaps: 9
  }
];

const popularSkills = [
  { name: "Web Development", count: "2.1K", percentage: 85 },
  { name: "Graphic Design", count: "1.8K", percentage: 72 },
  { name: "Photography", count: "1.5K", percentage: 60 },
  { name: "Language Learning", count: "1.3K", percentage: 52 },
  { name: "Music & Audio", count: "1.1K", percentage: 44 },
  { name: "Cooking", count: "950", percentage: 38 }
];

const guidelines = [
  "Be respectful and professional in all interactions",
  "Clearly communicate your availability and expectations",
  "Honor your commitments and show up on time",
  "Provide honest feedback and ratings after each swap",
  "Keep learning sessions focused and productive",
  "Report any inappropriate behavior to our support team"
];