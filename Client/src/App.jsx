import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import SinglePostPage from "./routes/SinglePostPage";
import PostListPage from "./routes/PostListPage";
import Write from "./routes/Write";
const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:slug" element={<SinglePostPage />} />
          <Route path="/write" element={<Write />} />
        </Routes>
        {/* BreadCrumb */}
        {/* Introduction */}
        {/* Featured Posts */}
        {/* POST List */}
      </BrowserRouter>
    </div>
  );
};

export default App;
