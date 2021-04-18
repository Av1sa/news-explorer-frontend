const SIGNIN_TO_SAVE_ARTICLES = 'Sign in to save articles';
const REMOVE_FROM_SAVED = 'Remove from saved';
const REGISTRATION_SUCCESSFULLY_COMPLETED =
  'Registration successfully completed!';

const NOTHING_FOUND = 'Nothing found';
const NOTHING_MATCHED = 'Sorry, but nothing matched your search criteria.';
const ENTER_KEYWORD = 'Please enter a keyword.';
const DATA_ERROR =
  'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.';
const BAD_INPUT = 'Bad input. Try again.';

const BASE_URL_NEWS_API = 'https://nomoreparties.co/news/v2';
const BASE_URL_MAIN_API = 'https://api.fp-manelis.students.nomoreparties.site';
const API_KEY = '53c68f38f9c242baacd37c44cb2d76eb';
const MAX_NUM_ARTICLES = 100;
const DATE_FROM = Date.now() - 7 * 24 * 3600 * 1000; // 7 days from now
const DATE_TO = Date.now();

const NUM_CARDS_BEGIN_WITH = 3;
const NUM_CARDS_MORE = 3;

export {
  API_KEY,
  DATE_FROM,
  DATE_TO,
  MAX_NUM_ARTICLES,
  SIGNIN_TO_SAVE_ARTICLES,
  REMOVE_FROM_SAVED,
  REGISTRATION_SUCCESSFULLY_COMPLETED,
  NOTHING_FOUND,
  NOTHING_MATCHED,
  ENTER_KEYWORD,
  BAD_INPUT,
  DATA_ERROR,
  BASE_URL_NEWS_API,
  BASE_URL_MAIN_API,
  NUM_CARDS_MORE,
  NUM_CARDS_BEGIN_WITH,
};
