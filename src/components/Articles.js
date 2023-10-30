import React from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";

// Import Link and useSearchParams from React Router

export default function Articles() {
  const articles = useSelector(selectArticles);

  // Grab URLSearchParams object from useSearchParams hook
  const [searchParms, setSearchParams] = useSearchParams();

  // Get the queryParams from object returned from useSearchParams and set to `title`
  const title = searchParms.get('title');

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map(article => (
          <li key={article.slug}>
            {/* Replace these a tags! */}
            {/* <a href={`${article.slug}`}>
              {article.title}
            </a> */}
            <Link to={`${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Search />
    </main>
  )
}
