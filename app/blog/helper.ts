const MEDIUM_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@w.xy020203";

export const fetchMediumData = async () => {
  const res = await fetch(MEDIUM_FEED_URL);
  const data = await res.json();
  return data as MediumData;
};
