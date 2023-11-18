import { Link } from "react-router-dom"
import sign from "../../assets/plussign.svg"
import charger1 from "../../assets/charger1.png"
import charger2 from "../../assets/charger2.png"
import "./Selectcharger.scss"
import Headerprogress from "../../components/Headerprogress/Headerprogress"
const Selectcharger = () =>{


    return (
        <div className="selectcharger">
            <div className="container">
                <Headerprogress marknumber={4} />
                <div className="section__header">
                    <h2 className="section__title">
                        Add your Charger
                    </h2>
                    <p className="subtext">
                        Please scan the QR Code in the charger
                    </p>
                </div>


                <div className="charger">
                    <div className="charger__element">
                        <div className="add">
                            <img src={sign} alt="" />
                        </div>

                        <p>Add Charger</p>
                        <div className="checked">

                        </div>
                    </div>

                    <div className="charger__element charger__element--selected">
                        <div className="add">
                            <img src={charger1} alt="" />
                        </div>

                        <p>Petra Collins</p>

                        <div className="checked">

                        </div>

                    </div>
                    <div className="charger__element">
                        <div className="add">
                            <img src={charger2} alt="" />
                        </div>

                        <p>Petra Collins</p>

                        <div className="checked">

                        </div>
                    </div>
                </div>

                <div className="payment">
                    <h2 className="section__title">
                        Add pament<br />method
                    </h2>
                    <p className="subtext">
                        Please add your credit card
                    </p>
                </div>
                <Link to='/payment' className="btn btn-secondary">Add Credit Card</Link>
            </div>
        </div>
    )
}


export default Selectcharger