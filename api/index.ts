import { NowRequest, NowResponse } from "@now/node";
import { getBadge } from "../badge";

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const font =
      typeof req.query.font === "string" ? req.query.font : undefined;
    const hackerNews =
      typeof req.query.hackerNews === "string"
        ? req.query.hackerNews
        : undefined;
    const featuredOn =
      typeof req.query.featuredOn === "string"
        ? req.query.featuredOn
        : undefined;
    const badge = await getBadge(font, hackerNews, featuredOn);
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "max-age=86400");
    return res.send(badge);
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
