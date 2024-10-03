import React, { Suspense, lazy, memo } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/main.scss";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFoundPage = lazy(() => import("./pages/404"));
const ContactMePage = lazy(() => import("./pages/ContactPage"));

const Layout = memo(({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/about-me"
              element={
                <Layout>
                  <AboutMe />
                </Layout>
              }
            />
            <Route
              path="/contact-me"
              element={
                <Layout>
                  <ContactMePage />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
