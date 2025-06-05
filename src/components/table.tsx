// components/DataTable.tsx
"use client";
import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  psCountColumns,
  psGameCountColumns,
  xboxCountColumns,
  xboxGameCountColumns,
  twitterCountColumns,
  youtubeCountColumns,
} from "@/data/columns";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  title?: string;
}

function DataTable<TData>({ data, columns, title }: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="mb-8">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="p-2 cursor-pointer hover:underline"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {header.column.getIsSorted() === "asc"
                      ? " ↑"
                      : header.column.getIsSorted() === "desc"
                        ? " ↓"
                        : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="p-4 text-center text-gray-400">No data found.</div>
        )}
      </div>
    </div>
  );
}

export const PlayStationTables = ({ psCount, psGameCount }) => {
  return (
    <div className="space-y-10">
      <DataTable
        data={psCount}
        columns={psCountColumns}
        title="PlayStation: Top Genres"
      />
      <DataTable
        data={psGameCount}
        columns={psGameCountColumns}
        title="PlayStation: Top Games"
      />
    </div>
  );
};

export const TwitterTable = ({ twitterCount }) => {
  return (
    <DataTable
      data={twitterCount}
      columns={twitterCountColumns}
      title="Twitter: Topics & Predictions"
    />
  );
};

export const XboxTables = ({ xboxCount, xboxGameCount }) => {
  return (
    <div className="space-y-10">
      <DataTable
        data={xboxCount}
        columns={xboxCountColumns}
        title="Xbox: Top Genres"
      />
      <DataTable
        data={xboxGameCount}
        columns={xboxGameCountColumns}
        title="Xbox: Top Games"
      />
    </div>
  );
};

export const YoutubeTable = ({ youtubeTag }) => {
  return (
    <div className="space-y-10">
      <DataTable
        data={youtubeTag}
        columns={youtubeCountColumns}
        title="Youtube: Top Tags"
      />
    </div>
  );
};
