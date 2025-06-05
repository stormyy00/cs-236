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
import {
  getPSCount,
  getPSGameCount,
  getXboxCount,
  getXboxGameCount,
  popularYtTags,
  twitterCount,
} from "@/server/queries";

// const COLORS = [
//   "#8884d8",
//   "#82ca9d",
//   "#ffc658",
//   "#ff7c7c",
//   "#8dd1e1",
//   "#d084d0",
// ];

const GameAnalyticsPlatform = () => {
  const [stats, setStats] = useState({
    psCount: 0,
    psGameCount: 0,
    xboxCount: 0,
    xboxGameCount: 0,
    twitterCount: 0,
    ytTagCount: 0,
  });
  const [loading, setLoading] = useState(true);

  const trends = useMemo(() => {
    if (!Array.isArray(stats.psCount) || !Array.isArray(stats.xboxCount))
      return [];
    return stats.psCount.map((row, idx) => ({
      date: row.genre,
      PlayStation: row.count,
      Xbox: stats.xboxCount[idx]?.count ?? 0,
    }));
  }, [stats.psCount, stats.xboxCount]);

  const distribution = [
    {
      name: "PlayStation",
      value: Array.isArray(stats.psCount)
        ? stats.psCount.reduce((acc, row) => acc + (row.count ?? 0), 0)
        : 0,
      color: "#003087",
    },
    {
      name: "Xbox",
      value: Array.isArray(stats.xboxCount)
        ? stats.xboxCount.reduce((acc, row) => acc + (row.count ?? 0), 0)
        : 0,
      color: "#107c10",
    },
  ];

  const users = Array.from({ length: 7 }).map((_, i) => ({
    date: `Day ${i + 1}`,
    users: 1000000 + Math.floor(Math.random() * 100000),
  }));

  const genre = Array.isArray(stats.psCount)
    ? stats.psCount.map(({ genre, count }) => ({
        genre,
        players: count,
      }))
    : [];

  console.log("Loading stats:", stats);
  useEffect(() => {
    setLoading(true);
    Promise.all([
      getPSCount(),
      getPSGameCount(),
      getXboxCount(),
      getXboxGameCount(),
      twitterCount(),
      popularYtTags(),
    ])
      .then(
        ([
          psCount,
          psGameCount,
          xboxCount,
          xboxGameCount,
          twitterCount,
          popularYtTags,
        ]) => {
          setStats({
            psCount: psCount,
            psGameCount: psGameCount,
            xboxCount: xboxCount,
            xboxGameCount: xboxGameCount,
            twitterCount: twitterCount,
            ytTagCount: popularYtTags,
          });
          console.log("Stats loaded:", {
            psCount,
            psGameCount,
            xboxCount,
            xboxGameCount,
            twitterCount,
            popularYtTags,
          });
          console.log("All queries loaded successfully");
          setLoading(false);
        },
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
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
            {
              label: "Active Games Tracked",
              value: (
                (Array.isArray(stats.psGameCount)
                  ? stats.psGameCount.length
                  : 0) +
                (Array.isArray(stats.xboxGameCount)
                  ? stats.xboxGameCount.length
                  : 0)
              ).toLocaleString(),
              icon: Gamepad2,
            },
            {
              label: "Data Points Daily",
              value: (
                (Array.isArray(stats.psCount)
                  ? stats.psCount.reduce(
                      (acc, row) => acc + (row.count ?? 0),
                      0,
                    )
                  : 0) +
                (Array.isArray(stats.xboxCount)
                  ? stats.xboxCount.reduce(
                      (acc, row) => acc + (row.count ?? 0),
                      0,
                    )
                  : 0)
              ).toLocaleString(),
              icon: TrendingUp,
            },
            {
              label: "Top YouTube Tag",
              value:
                Array.isArray(stats.ytTagCount) && stats.ytTagCount.length > 0
                  ? `${stats.ytTagCount[0].tag} (${stats.ytTagCount[0].count})`
                  : "-",
              icon: Star,
            },
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
            <Platforms stats={stats} />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
              <StatCard
                icon={Users}
                title="Total Active Players"
                value={[
                  ...(Array.isArray(stats.psCount) ? stats.psCount : []),
                  ...(Array.isArray(stats.xboxCount) ? stats.xboxCount : []),
                ]
                  .reduce((acc, row) => acc + (row.count ?? 0), 0)
                  .toLocaleString()}
                change={12.5}
                description="Active players across PlayStation and Xbox (top genres only)"
              />
              <StatCard
                icon={DollarSign}
                title="Top YouTube Tag"
                value={
                  stats.ytTagCount?.[0]?.tag
                    ? `${stats.ytTagCount[0].tag} (${stats.ytTagCount[0].count})`
                    : "-"
                }
                change={8.3}
                description="Most used tag on trending YouTube videos"
              />
              <StatCard
                icon={Gamepad2}
                title="Most Popular Game"
                value={stats.psGameCount?.[0]?.gameTitle || "-"}
                change={5.7}
                description="Top PlayStation game by player count"
              />
              <StatCard
                icon={Star}
                title="Top Twitter Topic"
                value={stats.twitterCount?.[0]?.topic || "-"}
                change={2.1}
                description="Most common Twitter topic"
              />
            </div>

            <Charts
              trends={trends}
              distribution={distribution}
              users={users}
              genre={genre}
            />
          </TabsContent>

          <TabsContent value="explorer" className="space-y-4">
            <Dashboard stats={stats} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameAnalyticsPlatform;
