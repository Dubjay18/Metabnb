import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NFTs from "./pages/NFTs";

function App() {
  return (
    <div className=''>
      <head>
        <title>Dub_jay</title>
        <link rel='icon' href='/favicon.ico' />
      </head>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Nfts' element={<NFTs />} />
      </Routes>
    </div>
  );
}

export default App;
