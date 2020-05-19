const dev = {
  BASE_URL: "http://127.0.0.1:1337",
};

const prod = {
  BASE_URL: "",
};
const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  TIMEOUT: 60000,
  ...config,
};
