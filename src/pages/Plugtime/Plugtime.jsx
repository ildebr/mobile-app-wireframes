import Headerprogress from "../../components/Headerprogress/Headerprogress"
import timarrows from '../../assets/timearrows.svg'
import { Link } from "react-router-dom"
import './Plugtime.scss'
const Plugtime = () => {

    return ( 
        <section className="plugtime">
            <div className="container">
                <Headerprogress marknumber={2} />
                <div className="section__header">
                    <h2 className="section__title">
                        When will you plug?
                    </h2>
                    <p className="subtext">
                        This information will be used to provide you with the best EV Charging Experience. <br />
                        You will be able to charget at anytime regarledd of your answer.
                    </p>
                </div>

                <form action="" className="form">
                    
                    <div className="form-control">
                        <div className="checkbox-container">
                            <label htmlFor="overnight" className="checkbox-control">
                                <input type="checkbox" name="overnight" id="overnight" />
                                <span class="geekmark"></span>
                            </label>
                            <span className="checkbox-name">Overnight</span>
                        </div>

                        <div className="input-container time-range-container">
                            <div className="input-control">
                                <input type="text" value="7:00PM" />
                                <img className="time-arrows" src={timarrows} alt="" />
                            </div>
                            <span>TO</span>
                            <div className="input-control">
                                <input type="text" value="6:00AM" />
                                <img className="time-arrows" src={timarrows} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="form-control">
                        <div className="checkbox-container">
                            <label htmlFor="evening" className="checkbox-control">
                                <input type="checkbox" name="evening" id="evening" />
                                <span class="geekmark"></span>
                            </label>
                            <span className="checkbox-name">Evening</span>
                        </div>

                        <div className="input-container time-range-container">
                            <div className="input-control">
                                <input type="text" value="7:00PM" />
                                <img className="time-arrows" src={timarrows} alt="" />
                            </div>
                            <span>TO</span>
                            <div className="input-control">
                                <input type="text" value="6:00AM" />
                                <img className="time-arrows" src={timarrows} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="form-control">
                        <div className="checkbox-container">
                            <label htmlFor="afternoon" className="checkbox-control">
                                <input type="checkbox" name="afternoon" id="afternoon" />
                                <span class="geekmark"></span>
                            </label>
                            <span className="checkbox-name">Afternoon</span>
                        </div>

                        <div className="input-container time-range-container">
                            <div className="input-control">
                                <input type="text" value="7:00PM" />
                                <img className="time-arrows" src={timarrows} alt="" />
                            </div>
                            <span>TO</span>
                            <div className="input-control">
                                <input type="text" value="6:00AM" />
                                <img className="time-arrows" src={timarrows} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <p className="days">Days</p>
                   <div className="check">
                        <label htmlFor="mo" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="mo" className="checkbox-control">
                                    <input type="checkbox" name="mo" id="mo" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>Mo</span>
                        </label>
                        <label htmlFor="tu" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="tu" className="checkbox-control">
                                    <input type="checkbox" name="tu" id="tu" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>tu</span>
                        </label>
                        <label htmlFor="we" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="we" className="checkbox-control">
                                    <input type="checkbox" name="we" id="we" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>Mo</span>
                        </label>
                        <label htmlFor="th" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="th" className="checkbox-control">
                                    <input type="checkbox" name="th" id="th" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>th</span>
                        </label>
                        <label htmlFor="fr" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="fr" className="checkbox-control">
                                    <input type="checkbox" name="fr" id="fr" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>sa</span>
                        </label>
                        <label htmlFor="sa" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="sa" className="checkbox-control">
                                    <input type="checkbox" name="sa" id="sa" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>sa</span>
                        </label>
                        <label htmlFor="su" className="check__element">
                            <div className="checkbox-container">
                                <label htmlFor="su" className="checkbox-control">
                                    <input type="checkbox" name="su" id="su" />
                                    <span class="geekmark"></span>
                                </label>
                            </div>
                            <span>su</span>
                        </label>
                   </div>
                </form>
                <Link to='/addcharger' className="btn btn-secondary">Continue</Link>
            </div>

            
        </section>
    )
}

export default Plugtime