import {BrowserRouter} from 'react-router-dom';
import 'swiper/scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';

import './App.scss';

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import NavPage from  "./config/NavPage";

function App() {
  return (
    <BrowserRouter>
         <Header/>
         <NavPage />
         <Footer />
    </BrowserRouter>
  );
}

export default App;
