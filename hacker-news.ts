import axios from "axios";

export const getNumberOfUpvotes = async (id: number) => {
  const apiResponse = await axios.get<{
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: "story" | "comment";
    url: string;
  }>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return apiResponse.data.score;
};
