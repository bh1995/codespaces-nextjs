import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, NavLink } from 'react-router-dom';

import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }>
    {/* Add Routes here! */} 
    <Route path="/about" element={ <About/> } />  {/* nested route, About: /about */}
    <Route path="/sign-up" element={ <SignUp/> } />  {/* nested route, SignUp: /sign-up */}
    <Route path="/articles" element={ <Articles/> } />  {/* nested route, Articles: /articles */}
    <Route path="/articles/:title" element={ <Article/> } />  {/* dynamic route, article*/}
    <Route path="/categories" element={ <Categories/> }>
      <Route path=":name" element={ <Category/> } />
    </Route>  {/* nested route, Categories: /categories */}

    <Route path="/profile" element={ <Profile/> }>   {/* nested route, Profile: /profile */}
      <Route path="edit" element={ <EditProfileForm/> } />
    </Route>
    <Route path="/authors/:name" element={ <Author/> } />  {/* nested route, Profile: /profile */}
  </Route>
));

function App() {
  return (
    <>
      { /* Replace below and add Router Provider*/}
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
