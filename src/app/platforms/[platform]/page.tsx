import PlayStationAnalytics from "@/components/dynamic/playstation";
import SteamAnalytics from "@/components/dynamic/steam";
import XboxAnalytics from "@/components/dynamic/xbox";
import React from "react";

interface props {
  params: { platform: string };
}

const Page = ({ params }: props) => {
  let AnalyticsComponent = null;
  const { platform } = params;

  switch (platform) {
    case "playstation":
      AnalyticsComponent = <PlayStationAnalytics />;
      break;
    case "steam":
      AnalyticsComponent = <SteamAnalytics />;
      break;
    case "xbox":
      AnalyticsComponent = <XboxAnalytics />;
      break;
    default:
      AnalyticsComponent = <div>Platform not supported</div>;
  }

  return <div className="w-full">{AnalyticsComponent}</div>;
};

export default Page;
