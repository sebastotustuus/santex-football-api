export default {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
  services: {
    footballApi: {
      headerXAuthToken: process.env.X_AUTH_TOKEN,
      competitions: "/v4/competitions",
    },
  },
};
