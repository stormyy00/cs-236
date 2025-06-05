"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  TrendingUp,
  Users,
  Gamepad2,
  DollarSign,
  Star,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Charts from "./charts";
import Dashboard from "./dashboard";
import StatCard from "./statistics";

import { mockData } from "@/data/mock";
import Platforms from "./platforms";
import { Button } from "./ui/button";
import { getVideo } from "@/server/queries";

// const COLORS = [
//   "#8884d8",
//   "#82ca9d",
//   "#ffc658",
//   "#ff7c7c",
//   "#8dd1e1",
//   "#d084d0",
// ];

const GameAnalyticsPlatform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("players");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredGames = useMemo(() => {
    const filtered = mockData.topGames.filter((game) => {
      const matchesSearch = game.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPlatform =
        selectedPlatform === "all" ||
        (selectedPlatform === "Steam" && game.Steam > 0) ||
        (selectedPlatform === "PlayStation" && game.PlayStation > 0) ||
        (selectedPlatform === "Xbox" && game.Xbox > 0);
      const matchesGenre =
        selectedGenre === "all" || game.genre === selectedGenre;
      return matchesSearch && matchesPlatform && matchesGenre;
    });

    // Sort
    filtered.sort((a, b) => {
      let aVal, bVal;
      switch (sortBy) {
        case "players":
          aVal = a.Steam + a.PlayStation + a.Xbox;
          bVal = b.Steam + b.PlayStation + b.Xbox;
          break;
        case "rating":
          aVal = a.rating;
          bVal = b.rating;
          break;
        case "revenue":
          aVal = a.revenue;
          bVal = b.revenue;
          break;
        default:
          aVal = a.name;
          bVal = b.name;
      }

      if (sortOrder === "desc") {
        if (typeof aVal === "string" && typeof bVal === "string") {
          return bVal.localeCompare(aVal);
        } else {
          return (bVal as number) - (aVal as number);
        }
      } else {
        if (typeof aVal === "string" && typeof bVal === "string") {
          return aVal.localeCompare(bVal);
        } else {
          return (aVal as number) - (bVal as number);
        }
      }
    });

    return filtered;
  }, [searchTerm, selectedPlatform, selectedGenre, sortBy, sortOrder]);

  const platformDistribution = useMemo(() => {
    const totals = mockData.topGames.reduce(
      (acc, game) => {
        acc.Steam += game.Steam;
        acc.PlayStation += game.PlayStation;
        acc.Xbox += game.Xbox;
        return acc;
      },
      { Steam: 0, PlayStation: 0, Xbox: 0 },
    );

    return Object.entries(totals).map(([platform, value]) => ({
      name: platform,
      value,
      color:
        platform === "Steam"
          ? "#1b2838"
          : platform === "PlayStation"
            ? "#003087"
            : "#107c10",
    }));
  }, []);

  useEffect(() => {
    getVideo()
      .then((data) => {
        console.log("query:", data);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative z-10 text-center pt-20 px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-purple-400 to-purple-600 bg-clip-text text-transparent leading-tight">
          Power Your
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Game Empire
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock deep insights across PlayStation, Xbox, and Steam. Transform
          player data into strategic advantage with our unified analytics
          platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <PlayCircle className="w-5 h-5 mr-2" />
            Explore Now
          </Button>
          <Button className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg transition-all duration-300">
            Check Analytics
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {[
            { label: "Active Games Tracked", value: "50,000+", icon: Gamepad2 },
            { label: "Data Points Daily", value: "1B+", icon: TrendingUp },
            { label: "Gaming Studios", value: "2,500+", icon: Users },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-700 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col space-y-4 p-4 lg:p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="explorer">Data Explorer</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Platforms />
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={Users}
                title="Total Active Players"
                value="1.58M"
                change={12.5}
                description="Active players across all platforms"
              />
              <StatCard
                icon={DollarSign}
                title="Revenue This Month"
                value="$45.2M"
                change={8.3}
                description="Total gaming revenue generated"
              />
              <StatCard
                icon={Gamepad2}
                title="Games Tracked"
                value="2,847"
                change={5.7}
                description="Games monitored across platforms"
              />
              <StatCard
                icon={Star}
                title="Avg. Rating"
                value="4.3"
                change={2.1}
                description="Average user rating score"
              />
            </div>
            <Charts
              trends={mockData.platformTrends}
              distribution={platformDistribution}
              users={mockData.dailyUsers}
              genre={mockData.genreData}
            />
          </TabsContent>

          <TabsContent value="explorer" className="space-y-4">
            <Dashboard
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              filteredGames={filteredGames}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameAnalyticsPlatform;
