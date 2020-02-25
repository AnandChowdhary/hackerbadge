import { LIGHT, ORANGE, DARK } from "./badges";
import { getNumberOfUpvotes } from "./hacker-news";

export const getBadge = async (
  id: number,
  type = "light",
  font = "Arial",
  hackerNews = "Hacker News",
  featuredOn = "FEATURED ON"
) => {
  let badge = LIGHT;
  if (type === "orange") badge = ORANGE;
  if (type === "dark") badge = DARK;
  const upvotes = await getNumberOfUpvotes(id);
  const textWidth = 3;
  return badge
    .replace(/{WIDTH}/g, (139 + textWidth).toString())
    .replace(/{FONT}/g, font)
    .replace(/{HACKER_NEWS}/g, hackerNews)
    .replace(/{UPVOTES}/g, upvotes.toString())
    .replace(/{FEATURED_ON}/g, featuredOn);
};
