import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import Footer from './Footer';
// https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-15153869/creating-a-firebase-project?u=69719634
// https://youtu.be/I2UBjN5ER4s?feature=shared
// https://youtu.be/_NPzWvTD2w8?feature=shared

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <div id="page-body">
          <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles' element={<ArticlesListPage />} />
            <Route path='/articles/:articleID' element={<ArticlePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;