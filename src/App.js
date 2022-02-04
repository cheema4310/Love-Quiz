import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/nav/Header";
// import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
// import QuizStart from "./pages/QuizStart";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";

import LoadingSpinner from "./UI/LoadingSpinner";

const Contact = React.lazy(() => import("./pages/Contact"));
const QuizStart = React.lazy(() => import("./pages/QuizStart"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingSpinner asOverlay />}>
          <Header />

          <Routes>
            <Route element={<LandingPage />} path="/" />
            <Route element={<QuizStart />} path="/quiz" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<NotFound />} path="*" />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
