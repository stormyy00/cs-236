"use server";

import { db } from "@/utils/database";

export const getVideo = async () => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM USvideos ORDER BY video_id ASC LIMIT 20",
    );
    return rows || null;
  } catch (error) {
    console.error("Error fetching video:", error);
    throw new Error("Failed to fetch video");
  }
};
