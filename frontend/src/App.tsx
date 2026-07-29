import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { LearnPage } from './pages/LearnPage';
import { MembershipPage } from './pages/MembershipPage';
import { ProofPage } from './pages/ProofPage';
import { ContactPage } from './pages/ContactPage';
import { Web3Page } from './pages/Web3Page';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CoachPage } from './pages/CoachPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/proof" element={<ProofPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/web3" element={<Web3Page />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/coach/:id" element={<CoachPage />} />
      </Routes>
    </Router>
  );
}

export default App;
