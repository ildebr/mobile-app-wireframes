import rarr from '../../assets/rightarr.svg'
import noti from '../../assets/notifications.svg'
import charger from '../../assets/charger3.png'
import accounts from '../../assets/accounts.svg'
import chargersvg from '../../assets/charger.svg'
import home from '../../assets/home.svg'
import settings from '../../assets/settings.svg'
import './Homecharger.scss'
import Headerprogress from '../../components/Headerprogress/Headerprogress'
const Homecharger = () => {
    return (
        <section className="homecharger">
            <div className="container">
                
                <div className="textheaderuser">
                    <p className='greet'>Hello</p>
                    <div className="user">
                    <p className="user__name">Petra Collins</p>
                    <div className="user__notifications">
                        <img src={noti} alt="" />
                    </div>
                    </div>
                </div>

                <div className="homerchargerhero">
                    <div className="optionshea">
                        <h3 className="charger">
                            Charger
                        </h3>

                        <p>See all</p>
                    </div>

                    <div className="chargeroptions">
                        <div className="chargeroptions__element">
                            <img src={charger} alt="" />
                            <div className="chargeroptions__text">
                                <p className="price">
                                    1.5CAD / hr
                                </p>
                                <p className="name">
                                    My Charger
                                </p>
                            </div>
                            <button className="btn chargeroptions__button">
                                Available
                            </button>
                        </div>
                        <div className="chargeroptions__element chargeroptions__element--active">
                            <img src={charger} alt="" />
                            <div className="chargeroptions__text">
                                <p className="price">
                                    1.5CAD / hr
                                </p>
                                <p className="name">
                                    My Charger
                                </p>
                            </div>
                            <button className="btn chargeroptions__button">
                                Available
                            </button>
                        </div>
                        <div className="chargeroptions__element">
                            <img src={charger} alt="" />
                            <div className="chargeroptions__text">
                                <p className="price">
                                    1.5CAD / hr
                                </p>
                                <p className="name">
                                    My Charger
                                </p>
                            </div>
                            <button className="btn chargeroptions__button">
                                Available
                            </button>
                        </div>
                    </div>
                </div>

                <div className="homechargerhero buttons">
                    <button className="btn btn-tertiary"><span><img src={rarr} alt="arrow" /></span>Start Charging</button>


                    <a href="#" className="btn btn-quaternary">+ Add Charger</a>
                </div>

                <footer className="homecharger__footer">
                    <div className="homecharger__footerel homecharger__footerel--selected">
                        <img src={home} alt="home svg" />

                        <p className='homecharger__footertext'>Home</p>
                    </div>
                    <div className="homecharger__footerel">
                        <img src={chargersvg} alt="chargersvg svg" />

                        <p className='homecharger__footertext'>Chargers</p>
                    </div>
                    <div className="homecharger__footerel">
                        <img src={settings} alt="settings svg" />

                        <p className='homecharger__footertext'>Settings</p>
                    </div>
                    <div className="homecharger__footerel">
                        <img src={accounts} alt="accounts svg" />

                        <p className='homecharger__footertext'>Accounts</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Homecharger