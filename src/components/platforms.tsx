import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { platforms } from "@/data/mock";

const Platforms = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {platforms.map((platform, index) => (
        <Card
          key={index}
          className={`relative overflow-hidden border-2 ${platform.accentColor} ${platform.color} backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <CardHeader className="relative z-10 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{platform.icon}</div>
            </div>
            <CardTitle
              className={`text-3xl font-bold ${platform.textColor} mb-2`}
            >
              {platform.name}
            </CardTitle>
            <CardDescription
              className={`${platform.textColor} opacity-90 text-base`}
            >
              Advanced analytics and insights for {platform.name} ecosystem
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(platform.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className={`text-xl font-bold ${platform.textColor}`}>
                    {value}
                  </div>
                  <div
                    className={`text-sm ${platform.textColor} opacity-75 capitalize`}
                  >
                    {key}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              {platform.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`flex items-center ${platform.textColor} opacity-90`}
                >
                  <Zap className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button
              className={`w-full ${platform.bgColor} hover:bg-opacity-80 text-white border-0 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-105`}
            >
              Explore {platform.name}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl transform -translate-x-12 translate-y-12" />
        </Card>
      ))}
    </div>
  );
};

export default Platforms;
