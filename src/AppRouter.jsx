import { Route, Routes } from "react-router-dom";
import { MeliProductComponent } from "./components/MeliProductComponent";
import MeliProductDetail from "./components/items/MeliProductDetail";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/*" element={<MeliProductComponent/>} />
            <Route path="product/:id" element={<MeliProductDetail/>} />
        </Routes>
    )
}
