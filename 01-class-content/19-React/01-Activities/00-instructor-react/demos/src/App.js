import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PortfolioContainer } from './pages/PortfolioContainer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { GiphySearch } from './pages/GiphySearch';
import './design/scss/salve.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PortfolioContainer />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/giphy-search" element={<GiphySearch />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
