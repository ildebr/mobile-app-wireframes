import './Thankyou.scss'
const Thankyou = ( ) => {

    return (
        <section className="thankyoupage">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        Thank you for charging with us
                    </h2>
                </div>

                <div className="hero">
                    <section className="summary">
                        <h4 className="summary__title">
                            Session Summary
                        </h4>

                        <div className="summary__concepts">
                            <div className="summary__concept">
                                <span>Rate</span>
                                <span>1.50 CAR/hr</span>
                            </div>
                            <div className="summary__concept">
                                <span>Time</span>
                                <span>2.50 hrs</span>
                            </div>
                            <div className="summary__concept">
                                <span>Rate</span>
                                <span>3.75 CAD</span>
                            </div>
                        </div>
                    </section>

                    <section className="summary">
                        <h4 className="summary__title">
                            Taxes
                        </h4>

                        <div className="summary__concepts">
                            <div className="summary__concept">
                                <span>HST</span>
                                <span>0.49 CAR</span>
                            </div>
                            <div className="summary__concept summary__total">
                                <span>Total</span>
                                <span>4.24 CAD</span>
                            </div>
                        </div>
                    </section>

                    <section className="summary">
                        <h4 className="summary__title">
                            Energy Added
                        </h4>

                        <div className="summary__concepts">
                            <div className="summary__concept">
                                <span>Acg Charging Power</span>
                                <span>3.50 Kw</span>
                            </div>
                            <div className="summary__concept">
                                <span>Energy</span>
                                <span>8.75 Kwh</span>
                            </div>
                        </div>
                    </section>
                    <section className="summary">
                        <h4 className="summary__title">
                            Date
                        </h4>

                        <div className="summary__concepts">
                            <div className="summary__concept">
                                <span>2023-07-21</span>
                                <span></span>
                            </div>
                        </div>
                    </section>
                </div>

                <button className="btn btn-secondary">Send by Email</button>
            </div>

            
        </section>
    )
}

export default Thankyou