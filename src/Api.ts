import axios from 'axios';

export const client = axios.create({
  baseURL: '',
  timeout: 3000,
});

async function fetcher(url: string) {
  return client.get(url).then((res) => res.data);
}

const Api = {
  fetcher,
  client,
};

export default Api;
