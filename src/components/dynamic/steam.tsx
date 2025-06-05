"use client";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Landing from "../platform/landing";
import Footer from "../platform/footer";

const SteamAnalytics = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (
      e: React.MouseEvent<HTMLElement> | MouseEvent,
    ): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const marketData = [
    { name: "Indie Games", percentage: 45, color: "bg-slate-400" },
    { name: "AAA Titles", percentage: 25, color: "bg-slate-500" },
    { name: "Early Access", percentage: 15, color: "bg-slate-600" },
    { name: "Free to Play", percentage: 10, color: "bg-slate-700" },
    { name: "VR Games", percentage: 5, color: "bg-slate-800" },
  ];

  const recentTrends = [
    {
      trend: "Steam Deck Compatibility",
      growth: "+180%",
      color: "text-green-400",
    },
    { trend: "Workshop Submissions", growth: "+45%", color: "text-blue-400" },
    { trend: "Review Engagement", growth: "+23%", color: "text-purple-400" },
    { trend: "Community Events", growth: "+67%", color: "text-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Steam-themed background */}
      <div className="fixed inset-0 opacity-15">
        <div
          className="absolute w-96 h-96 bg-slate-500 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + "%",
            top: mousePosition.y * 0.02 + "%",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-slate-400 rounded-full blur-2xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.01 + "%",
            bottom: mousePosition.y * 0.01 + "%",
          }}
        />
        <div className="absolute w-80 h-80 bg-slate-600 rounded-full blur-3xl animate-pulse delay-2000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Landing
        title={"Steam"}
        variant="steam"
        gradient="bg-gradient-to-r from-slate-500 to-slate-700"
        description="Unlock the full potential of Steam's massive ecosystem with comprehensive analytics covering the Workshop, marketplace, reviews, and the world's largest PC gaming community."
      />
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Market Distribution */}
            <Card className="bg-slate-900/20 border-2 border-slate-400/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  Steam Market Distribution
                </CardTitle>
                <CardDescription className="text-slate-200 text-lg">
                  Game categories by market share
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <div className="space-y-6">
                  {marketData.map((category, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-28 text-slate-200 font-medium">
                        {category.name}
                      </div>
                      <div className="flex-1 bg-slate-900/50 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                      <div className="w-12 text-slate-200 font-bold">
                        {category.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Metrics */}
            <Card className="bg-slate-900/20 border-2 border-slate-400/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  Trending Growth Areas
                </CardTitle>
                <CardDescription className="text-slate-200 text-lg">
                  Fastest growing Steam segments
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <div className="space-y-6">
                  {recentTrends.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors"
                    >
                      <div className="text-slate-200 font-medium">
                        {item.trend}
                      </div>
                      <div className={`text-xl font-bold ${item.color}`}>
                        {item.growth}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer
        name="Steam"
        gradient={"bg-gradient-to-r from-slate-400 to-slate-600"}
        from={"bg-gradient-to-r from-slate-300 to-slate-500"}
        color="text-slate-300"
      />
      {/* Hero Section */}
      {/* <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"> */}
      {/* <Badge className="mb-6 bg-slate-500/20 text-slate-300 border-slate-400/30 px-4 py-2 text-lg">
              <Star className="w-5 h-5 mr-2" />
              Steam Platform
            </Badge> */}

      {/* <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
              Steam Market
              <br />
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unlock the full potential of Steam's massive ecosystem with comprehensive analytics covering 
              the Workshop, marketplace, reviews, and the world's largest PC gaming community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-slate-500/25">
                <PlayCircle className="w-5 h-5 mr-2" />
                Launch Analytics
              </Button>
              <Button variant="outline" className="border-2 border-slate-400/30 text-slate-200 hover:bg-slate-800/30 hover:border-slate-300 px-8 py-4 rounded-xl text-lg transition-all duration-300">
                Explore Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div> */}

      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: 'Steam Users', value: '130M+', icon: Users, color: 'from-slate-400 to-slate-600' },
              { label: 'Games Available', value: '50,000+', icon: Gamepad2, color: 'from-slate-500 to-slate-700' },
              { label: 'Workshop Items', value: '1.2B+', icon: Settings, color: 'from-slate-600 to-slate-800' },
              { label: 'Daily Reviews', value: '500K+', icon: MessageSquare, color: 'from-slate-400 to-slate-700' }
            ].map((stat, index) => (
              <Card key={index} className="bg-slate-900/20 border-2 border-slate-400/20 backdrop-blur-lg hover:bg-slate-800/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SteamAnalytics;
