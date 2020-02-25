import { NowRequest, NowResponse } from "@now/node";
import { getBadge } from "../badge";

export default async (req: NowRequest, res: NowResponse) => {
  try {
    if (typeof req.query.id !== "string")
      throw new Error("ID should be provided");
    const id = parseInt(req.query.id);
    const type =
      typeof req.query.type === "string" ? req.query.type : undefined;
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
    const badge = await getBadge(id, type, font, hackerNews, featuredOn);
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "max-age=86400");
    return res.send(badge);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};
