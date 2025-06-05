import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Game } from "@/types";

interface TableDataProps {
  filteredGames: Game[];
}

const TableData = ({ filteredGames }: TableDataProps) => {
  return (
    <>
      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle>Game Analytics Results</CardTitle>
          <CardDescription>
            Showing {filteredGames.length} games based on your filters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Game</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>PlayStation</TableHead>
                <TableHead>Xbox</TableHead>
                <TableHead>Total Players</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGames.map((game, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{game.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{game.genre}</Badge>
                  </TableCell>
                  <TableCell>
                    {game.PlayStation > 0
                      ? game.PlayStation.toLocaleString()
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {game.Xbox > 0 ? game.Xbox.toLocaleString() : "-"}
                  </TableCell>
                  <TableCell className="font-medium">
                    {(
                      game.PlayStation +
                      game.Xbox
                    ).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {game.rating}
                    </div>
                  </TableCell>
                  <TableCell>${game.revenue.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default TableData;
