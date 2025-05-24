import type { Maybe } from './types/shared.type';

async function fetcher(url: Maybe<string>) {
  return url;
}

const Api = {
  fetcher,
};

export default Api;
