import React from "react"
import ReactDOM from "react-dom/client"
import Toaster from "react-hot-toast"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const root = ReactDOM.createRoot(document.getElementById("root"))

const queryClient = new QueryClient({
    defaultOption: {
        queries: {
            retry: 0,
            staleTime: 1000,
            refetchInterval: 0,
            refetchhOnWindowFocus: false,
        },
    },
})

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            <App />
            <Toaster position="top-right" reverseOrder={false} />
        </QueryClientProvider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
