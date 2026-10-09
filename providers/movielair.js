export default async function (ctx) {
  // We return a simple, hardcoded list structure that Nuvio's UI engine forces onto the screen
  return [
    {
      name: "MovieLair Test Link",
      type: "url",
      url: "https://obsidianobfuscation.space",
      quality: "1080p",
      headers: {
        "Referer": "https://movielair.cc",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    }
  ];
}
