import { createStore, combineReducers } from "redux";
import { articlesData } from "./articlesReducer/articles";
import { book } from "./books/books";
import { companies } from "./companies/companies";
import { exploryData } from "./exploreReducer/exploreReducer";

const rootReducer = combineReducers({
  explore: exploryData,
  books: book,
  companies: companies,
  articles: articlesData,
});

export const store = createStore(rootReducer);
