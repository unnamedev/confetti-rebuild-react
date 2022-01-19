import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// Sections
import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Terms from "./pages/Terms/Terms";
import Policy from "./pages/Policy/Policy";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    {/*@todo Доделать страницы: Price, Login, SignUp, Policy, Policy*/}
                    <Route path="/terms" exact element={<Terms/>}/>
                    <Route path="/policy" exact element={<Policy/>}/>
                    <Route path="/pricing" exact element={<Pricing/>}/>
                    <Route path="/signup" exact element={<SignUp/>}/>
                    <Route path="/login" exact element={<SignIn/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App
