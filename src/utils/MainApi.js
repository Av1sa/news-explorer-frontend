class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // _getResponseData(res) {
  //   return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  // }

  // Register user
  registerUser(data) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  // Sign in user
  signInUser(data) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  // Check token and get user
  validateUser(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  }

  // Get saved articles
  getSavedArticles(token) {
    return fetch(`${this.baseUrl}/articles`, {
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  }

  // Save the article
  saveArticle(data, token) {
    return fetch(`${this.baseUrl}/articles`, {
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  // Remove the article from saved
  removeArticle(articleId, token) {
    return fetch(`${this.baseUrl}/articles/${articleId}`, {
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    }).then((res) => res.json());
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
