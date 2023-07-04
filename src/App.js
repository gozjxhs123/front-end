import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./page/Main"
import Login from "./page/Login"
import Sign from "./page/Sign"
import Live from "./page/Live"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/live" element={<Live />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
