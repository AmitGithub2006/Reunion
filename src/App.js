import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Buy from "./components/Header/Buy/Buy";
import Sell from "./components/Header/Sell/Sell";
import Favourites from "./components/Header/Favourites/Favourites";
import Body from "./components/Body/Body";


function App() {
  return (
    <>
      <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            Header
          </Route>
          <Route path="/Buy" element={<Buy />}>
            Buy
          </Route>
          <Route path="/Sell" element={<Sell />}>
            Sell
          </Route>
          <Route path="/Favourites" element={<Favourites />}>
            Favourites
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
