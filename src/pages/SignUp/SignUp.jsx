import React from "react"
import Header from "../../layout/Header/Header"
import Form from "../../components/Form/Form"
import "./SignUp.scss"

const SignUp = () => {
    return <>
        <Header type="blue"/>
        <section className="page-sign-up">
            <div className="container page-sign-up__container">
                <Form type="sign-up"/>
            </div>
        </section>
    </>
}

export default SignUp
