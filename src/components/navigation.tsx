import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ITEMS } from "@/data/navigation";

const Navigation = () => {
  return (
    <div className="border-b z-50 bg-white backdrop-blur-md sticky top-0">
      <div className="flex h-16 items-center px-4 lg:px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link
              href={"/"}
              className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
            >
              <Gamepad2 className="h-6 w-6 text-white" />
            </Link>
            <div>
              <h1 className="text-xl font-bold">GameAnalytics Pro</h1>
              <p className="text-sm text-muted-foreground">
                Multi-platform gaming insights
              </p>
            </div>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {ITEMS.map(({ name, href }, index) => (
            <Link
              key={index}
              href={href}
              className="text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
