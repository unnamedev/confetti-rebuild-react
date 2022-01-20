import React from "react"
import Header from "../../layout/Header/Header"
import Form from "../../components/Form/Form"
import "./SignIn.scss"
const SignIn = () => {
    return <>
        <Header type="blue"/>
        <section className="page-login">
            <div className="container page-login__container">
                <Form type="login"/>
            </div>
        </section>
    </>
}

export default SignIn
