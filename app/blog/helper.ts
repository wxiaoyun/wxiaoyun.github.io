import Parser from "rss-parser";

const MEDIUM_FEED_URL = "https://medium.com/feed/@w.xy020203";

const parser = new Parser();

export const fetchMediumData = async () => {
  const res = await fetch(MEDIUM_FEED_URL);
  const rssStr = await res.text();
  const jsonData = await parser.parseString(rssStr);
  return jsonData as MediumData;
};
