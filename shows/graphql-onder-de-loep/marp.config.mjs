/** @type {import('@marp-team/marp-cli').Config} */
const config = {
  allowLocalFiles: true,
  themeSet: "./themes",
  html: true,
  // Prettier breekt proza af op 100 tekens; regelovergangen niet als <br> renderen
  options: { markdown: { breaks: false } },
};

export default config;
