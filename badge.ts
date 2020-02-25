import { LIGHT } from "./badges";

export const getBadge = async (
  font = "Arial",
  hackerNews = "Hacker News",
  featuredOn = "FEATURED ON"
) => {
  return LIGHT.replace(/{FONT}/g, font)
    .replace(/{HACKER_NEWS}/g, hackerNews)
    .replace(/{UPVOTES}/g, "23")
    .replace(/{FEATURED_ON}/g, featuredOn);
};
