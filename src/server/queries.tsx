"use server";

import { db } from "@/utils/database";

//  const getVideo = async () => {
//   try {
//     const [rows] = await db.query(
//       "SELECT * FROM USvideos ORDER BY video_id ASC LIMIT 20",
//     );
//     return rows || null;
//   } catch (error) {
//     console.error("Error fetching video:", error);
//     throw new Error("Failed to fetch video");
//   }
// };

const getPSCount = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM ps_genre_counts LIMIT 20");
    return rows || 0;
  } catch (error) {
    console.error("Error fetching PlayStation count:", error);
    throw new Error("Failed to fetch PlayStation count");
  }
};

const getPSGameCount = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM ps_gameplay_counts LIMIT 20");
    return rows || 0;
  } catch (error) {
    console.error("Error fetching PlayStation game count:", error);
    throw new Error("Failed to fetch PlayStation game count");
  }
};

const getXboxCount = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM xbox_genre_counts LIMIT 20");
    return rows || 0;
  } catch (error) {
    console.error("Error fetching xbox count:", error);
    throw new Error("Failed to fetch xbox count");
  }
};

const getXboxGameCount = async () => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM xbox_gameplay_counts LIMIT 20",
    );
    return rows || 0;
  } catch (error) {
    console.error("Error fetching xbox game count:", error);
    throw new Error("Failed to fetch xbox game count");
  }
};

const twitterCount = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM twitter_topics LIMIT 20");

    return rows || 0;
  } catch (error) {
    console.error("Error fetching twitter count:", error);
    throw new Error("Failed to fetch twitter count");
  }
};

export {
  getPSCount,
  getPSGameCount,
  getXboxCount,
  getXboxGameCount,
  twitterCount,
};
