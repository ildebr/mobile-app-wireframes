import './Payment.scss'
import cbtn from '../../assets/checkbutton.svg'

import { Link } from 'react-router-dom'
import Headerprogress from '../../components/Headerprogress/Headerprogress'
const Payment = () => {

    return (
        <section className="payment">
            <div className="container">
                <Headerprogress marknumber={5} />
                <div className="section__header">
                    <h2 className="section__title">
                        Add payment <br />method
                    </h2>
                    <p className="subtext">
                        Please add your credit card information
                    </p>
                </div>

                <form action="" className="form">
                    <label htmlFor="nameoncard">
                        <span>Name on Card</span>
                        <input type="text" name="nameoncard" placeholder="Petra Collins" />
                    </label>
                    <label htmlFor="cardnumber">
                        <span>Card Number</span>
                        <input type="text" name="cardnumber" placeholder="xxx - xxxx - xxx - xxx" />
                    </label>
                    <div className="divided">
                        <label htmlFor="expiration">
                            <span>Expiration</span>
                            <input type="text" name="expiration" placeholder="MM/AA" />
                        </label>
                        <label htmlFor="CVV">
                            <span>CVV</span>
                            <input type="text" name="CVV" placeholder="..." />
                        </label>
                    </div>

                    <h3 className='title-s'>Billing Information</h3>

                    <label htmlFor="address">
                        <span>Address</span>
                        <input type="text" name="address" placeholder="1234 Miraville Dr" />
                    </label>
                    <label htmlFor="city">
                        <span>City</span>
                        <input type="text" name="city" placeholder="San Francisco" />
                    </label>

                    <div className="divided">
                        <label htmlFor="state">
                            <span>State</span>
                            <input type="text" name="state" placeholder="California" />
                        </label>
                        <label htmlFor="postalcode">
                            <span>Postal Code</span>
                            <input type="text" name="postalcode" placeholder="94043" />
                        </label>
                    </div>

                    <label htmlFor="country">
                        <span>Country</span>
                        <div className="inputctrl">
                            <input type="text" name="country" placeholder="SUSA" />
                            <img src={cbtn} alt="check" className='inputctrl__img' />
                        </div>
                    </label>

                    <label htmlFor="promocode">
                        <span>Add Promo Code</span>
                        <input type="text" name="promocode" placeholder="Promo Code" />
                    </label>
                    
                    <Link to='/congratulations' className="btn btn-secondary">Add</Link>
                </form>
            </div>
        </section>
    )
}


export default Payment