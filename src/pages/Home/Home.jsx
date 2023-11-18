
import image from "../../assets/Image1.png"

import './Home.scss'
import { Link } from "react-router-dom"
const Home = () => {

    return (
        <section className="homepage">
            <div className="container">

                <h1>EV Chargin in Condos made Simple</h1>

                <div className="img-container">
                <img className="isometric-img" src={image} alt="" />
                </div>

                <Link to='/welcome' className="btn btn-primary">
                    Get Started
                </Link>
            </div>
        </section>
    )
}

export default Home;