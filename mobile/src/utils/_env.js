import Constants from "expo-constants";

const ENV = {
  dev: {
    apiUrl: "http://{coloqueSeuIP}:3333",
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  return ENV.dev;
};

const selectedENV = getEnvVars();

export default selectedENV;
