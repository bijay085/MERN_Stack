import { Link } from "react-router-dom"

// const ProductCard = ({image, title="hello", price}) => { here if image or any data didnt came from backend then we can make here default value due to using props
const ProductCard = ({image, title, price}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" > {title} </h5>
                        <p>Price: Rs. {price}</p>
                        <Link to={''} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard