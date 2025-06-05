import { Gamepad2 } from "lucide-react";
import React from "react";

type FooterProps = {
  name: string;
  gradient: string;
  from: string;
  color: string;
};

const Footer = ({ name, gradient, from, color }: FooterProps) => {
  return (
    <div className="relative z-10 border-t border-blue-400/20 py-12 px-6 text-center">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div
          className={`w-8 h-8 ${gradient} rounded-lg flex items-center justify-center`}
        >
          <Gamepad2 className="w-5 h-5 text-white" />
        </div>
        <span
          className={`text-xl font-bold ${from} bg-clip-text text-transparent`}
        >
          {name} Analytics
        </span>
      </div>
      <p className={`${color}`}>
        © 2025 {name} Analytics. Powering the future of {name}
        gaming.
      </p>
    </div>
  );
};

export default Footer;
