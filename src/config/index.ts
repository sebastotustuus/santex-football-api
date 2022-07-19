import 'dotenv/config'
export default {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
  services: {
    footballApi: {
      baseUrl: "http://api.football-data.org",
      competitions: "/v2/competitions",
      teams: "/v2/teams",
      headerXAuthToken: {
        key: 'X-Auth-Token',
        value: '5ba7ef83be88498f9bf9ff111624fa59'
      },
    },
  },
};
