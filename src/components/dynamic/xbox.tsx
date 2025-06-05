"use client";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp, Trophy, Target } from "lucide-react";
import Landing from "../platform/landing";
import Footer from "../platform/footer";

const XboxAnalytics = () => {
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

  const gamePassStats = [
    { name: "RPG", percentage: 28, color: "bg-green-400" },
    { name: "Action", percentage: 24, color: "bg-green-500" },
    { name: "Indie", percentage: 20, color: "bg-green-600" },
    { name: "Strategy", percentage: 16, color: "bg-green-700" },
    { name: "Sports", percentage: 12, color: "bg-green-800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white overflow-hidden">
      {/* Animated Xbox-themed background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + "%",
            top: mousePosition.y * 0.02 + "%",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-green-400 rounded-full blur-2xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.01 + "%",
            bottom: mousePosition.y * 0.01 + "%",
          }}
        />
        <div className="absolute w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-2000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Landing
        title={"Xbox"}
        variant="xbox"
        gradient="bg-gradient-to-r from-green-300 to-green-500"
        description="Unlock deep insights across Xbox's unified ecosystem. Transform player data into strategic advantage with our advanced analytics platform."
      />
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-green-900/20 border-2 border-green-400/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-white mb-2">
                Game Pass Genre Analytics
              </CardTitle>
              <CardDescription className="text-green-200 text-center text-lg">
                Most popular game genres on Xbox Game Pass
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-6">
                {gamePassStats.map((genre, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-24 text-green-200 font-medium">
                      {genre.name}
                    </div>
                    <div className="flex-1 bg-green-900/50 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-full ${genre.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${genre.percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-green-200 font-bold">
                      {genre.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievement Showcase */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
            Achievement Mastery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rare Achievements",
                value: "5.2%",
                description: "Average unlock rate for rare achievements",
                icon: Trophy,
              },
              {
                title: "Gamerscore Growth",
                value: "+12%",
                description: "Monthly gamerscore increase per player",
                icon: TrendingUp,
              },
              {
                title: "Completion Rate",
                value: "34%",
                description: "Average game completion percentage",
                icon: Target,
              },
            ].map((metric, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-green-900/40 to-green-800/40 border-2 border-green-400/30 backdrop-blur-lg hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-green-300 text-lg mb-4">
                    {metric.title}
                  </div>
                  <div className="text-green-200 text-base leading-relaxed">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer
        name="Xbox"
        gradient={"bg-gradient-to-r from-green-400 to-green-600"}
        from={"bg-gradient-to-r from-green-300 to-green-500"}
        color={"text-green-200"}
      />

      {/* Hero Section */}
      {/* <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-green-200 to-green-400 bg-clip-text text-transparent leading-tight">
              Xbox
              <br />
              <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Harness the power of Xbox's unified ecosystem with advanced
              analytics for Game Pass, achievements, and cross-platform gaming
              experiences that span console, PC, and cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25">
                <PlayCircle className="w-5 h-5 mr-2" />
                Access Dashboard
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-400/30 text-green-200 hover:bg-green-800/30 hover:border-green-300 px-8 py-4 rounded-xl text-lg transition-all duration-300"
              >
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              {
                label: "Xbox Live Users",
                value: "120M+",
                icon: Users,
                color: "from-green-400 to-green-600",
              },
              {
                label: "Game Pass Titles",
                value: "450+",
                icon: Layers,
                color: "from-green-500 to-green-700",
              },
              {
                label: "Achievements",
                value: "1.2B+",
                icon: Trophy,
                color: "from-green-600 to-green-800",
              },
              {
                label: "Cross-Platform",
                value: "4 Devices",
                icon: Shield,
                color: "from-green-400 to-green-700",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-green-900/20 border-2 border-green-400/20 backdrop-blur-lg hover:bg-green-800/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};
export default XboxAnalytics;
