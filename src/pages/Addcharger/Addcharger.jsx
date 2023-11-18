import { Link } from "react-router-dom"
import scan from "../../assets/Scan.png"
import scand from "../../assets/Scandark.png"
import Headerprogress from "../../components/Headerprogress/Headerprogress"

import "./Addcharger.scss"
const Addcharger = ( ) => {

    return (


        <section className="addcharger">
            <div className="container">
                
                <Headerprogress marknumber={3} />
                <div className="section__header">
                    <h2 className="section__title">
                        Add your Charger
                    </h2>
                    <p className="subtext">
                        Please scan the QR Code in the <br />charger
                    </p>
                </div>


                <div className="scancharger">
                    <img className="scan-img lightimg" src={scan} alt="" />
                    <p>Scan Charger QR Code</p>
                </div>

                

                <Link className="btn btn-secondary" to="/selectcharger">Continue</Link>
            </div>
        </section>
    )
}

export default Addcharger