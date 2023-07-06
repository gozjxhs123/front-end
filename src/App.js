import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./page/Main"
import Login from "./page/Login"
import Sign from "./page/Sign"
import Live from "./page/Live"
import { Toaster } from "react-hot-toast"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/live" element={<Live />} />
            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
    )
}

export default App
