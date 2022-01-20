import React from "react"
import Intro from "../layout/Intro/Intro"
import Platform from "../layout/Platform/Platform"
import Goals from "../layout/Goals/Goals"
import Price from "../layout/Price/Price"
import Routine from "../layout/Routine/Routine"
import Trial from "../layout/Trial/Trial"
import Analytics from "../layout/Analytics/Analytics"
import Header from "../layout/Header/Header";

const Home = () => {
    return <>
        <Header/>
        <Intro/>
        <Platform/>
        <Goals/>
        <Price/>
        <Routine/>
        <Trial/>
        <Analytics/>
    </>
}

export default Home
