import "./WelcomeBack.scss"

import fblogo from '../../assets/FBlogo.svg'
import glogo from '../../assets/googlelogo.svg'
import { Link } from "react-router-dom"

const WelcomeBack = () => {

    return (
        <section className="welcomeback">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        Welcome back
                    </h2>
                    <p className="subtext">
                        Enter your email address and password to access your account
                    </p>
                </div>

                <form action="" className="form">
                    <label htmlFor="email">
                        <span>Email</span>
                        <input type="email" name="email" placeholder="hello@ilovedrivinggreen.com" />
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input type="password" name="password" placeholder="******" />
                    </label>

                    <div className="signup__options">
                        <div className="remember">
                            <form action="">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </form>
                        </div>

                        <div>
                            <a href="#">Forgot Password?</a>
                        </div>

                        
                    </div>
                </form>

                <Link to="/register" className="btn btn-secondary">Sign in</Link>

                <div className="signin">
                   <div className="signin__header">
                        <span></span>
                        <p>Or sign in with</p>
                        <span></span>
                   </div>
                    <div className="signin__options">
                        <div className="signin__option">
                            <img src={glogo} alt="" />
                            <span>with Google</span>
                        </div>
                        <div className="signin__option">
                            <img src={fblogo} alt="" />
                            <span>with Facebook</span>
                        </div>
                    </div>
                </div>

                <div className="noaccount">
                    <p className="noaccount__header">Don't have an account?</p>
                    <p className="noaccount__footer"><a href="#">Register Account</a> or <a href="#">Start as Guest</a></p>
                </div>
            </div>
        </section>
    )
}


export default WelcomeBack;