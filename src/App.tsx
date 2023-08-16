import React from "react"
import Header from "./components/Header.tsx";
import "./scss/app.scss"
import AppRouter from "./components/AppRouter.tsx";


const App: React.FC = () => {

    return (
        <>
            <Header/>
            <main className="wrapper">
                <AppRouter/>
            </main>
        </>
    )
}

export default App
