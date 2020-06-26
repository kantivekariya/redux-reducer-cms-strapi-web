const dev = {
  BASE_URL: "http://127.0.0.1:1337",
};

const prod = {
  BASE_URL: "https://strapi-serve.herokuapp.com",
};
const config = process.env.NODE_ENV === "production" ? prod : prod;

export default {
  ...config,
};
