// Paste your key from https://aistudio.google.com/apikey between the quotes.
// This file is public on GitHub Pages: restrict the key to https://YOUR-USERNAME.github.io/* in Google Cloud Console.
window.CONFIG = {
  GEMINI_API_KEY: "AQ.Ab8RN6JiJ_i_FXvktgDynIyVxsFartmdExgwvuJupKkB519IdQ",
  // Free-tier models: analysis, furniture list, furniture map. Tried in order.
  TEXT_MODELS: ["gemini-3.8-flash", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite"],
  // Photo redesign. Google gives image models NO free tier - needs billing on your Google project (about $0.03-0.07 per image).
  IMAGE_MODELS: ["gemini-3.1-flash-lite-image", "gemini-3.1-flash-image"],
  USE_IMAGE_GENERATION: true, // set false to use only the free furniture map
};
