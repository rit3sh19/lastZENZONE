"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Brain, BookOpen, Video, TrendingUp, Heart, Moon, Sun, Users, MessageSquare, Sparkles, Zap, Shield, Smile, BarChart2, HeartHandshake } from "lucide-react"
import Link from "next/link"
import { AboutTeam } from "@/components/about-team"

export default function HomePage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400 dark:from-orange-800 dark:via-amber-900 dark:to-yellow-900 flex flex-col items-center justify-between p-4 relative overflow-hidden transition-colors duration-200">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all z-50 shadow-lg hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-300/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-amber-300/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-orange-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-yellow-200/30 rounded-full animate-pulse"></div>
        </div>

        {/* Header */}
        {/* <header className="w-full max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-white animate-pulse" />
              <span className="text-2xl font-bold text-white">ZenZone</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/auth?tab=login" className="px-4 py-2 text-white hover:text-amber-100 transition-colors font-medium">
                Sign In
              </Link>
              <Link 
                href="/auth?tab=register" 
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-medium transition-all backdrop-blur-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header> */}

        {/* Hero Section */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Your mental health matters</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Hey there! Let's talk about <span className="text-amber-100">how you're really doing</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                No corporate speak, no judgment—just real support for your mental health journey. Whether you're having a rough day or just need to vent, 
                we've got your back. Because let's be honest, adulting is hard enough as it is. 💪
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <Link href="/auth?tab=register">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Start Your Journey - It's Free!
                  </Button>
                </Link>
                <Link href="#features">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  >
                    <BarChart2 className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="h-5 w-5 text-amber-300" />
                  <span>Private & Secure</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Smile className="h-5 w-5 text-amber-300" />
                  <span>Easy to Use</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <BarChart2 className="h-5 w-5 text-amber-300" />
                  <span>Track Your Progress</span>
                </div>
              </div>
            </div>

            {/* Right Column - Mood Check-in */}
            <div className="relative h-full">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200/50 dark:bg-amber-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200/50 dark:bg-blue-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-200/50 dark:bg-pink-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Daily Check-in</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">How are you feeling today?</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {['😢', '😔', '😐', '🙂', '😊'].map((emoji, i) => (
                      <button 
                        key={i}
                        className="text-2xl p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`Rate ${i + 1} out of 5`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <Link href="/auth?tab=register">
                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-md">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Success Stories Section */}
        <section className="w-full py-20 bg-gradient-to-b from-white/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Hear from people who transformed their mental wellness journey with ZenZone
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah K.",
                  role: "Teacher",
                  content: "ZenZone's mood tracking helped me identify patterns in my anxiety. I've never felt more in control of my mental health.",
                  avatar: "👩‍🏫"
                },
                {
                  name: "Michael T.",
                  role: "Software Developer",
                  content: "The guided meditations are a game-changer. I use them daily to manage work stress and stay focused.",
                  avatar: "👨‍💻"
                },
                {
                  name: "Priya M.",
                  role: "Student",
                  content: "As a student, the breathing exercises help me manage exam stress. I've recommended ZenZone to all my friends!",
                  avatar: "👩‍🎓"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-amber-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/auth?tab=register">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/50 px-8 py-6 text-lg rounded-2xl transition-all hover:scale-105"
                >
                  Start Your Journey Today
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-white/5 backdrop-blur-sm py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Features That Help You Thrive</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to support your mental wellness journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <HeartHandshake className="h-10 w-10 text-amber-400" />,
                  title: "Mood Tracking",
                  description: "Easily log your daily mood and emotions to identify patterns and triggers."
                },
                {
                  icon: <Brain className="h-10 w-10 text-amber-400" />,
                  title: "CBT Exercises",
                  description: "Practice cognitive behavioral therapy techniques to reframe negative thoughts."
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-amber-400" />,
                  title: "Journaling",
                  description: "Express yourself with our guided journaling prompts and AI-powered insights."
                },
                {
                  icon: <Users className="h-10 w-10 text-amber-400" />,
                  title: "Community Support",
                  description: "Connect with others on similar journeys in our supportive community."
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-amber-400" />,
                  title: "Progress Tracking",
                  description: "Visualize your mental health journey with beautiful charts and insights."
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-amber-400" />,
                  title: "AI Companion",
                  description: "Chat with our AI companion for immediate support and guidance."
                },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/auth?tab=register">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Join ZenZone Today - It's Free!
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Crisis Support Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span>💙</span>
                <span>You're Not Alone</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Immediate Help Available
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
                If you're in crisis or experiencing emotional distress, these resources are available 24/7 to provide support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Crisis Text Line",
                    description: "Text HOME to 741741",
                    icon: "💬",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Suicide Prevention",
                    description: "Call 988 or 1-800-273-8255",
                    icon: "☎️",
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    title: "Emergency Services",
                    description: "Call 911 or your local emergency number",
                    icon: "🚨",
                    color: "from-amber-500 to-orange-500"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-2xl bg-gradient-to-br ${item.color} text-white`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-amber-200 dark:border-amber-900/50">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold text-amber-600 dark:text-amber-400">Remember:</span> It's okay to ask for help. Reaching out is a sign of strength, not weakness. You matter, and there are people who want to support you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        </div>
      )
    }

    return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-[0.02]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/30 dark:bg-yellow-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/30 dark:bg-green-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-400/20 dark:bg-orange-500/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Status and Actions */}
        <div className="flex justify-end items-center space-x-4 py-4">
          <Badge className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Welcome, {user.name}</span>
          </Badge>
          
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem("user")
              setUser(null)
            }}
            className="bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:shadow-md transition-all"
          >
            <span className="hidden sm:inline">Sign Out</span>
            <span className="sm:hidden">Logout</span>
          </Button>
        </div>

        <main className="relative z-10 pb-12">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Welcome back, {user.name.split(' ')[0]}! ✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Your Personal Mental Health Companion
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Track your mood, practice mindfulness, and connect with a supportive community - all in one place. 
              Because taking care of your mind is just as important as taking care of your body. 💖
            </p>
          </div>
          
          {/* Right side - Illustration */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200 dark:bg-amber-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 dark:bg-blue-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-200 dark:bg-pink-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Daily Check-in</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">How are you feeling today?</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {['😢', '😔', '😐', '🙂', '😊'].map((emoji, i) => (
                    <button 
                      key={i}
                      className="text-2xl p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label={`Rate ${i + 1} out of 5`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-md">
                  Submit Mood
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mood Tracker */}
          <Link href="/mood-tracker" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-blue-100/95 backdrop-blur-sm border-4 border-blue-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <Calendar className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>📊 Mood Tracker</span>
                </CardTitle>
                <CardDescription className="text-blue-100 font-semibold min-h-[3rem] flex items-center">
                  Log your daily mood with emojis and vibes!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex space-x-3 mb-6 justify-center flex-shrink-0">
                  <span className="text-6xl animate-bounce">😊</span>
                  <span className="text-6xl animate-pulse">😐</span>
                  <span className="text-6xl animate-bounce">😢</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">📈</span>
                  Track Mood
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* CBT Tools */}
          <Link href="/cbt-tools" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-purple-100/95 backdrop-blur-sm border-4 border-purple-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <Brain className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>🧠 CBT Tools</span>
                </CardTitle>
                <CardDescription className="text-purple-100 font-semibold min-h-[3rem] flex items-center">
                  Cognitive behavioral therapy exercises and thought logs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-purple-700 bg-purple-50 p-2 rounded-lg">
                    💭 Thought Records
                  </div>
                  <div className="text-sm font-semibold text-purple-700 bg-purple-50 p-2 rounded-lg">
                    🧩 Cognitive Exercises
                  </div>
                  <div className="text-sm font-semibold text-purple-700 bg-purple-50 p-2 rounded-lg">
                    🎯 Behavioral Patterns
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">🧠</span>
                  Start CBT
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Journal */}
          <Link href="/journal" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-green-100/95 backdrop-blur-sm border-4 border-green-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <BookOpen className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>📖 AI Journal</span>
                </CardTitle>
                <CardDescription className="text-green-100 font-semibold min-h-[3rem] flex items-center">
                  Write daily entries with AI sentiment analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-green-700 mb-3">Latest sentiment vibe:</div>
                  <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-white font-bold px-4 py-2 rounded-full text-lg">
                    💚 Positive
                  </Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">✍️</span>
                  Write Entry
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Analytics */}
          <Link href="/dashboard" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-orange-100/95 backdrop-blur-sm border-4 border-orange-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <TrendingUp className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>📊 Analytics</span>
                </CardTitle>
                <CardDescription className="text-orange-100 font-semibold min-h-[3rem] flex items-center">
                  Visualize your mood patterns and progress
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-4xl font-black text-green-600 mb-2 flex items-center gap-2">📈 Improving</div>
                  <div className="text-sm font-semibold text-orange-700">7-day trend looking fire! 🔥</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">📊</span>
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Telehealth */}
          <Link href="/telehealth" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-red-100/95 backdrop-blur-sm border-4 border-red-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <Video className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>📹 Telehealth</span>
                </CardTitle>
                <CardDescription className="text-red-100 font-semibold min-h-[3rem] flex items-center">
                  Schedule appointments with mental health professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-red-700 mb-2">Next appointment:</div>
                  <div className="font-black text-red-800 bg-red-50 p-3 rounded-lg">
                    No appointments scheduled bestie! 📅
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">📞</span>
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Sleep Aid */}
          <Link href="/sleep-aid" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-indigo-100/95 backdrop-blur-sm border-4 border-indigo-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <Moon className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>🌙 Sleep Aid</span>
                </CardTitle>
                <CardDescription className="text-indigo-100 font-semibold min-h-[3rem] flex items-center">
                  Sleep tracking, meditations, and relaxation sounds
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg">
                    ⏰ Sleep Timer
                  </div>
                  <div className="text-sm font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg">
                    🧘‍♀️ Guided Meditations
                  </div>
                  <div className="text-sm font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg">
                    🎵 Relaxation Sounds
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">😴</span>
                  Sleep Better
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Community */}
          <Link href="/community" className="h-full">
            <Card className="bg-gradient-to-br from-white/95 to-purple-100/95 backdrop-blur-sm border-4 border-purple-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <Users className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>👥 Community</span>
                </CardTitle>
                <CardDescription className="text-purple-100 font-semibold min-h-[3rem] flex items-center">
                  Connect with peers in anonymous support groups
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-purple-700 mb-3">Active discussions:</div>
                  <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold px-4 py-2 rounded-full text-lg">
                    💬 42 topics
                  </Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-auto group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">🤝</span>
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/chat">
            <Card className="bg-gradient-to-br from-white/95 to-cyan-100/95 backdrop-blur-sm border-4 border-cyan-400 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-t-2xl flex-shrink-0">
                <CardTitle className="flex items-center space-x-3 font-black text-xl min-h-[2rem]">
                  <MessageSquare className="h-6 w-6 animate-pulse flex-shrink-0" />
                  <span>🤖 AI Chat</span>
                </CardTitle>
                <CardDescription className="text-cyan-100 font-semibold min-h-[3rem] flex items-center">
                  Chat with your AI mental health companion
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-cyan-700 mb-3">AI Status:</div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Online & Ready</span>
                  </div>
                </div>
                <div className="space-y-4 w-full">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30"></div>
                    <Button 
                      className="w-full relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Start Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* AI Chat */}
          <Link href="/chat" className="h-full">
            <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl rounded-3xl border-4 border-white/20 transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <CardHeader className="pb-2 relative z-10">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Mood Tracker</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col justify-between relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-white/10 transform group-hover:scale-[1.01] transition-all duration-300">
                <p className="text-white/90 text-base font-medium leading-relaxed">
                  "Take 5 minutes today to practice deep breathing bestie! It can help reduce stress and improve focus.
                  You've got this! 💪✨"
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur opacity-30"></div>
                <Button 
                  variant="outline"
                  className="w-full relative bg-white/10 hover:bg-white/20 text-white font-bold text-lg py-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 border-2 border-white/20"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </CardContent>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300/20 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/3 -left-10 w-32 h-32 bg-red-400/20 rounded-full filter blur-3xl"></div>
          </Card>
          </Link>
        </div>

        {/* About Team Section */}
        <AboutTeam />
        
        </main>
      </div>
    </div>
  )
}
