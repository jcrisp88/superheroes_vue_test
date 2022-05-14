import axios from 'axios';

// Can easily manage and update new api's from .env files
export const APIS = {
  SUPER_HERO: 'SUPER_HERO',
};
const createClient = (name:string) => {
  const baseURL = process.env[`VUE_APP_${name}_API`];
  const config = {
    baseURL,
  };
  const client = axios.create(config);
  return client;
};

export const clients = Object.keys(APIS)
  .map((apiName) => ({ [apiName]: createClient(apiName) }))
  .reduce(
    (acc, current) => ({ ...acc, ...current }),
  );
