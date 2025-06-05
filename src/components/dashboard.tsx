import React from "react";

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
import { PlayStationTables } from "./tablee";
import { XboxTables } from "./tablee";
import { TwitterTable } from "./tablee";

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

const Dashboard = ({
  searchTerm,
  setSearchTerm,
  selectedPlatform,
  setSelectedPlatform,
  selectedGenre,
  setSelectedGenre,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  stats,
  showPlayStation = true,
  showXbox = true,
  showTwitter = true,
}: DashboardProps) => {
  return (
    <>
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
                  <SelectItem value="Steam">Steam</SelectItem>
                  <SelectItem value="PlayStation">PlayStation</SelectItem>
                  <SelectItem value="Xbox">Xbox</SelectItem>
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
            <div className="space-y-2">
              <label className="text-sm font-medium">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="players">Total Players</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Order</label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger>
                  <SelectValue placeholder="Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Descending</SelectItem>
                  <SelectItem value="asc">Ascending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <Table filteredGames={filteredGames} /> */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <PlayStationTables
          psCount={stats.psCount}
          psGameCount={stats.psGameCount}
        />
        <XboxTables
          xboxCount={stats.xboxCount}
          xboxGameCount={stats.xboxGameCount}
        />
        <TwitterTable twitterCount={stats.twitterCount} />
      </div>
    </>
  );
};

export default Dashboard;
