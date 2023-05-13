import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landing.jsx";
import Home from "./pages/home.jsx";
import Details from "./pages/details.jsx";
import Form from "./pages/form.jsx";

function App() {
 

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/form" component={Form} />
      </div>
    </Router>
  );
}

export default App;
