import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  //generatig key for framer-motion with useLocation
  const location = useLocation();

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            {/* 
              the id part is dynamic in this case
              so you can add anything after / and 
              it will bring you to MovieDetail page
             */}
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
