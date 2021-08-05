import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MobileApps from './pages/About';
import Home from './pages/Home';
import Category from './pages/Category';
import Page404 from './containers/Page404';
import ThemeContext from "./theme-context";
import { useState } from 'react';
import HeaderWrapper from './containers/Header/HeaderWrapper';

let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/Page404", component: <Page404 /> },
  { path: "/mobileapps", component: <MobileApps /> },
  { path: "/:category", exact: true, component: <Category /> },
  // { path: "/:category/:subcategory", component: <Category /> },
  { component: <Redirect to="/" /> }
]

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Switch>
          {pages.map((page, index) => {
            return <Route path={page.path} exact={page.exact} key={page.path}>
              {page.component}
            </Route>
          })}
        </Switch>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
