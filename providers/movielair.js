
export default async function (ctx) {
  const streams = [];

  try {
    // The exact live link you pulled from your browser inspector
    const liveStream = "https://obsidianobfuscation.space";

    streams.push({
      name: "MovieLair Direct Link",
      type: "url",
      url: liveStream,
      quality: "Auto",
      headers: {
        "Referer": "https://movielair.cc",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
  } catch (error) {
    console.error("MovieLair direct test error:", error);
  }

  return streams;
}
