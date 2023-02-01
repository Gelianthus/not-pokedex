import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './initial-files/reportWebVitals';
import MainElement from './MainElement';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./CSS FIles/not-pokedex.css";
import PokemonListPage from './PokemonListPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainElement />
  }, 
  {
    path: "search-input-list",
    element: <PokemonListPage />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
