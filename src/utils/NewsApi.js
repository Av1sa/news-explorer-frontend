import { API_KEY, MAX_NUM_ARTICLES, DATE_FROM, DATE_TO } from '../utils/const';

class NewsApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  //GET Search cards
  getCards(keyword) {
    return fetch(
      `${this.baseUrl}/everything?q=${keyword}&from=${DATE_FROM}&to=${DATE_TO}sortBy=popularity&apiKey=${API_KEY}&pageSize=${MAX_NUM_ARTICLES}`,
      {
        headers: this.headers,
      },
    ).then((res) => this._getResponseData(res));
  }
}

const newsApi = new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default newsApi;
