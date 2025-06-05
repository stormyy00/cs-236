import React from "react";
import { Card, CardContent } from "../ui/card";
import { BarChart3, Gamepad2, Trophy, Users } from "lucide-react";

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
      {[
        {
          label: "PlayStation Users",
          value: "110M+",
          icon: Users,
          color: "from-blue-400 to-blue-600",
        },
        {
          label: "Games Tracked",
          value: "5,000+",
          icon: Gamepad2,
          color: "from-blue-500 to-blue-700",
        },
        {
          label: "Trophies Analyzed",
          value: "2.5M+",
          icon: Trophy,
          color: "from-blue-600 to-blue-800",
        },
        {
          label: "Data Points/Day",
          value: "500M+",
          icon: BarChart3,
          color: "from-blue-400 to-blue-700",
        },
      ].map((stat, index) => (
        <Card
          key={index}
          className="bg-blue-900/20 border-2 border-blue-400/20 backdrop-blur-lg hover:bg-blue-800/30 transition-all duration-300 group"
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
            <div className="text-blue-300">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Statistics;
