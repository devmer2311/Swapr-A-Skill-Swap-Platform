'use client';

import Link from 'next/link';
import { ArrowLeft, Users, Search, Star, Shield, Zap, Globe } from 'lucide-react';

export default function AppPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to home</span>
            </Link>
            <div className="text-2xl font-medium text-gray-900">Swapr</div>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 leading-tight">
            Welcome to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Swapr</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            The full Swapr application is coming soon. This skill swap platform will revolutionize how you learn and share knowledge with your community.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
            What's coming in the full app:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            In development
          </div>
          
          <p className="text-gray-600 mb-8">
            Stay tuned for updates as we build the future of skill sharing.
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Explore more about Swapr
          </Link>
        </div>
      </div>
    </div>
  );
}

const upcomingFeatures = [
  {
    icon: Users,
    title: "Detailed Profiles",
    description: "Create comprehensive profiles with skills, availability, and preferences"
  },
  {
    icon: Search,
    title: "Smart Matching",
    description: "Advanced algorithm to find the perfect skill swap partners"
  },
  {
    icon: Zap,
    title: "Instant Messaging",
    description: "Built-in chat system for seamless communication"
  },
  {
    icon: Star,
    title: "Rating System",
    description: "Rate and review your skill swap experiences"
  },
  {
    icon: Shield,
    title: "Privacy Controls",
    description: "Granular privacy settings and safety features"
  },
  {
    icon: Globe,
    title: "Community Features",
    description: "Join skill-based communities and group learning sessions"
  }
];