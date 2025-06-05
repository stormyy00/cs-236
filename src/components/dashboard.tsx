import React, { useMemo, useState } from "react";

import { Search, Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Game } from "@/types";
import { PlayStationTables, YoutubeTable } from "./table";
import { XboxTables } from "./table";
import { TwitterTable } from "./table";

type DashboardProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedPlatform: string;
  setSelectedPlatform: (value: string) => void;
  selectedGenre: string;
  setSelectedGenre: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  filteredGames: Game[];
};

const Dashboard = ({ stats }: DashboardProps) => {
  // Controls
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Filtering logic for each platform

  // PlayStation Genres
  const filteredPsCount = useMemo(
    () =>
      Array.isArray(stats.psCount)
        ? stats.psCount.filter(
            (row) =>
              (selectedGenre === "all" ||
                row.genre
                  ?.toLowerCase()
                  .includes(selectedGenre.toLowerCase())) &&
              (searchTerm === "" ||
                row.genre?.toLowerCase().includes(searchTerm.toLowerCase())),
          )
        : [],
    [stats.psCount, selectedGenre, searchTerm],
  );

  // PlayStation Games
  const filteredPsGameCount = useMemo(
    () =>
      (stats.psGameCount ?? []).filter(
        (row) =>
          (selectedGenre === "all" ||
            row.gameTitle
              ?.toLowerCase()
              .includes(selectedGenre.toLowerCase())) &&
          (searchTerm === "" ||
            row.gameTitle?.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    [stats.psGameCount, selectedGenre, searchTerm],
  );

  // Xbox Genres
  const filteredXboxCount = useMemo(
    () =>
      (stats.xboxCount ?? []).filter(
        (row) =>
          (selectedGenre === "all" ||
            row.genre?.toLowerCase().includes(selectedGenre.toLowerCase())) &&
          (searchTerm === "" ||
            row.genre?.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    [stats.xboxCount, selectedGenre, searchTerm],
  );

  // Xbox Games
  const filteredXboxGameCount = useMemo(
    () =>
      (stats.xboxGameCount ?? []).filter(
        (row) =>
          (selectedGenre === "all" ||
            row.gameTitle
              ?.toLowerCase()
              .includes(selectedGenre.toLowerCase())) &&
          (searchTerm === "" ||
            row.gameTitle?.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    [stats.xboxGameCount, selectedGenre, searchTerm],
  );

  // Twitter
  const filteredTwitterCount = useMemo(
    () =>
      Array.isArray(stats.twitterCount)
        ? stats.twitterCount.filter(
            (row: any) =>
              searchTerm === "" ||
              row.topic?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.combined_text
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()),
          )
        : [],
    [stats.twitterCount, searchTerm],
  );

  // YouTube
  const filteredYoutubeCoun = useMemo(
    () =>
      Array.isArray(stats.ytTagCount)
        ? stats.ytTagCount.filter(
            (row: any) =>
              searchTerm === "" ||
              row.tag?.toLowerCase().includes(searchTerm.toLowerCase()),
          )
        : [],
    [stats.ytTagCount, searchTerm],
  );

  const showPlayStation =
    selectedPlatform === "all" || selectedPlatform === "PlayStation";
  const showXbox = selectedPlatform === "all" || selectedPlatform === "Xbox";
  const showTwitter =
    selectedPlatform === "all" || selectedPlatform === "Twitter";
  const showYoutube =
    selectedPlatform === "all" || selectedPlatform === "Youtube";
  return (
    <>
      {/* --- Toolbar --- */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Data Explorer
          </CardTitle>
          <CardDescription>
            Filter and analyze gaming data to discover trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Games</label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Platform</label>
              <Select
                value={selectedPlatform}
                onValueChange={setSelectedPlatform}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="PlayStation">PlayStation</SelectItem>
                  <SelectItem value="Xbox">Xbox</SelectItem>
                  <SelectItem value="Twitter">Twitter</SelectItem>
                  <SelectItem value="Youtube">Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Genre</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger>
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="Action">Action</SelectItem>
                  <SelectItem value="RPG">RPG</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Shooter">Shooter</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {showPlayStation && (
          <PlayStationTables
            psCount={filteredPsCount}
            psGameCount={filteredPsGameCount}
          />
        )}
        {showXbox && (
          <XboxTables
            xboxCount={filteredXboxCount}
            xboxGameCount={filteredXboxGameCount}
          />
        )}
        {showTwitter && <TwitterTable twitterCount={filteredTwitterCount} />}
        {showYoutube && <YoutubeTable youtubeTag={filteredYoutubeCoun} />}
      </div>
    </>
  );
};

export default Dashboard;
