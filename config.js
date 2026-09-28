// 1) Get a free key: https://aistudio.google.com/apikey
// 2) Paste it between the quotes below.
// NOTE: on GitHub Pages this file is public. In Google Cloud Console, restrict the key
// to your site (HTTP referrer: https://YOUR-USERNAME.github.io/*).
window.CONFIG = {
  GEMINI_API_KEY: "AQ.Ab8RN6JiJ_i_FXvktgDynIyVxsFartmdExgwvuJupKkB519IdQ",
  // Models are tried in order. Google retires models often - check ai.google.dev/gemini-api/docs/models
  MODELS: ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-2.5-flash"],
};
