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

const PlayStationAnalytics = () => {
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

  const gameCategories = [
    { name: "Action/Adventure", percentage: 35, color: "bg-blue-400" },
    { name: "Sports", percentage: 22, color: "bg-blue-500" },
    { name: "Racing", percentage: 18, color: "bg-blue-600" },
    { name: "RPG", percentage: 15, color: "bg-blue-700" },
    { name: "Other", percentage: 10, color: "bg-blue-800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated PlayStation-themed background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + "%",
            top: mousePosition.y * 0.02 + "%",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-blue-400 rounded-full blur-2xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.01 + "%",
            bottom: mousePosition.y * 0.01 + "%",
          }}
        />
        <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-pulse delay-2000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Landing
        title="PlayStation"
        variant="playstation"
        description="Unlock the full potential of your PlayStation games with comprehensive analytics, trophy tracking, and community insights across the entire PlayStation ecosystem."
        gradient="bg-gradient-to-r from-blue-300 to-blue-500"
      />
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-blue-900/20 border-2 border-blue-400/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-white mb-2">
                PlayStation Game Distribution
              </CardTitle>
              <CardDescription className="text-blue-200 text-center text-lg">
                Most popular game categories on PlayStation platform
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-6">
                {gameCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-32 text-blue-200 font-medium">
                      {category.name}
                    </div>
                    <div className="flex-1 bg-blue-900/50 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-blue-200 font-bold">
                      {category.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer
        name="PlayStation"
        gradient={"bg-gradient-to-r from-blue-400 to-blue-600"}
        from={"bg-gradient-to-r from-blue-300 to-blue-500"}
        color="text-blue-300"
      />
      {/* Hero Section */}
      {/* <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"> */}

      {/* <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
              PlayStation
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unlock the full potential of your PlayStation games with comprehensive analytics, 
              trophy tracking, and community insights across the entire PlayStation ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25">
                <PlayCircle className="w-5 h-5 mr-2" />
                Launch Dashboard
              </Button>
              <Button variant="outline" className="border-2 border-blue-400/30 text-blue-200 hover:bg-blue-800/30 hover:border-blue-300 px-8 py-4 rounded-xl text-lg transition-all duration-300">
                View Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div> */}

      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: 'PlayStation Users', value: '110M+', icon: Users, color: 'from-blue-400 to-blue-600' },
              { label: 'Games Tracked', value: '5,000+', icon: Gamepad2, color: 'from-blue-500 to-blue-700' },
              { label: 'Trophies Analyzed', value: '2.5M+', icon: Trophy, color: 'from-blue-600 to-blue-800' },
              { label: 'Data Points/Day', value: '500M+', icon: BarChart3, color: 'from-blue-400 to-blue-700' }
            ].map((stat, index) => (
              <Card key={index} className="bg-blue-900/20 border-2 border-blue-400/20 backdrop-blur-lg hover:bg-blue-800/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default PlayStationAnalytics;
