import {
  API_KEY,
  MAX_NUM_ARTICLES,
  DATE_FROM,
  DATE_TO,
  BASE_URL,
} from '../utils/const';

class NewsApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  //GET Search cards
  getCards(keyword) {
    return fetch(
      `${this.baseUrl}/everything?q=${keyword}&from=${DATE_FROM}&to=${DATE_TO}sortBy=popularity&apiKey=${API_KEY}&pageSize=${MAX_NUM_ARTICLES}`,
      {
        headers: this.headers,
      },
    ).then((res) => res.json());
  }
}

const newsApi = new NewsApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default newsApi;
