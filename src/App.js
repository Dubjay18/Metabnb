import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NFTs from "./pages/NFTs";

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/placeToStay' element={<NFTs />} />
      </Routes>
    </div>
  );
}

export default App;
