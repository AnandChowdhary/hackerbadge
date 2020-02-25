import { LIGHT, ORANGE, DARK } from "./badges";
import { getNumberOfUpvotes } from "./hacker-news";
import width from "string-pixel-width";

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
  const textWidth = width(hackerNews, { size: 25 });
  const numberWidth = width(upvotes.toString(), { size: 18 });
  return badge
    .replace(/{WIDTH}/g, (110 + numberWidth + textWidth).toString())
    .replace(/{SHORT_WIDTH}/g, (110 + numberWidth + textWidth - 2).toString())
    .replace(/{NUM_POS}/g, (textWidth + 90).toString())
    .replace(
      /{TRIANGLE_POS}/g,
      (textWidth + 90 + (numberWidth - 19) / 2).toString()
    )
    .replace(/{FONT}/g, font)
    .replace(/{HACKER_NEWS}/g, hackerNews)
    .replace(/{UPVOTES}/g, upvotes.toString())
    .replace(/{FEATURED_ON}/g, featuredOn);
};
