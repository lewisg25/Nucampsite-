import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import ContactPage from "./pages/ContactPage";
// import HomePage from "./pages/HomePage";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
// import "./App.css";
// import CampsiteDetailPage from "./pages/CampsiteDetailPage";
// // Import the AboutPage component from the appropriate path
// import AboutPage from "./pages/AboutPage";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="contact" element={<ContactPage />} />
//         <Route path="directory" element={<CampsitesDirectoryPage />} />
//         <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
//         // Add a Route component that will direct requests to the about path to
//         the AboutPage component
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
