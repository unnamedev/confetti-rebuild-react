import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// Sections
import Footer from "./layout/Footer/Footer"
// Pages
import Home from "./pages/Home"
import Pricing from "./pages/Pricing/Pricing"
import Terms from "./pages/Terms/Terms"
import Policy from "./pages/Policy/Policy"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
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
