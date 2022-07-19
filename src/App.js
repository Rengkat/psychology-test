import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import {
  Home,
  NavBar,
  Test,
  Career,
  Blog,
  Question,
} from "./components/indexComponents";
import NewsLetter from "./components/NewsLetter";

// import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
        {/* ...............NAV.................. */}
        <NavBar />
        {/* ...............BODY................. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/test/question" element={<Question />} />
        </Routes>

        {/* ...............FOOTER............... */}
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// landing page
// start personality test
// question and anser
// finish screen
