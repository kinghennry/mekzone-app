import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavScrollTop from "./components/ScrollToTop/NavScrollTop";

import AOS from "aos";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
// import Error from "./Pages/Error";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Term from "./Pages/Terms";
import Policy from "./Pages/Policy";
import WorkDetails from "./Pages/WorkDetails";

// import aos css file
import "aos/dist/aos.css";
import "./Assets/variables/App.css";

function App() {
  // initialise the use of aos
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <NavScrollTop>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/service"} component={Services} />
          <Route path={"/work"} component={Work} />
          <Route path={"/work-details/:id"} component={WorkDetails} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/terms"} component={Term} />
          <Route path={"/privacy-policy"} component={Policy} />
          {/* <Route path={"*"} component={Error} /> */}
        </Switch>
      </NavScrollTop>
    </Router>
  );
}

export default App;
