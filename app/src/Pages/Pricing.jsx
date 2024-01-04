import pricingimg from '../assets/img-2.jpg'

export default function Pricing(){

    return(
        <div className="price-container">
            <div className="left">
            <h1>Simple pricing.
                <br />
                Just $9/month.
            </h1>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
            </p>
            </div>
            <div className="right">
                <img src={pricingimg} alt="price image"></img>
            </div>
        </div>
    )
}