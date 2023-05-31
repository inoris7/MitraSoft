import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { User } from "./components/pages/User";
import { NotFound } from "./components/pages/NotFound";


function App() {
  return (
    <div className="App">
      <Router basename="/MitraSoft">      
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/about" element={<About />} />            
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />            
          </Routes>          
        </main>
        <Footer />     
      </Router>     
    </div>
  );
}

export default App;
