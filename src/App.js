import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </BrowserRouter>
    );
}

export default App;
