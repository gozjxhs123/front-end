import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import Sign from "./page/Sign";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign" element={<Sign />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
