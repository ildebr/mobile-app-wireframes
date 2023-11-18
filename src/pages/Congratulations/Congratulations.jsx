import { Link } from "react-router-dom"
import check from '../../assets/checked2.svg'
import './Congratulations.scss'
import cbbtn from '../../assets/checkedbig.png'
const Congratulations = () => {


    return (
        <section className="congratulations">
            <div className="container">

                <div className="imagecontainer">
                    <img src={cbbtn} alt="" />
                </div>

                <div className="text-container">
                    <h2 className="section__title">
                        Congratulations
                    </h2>
                    <p className="subtext">
                        You have completed the registration process successfully
                    </p>
                </div>

                <Link to='/home' className="btn btn-secondary">Get started</Link>
            </div>
        </section>
    )
}

export default Congratulations