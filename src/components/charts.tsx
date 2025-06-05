import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Eye, Filter, TrendingUp, Users } from "lucide-react";
interface TrendData {
  date: string;
  PlayStation: number;
  Xbox: number;
}

interface DistributionData {
  name: string;
  value: number;
  color: string;
}

interface UserData {
  date: string;
  users: number;
}

interface GenreData {
  genre: string;
  players: number;
}

interface ChartsProps {
  trends: TrendData[];
  distribution: DistributionData[];
  users: UserData[];
  genre: GenreData[];
}

const Charts = ({ trends, distribution, users, genre }: ChartsProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Platform Performance Trends
          </CardTitle>
          <CardDescription>
            Monthly player count trends by platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="PlayStation"
                stroke="#003087"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Xbox"
                stroke="#107c10"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Platform Distribution
          </CardTitle>
          <CardDescription>
            Total player distribution across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Daily Active Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Daily Active Users
          </CardTitle>
          <CardDescription>7-day user activity trend</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={users}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Genre Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Genre Performance
          </CardTitle>
          <CardDescription>Player count by game genre</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={genre}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="genre" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="players" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Charts;
