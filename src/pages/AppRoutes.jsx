import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";


export default function AppRoutes() {

    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/creatcat" element={<CatCreateForm />}/>                
                <Route path="/updatecat/:id" element={<CatUpdateForm />}/>                
                <Route path="/cat/:id" element={<CatView />}/>             
                <Route path="/cats" element={<CatList />}/>             

            </Routes>
        </BrowserRouter>
    </>
    );
}