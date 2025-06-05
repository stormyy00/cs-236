import React from "react";
import { Button } from "../ui/button";

import Statistics from "./statistics";
import { ArrowRight, PlayCircle } from "lucide-react";

interface LandingProps {
  title: string;
  gradient: string;
  description: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "playstation"
    | "xbox"
    | "steam"
    | null
    | undefined;
}

const Landing = ({ title, gradient, description, variant }: LandingProps) => {
  return (
    <div className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
            {title}
            <br />
            <span className={`${gradient} bg-clip-text text-transparent`}>
              Analytics
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant={variant}>
              <PlayCircle className="w-5 h-5 mr-2" />
              Launch Dashboard
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-400/30 text-blue-200 hover:bg-blue-800/30 hover:border-blue-300 px-8 py-4 rounded-xl text-lg transition-all duration-300"
            >
              View Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <Statistics />
      </div>
    </div>
  );
};

export default Landing;
