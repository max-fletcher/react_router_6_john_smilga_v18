import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom' // importing BrowserRouter context(see context API) from react-router-dom package

// importing HashRouter context(see context API) from react-router-dom package.
// Used when you need to name a route that has a duplicate. (i.e same route name)
// import { HashRouter } from "react-router-dom"

// importing unstable_HistoryRouter context(see context API) from react-router-dom package.
// Stores the entire browsing history when routing. Don't use it since unless absolutely necessary since it is unstable
// import { unstable_HistoryRouter } from "react-router-dom"

// importing MemoryRouter context(see context API) from react-router-dom package.
// MemoryRouter doesn't change the URL on navigating to a new page.
// import { MemoryRouter } from "react-router-dom"

// importing StaticRouter context(see context API) from react-router-dom/server package.
// This is used for SSR since you want to render your components/contents on the server and mount it without changing the initial/App component.
// import { StaticRouter } from "react-router-dom/server"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Wrapping the application mounting point component(i.e App) inside the BrowserRouter context. You will have to define all routes in 'App' since
  // it is the mounting point of your application. Or you cna choose to wrap the <Routes> tag inside the <BrowserRouter> inside App itself. Either one 
  // works.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <HashRouter>
      <App />
    </HashRouter> */}

    {/* <MemoryRouter>
      <App />
    </MemoryRouter> */}

    {/* Will only redirect to the '/books' page and nowhere else regardless which link you click */}
    {/* <StaticRouter location="/books">
      <App />
    </StaticRouter> */}
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
