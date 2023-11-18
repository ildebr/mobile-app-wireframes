import { Link } from 'react-router-dom'
import Headerprogress from '../../components/Headerprogress/Headerprogress'
import './Register.scss'


const Register = () => {

    return (
        <section className="register">
            <div className="container">
                <Headerprogress marknumber={1} />
                <div className="registerhero">
                    <div className="section__header">
                        <h2 className="section__title">
                            Register Account
                        </h2>
                        <p className="subtext">
                            Enter your name, email address & password to register account.
                        </p>
                    </div>

                    <form action="" className="form">
                        <div className="divided">
                        <label htmlFor="firstname">
                            <span>First Name</span>
                            <input type="text" name="firstname" placeholder="Jiaro" />
                        </label>
                        <label htmlFor="lastname">
                            <span>Last Name</span>
                            <input type="text" name="lastname" placeholder="Martins" />
                        </label>
                        </div>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" name="email" placeholder="hello@ilovedrivinggreen.com" />
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" placeholder="******" />
                        </label>

                        <div className="signup__options">
                            <Link className="btn btn-secondary" to="/addCharger">Continue</Link>
                        </div>
                    </form>
                </div>

                <div className="registerhero">
                    <div className="terms">
                        <p>
                            By signing up you agree with our <br /> friendly <a href="#">terms and conditions</a>
                        </p>
                    </div>
                    <div className="terms m">
                        <p>Already have an account? <a href="#">Sign in</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register