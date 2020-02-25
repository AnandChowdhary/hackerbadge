import { LIGHT, ORANGE, DARK } from "./badges";

export const getBadge = async (
  type = "light",
  font = "Arial",
  hackerNews = "Hacker News",
  featuredOn = "FEATURED ON"
) => {
  let badge = LIGHT;
  if (type === "orange") badge = ORANGE;
  if (type === "dark") badge = DARK;
  return badge
    .replace(/{FONT}/g, font)
    .replace(/{HACKER_NEWS}/g, hackerNews)
    .replace(/{UPVOTES}/g, "23")
    .replace(/{FEATURED_ON}/g, featuredOn);
};
