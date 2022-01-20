import React from "react"
import "./Form.scss"
import Title from "../Title/Title";
import Button from "../Button/Button";
import icoGoogle from "../../assets/images/form/google-ico.svg"
import icoFacebook from "../../assets/images/form/fb-ico.svg"
import {Link} from "react-router-dom";

const Form = ({type}) => {
    return <div className="form-wrapper">
        <Title tagName="h2" modClass="form__title">{`${type === "sign-up" ? "Welcome" : "Welcome back"}!`}</Title>
        <form className={`form form--${type}`}>
            {type === "sign-up" && (
                <>
                    <div className="form__group">
                        <label className="form__label">
                            <input type="text" name="name" placeholder="Name" className="form__field"/>
                        </label>
                    </div>
                    <div className="form__group">
                        <label className="form__label">
                            <input type="email" name="email" placeholder="Email" className="form__field"/>
                        </label>
                    </div>
                    <div className="form__group">
                        <label className="form__label">
                            <input type="password" name="password" placeholder="Create password"
                                   className="form__field"/>
                        </label>
                    </div>
                </>
            )}

            {/*LOGIN*/}
            {type === "login" && (
                <>
                    <div className="form__group">
                        <label className="form__label">
                            <input type="email" name="email" placeholder="Email" className="form__field"/>
                        </label>
                    </div>
                    <div className="form__group">
                        <label className="form__label">
                            <input type="password" name="password" placeholder="Password" className="form__field"/>
                        </label>
                    </div>
                    <a className="form__forgot-link" href="#">Forgot your password?</a>
                </>
            )}


            <Button tagName="button" type="submit"
                    modClass="form__button">{`${type === "sign-up" ? "Sign Up" : "Sign In"}`}</Button>

            <div className="form__another">OR</div>

            <button className="form__social-button form__social-button--google">
                <img src={icoGoogle} alt="Google Icon"/>
                Sign In with Google
            </button>

            <button className="form__social-button form__social-button--fb">
                <img src={icoFacebook} alt="Facebook Icon"/>
                Sign In with Facebook
            </button>

            <p className="form__account">
                {type === "sign-up" ? "Already have an account?" : "Don't have an account?"}{" "}
                <Link to={type === "sign-up" ? "/login" : "signup"}>{type === "sign-up" ? "Sign In" : "Sign Up"}</Link>
            </p>
        </form>
    </div>
}

export default Form
