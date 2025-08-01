import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Inside from "./Pages/InsideGenre/Inside";
import Subcribtion from "./Pages/Subcribtion/Subcribtion";

import Footer from "./Components/Footer/Footer";
import Support from "./Pages/Support/Support";
import ActiorPage from "./Pages/Actior/ActiorPage";
import Search from "./Pages/Search/Search";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Inside/:id" element={<Inside />} />
        <Route path="/Actior/:id" element={<ActiorPage />} />
        <Route path="/Subscriptions" element={<Subcribtion />} />
        <Route path="/Search" element={<Search/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
