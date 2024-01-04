import productimg from '../assets/img-1.jpg'

export default function Product(){

    return(
        <div className="product-container">
            <div className="left">
                <img src={productimg} alt="price image"></img>

            </div>
            <div className="right">
            <h1>Simple pricing.
                <br />
                Just $9/month.
            </h1>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
            </p>
            </div>
        </div>
    )
}