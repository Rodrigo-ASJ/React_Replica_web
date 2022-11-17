import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Join from './pages/join/Join'
import Discover from './pages/discover/Discover'
import ErrorPage from './pages/error/ErrorPage'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="discover" element={ <Discover/> } />
        <Route path="join" element={ <Join/> } />
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </div>
  );
}

export default App;
