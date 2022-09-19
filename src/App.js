import './App.css';
import ProductDataProvider from './Contex/index';
import {BrowserRouter} from "react-router-dom";
import Home from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ProductDataProvider>
        <Home/>
      </ProductDataProvider>
    </BrowserRouter>
  )
}

export default App;
