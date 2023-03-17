import { Route, Routes } from "react-router-dom";
import Nav from "../Nav/nav";
import HomePage from "../../pages/HomePage/home";
import AuthorPage from "../../pages/AuthorPage/author";
import CompaniesPage from "../../pages/CompaniesPage/companies";
import ArticlesPage from "../../pages/ArticlesPage/articles";
import NotFoundPage from "../../pages/NotFoundPage/notFound";
import AboutPage from "../../pages/AboutPage/aboutPage";
import StorePage from "../../pages/StorePage/storePage";
import ContactPage from "../../pages/ContactPage/contactPage";
import s from "./style.module.css";
import Footer from "../Footer";
function App() {
  return (
    <div className={s.container}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
