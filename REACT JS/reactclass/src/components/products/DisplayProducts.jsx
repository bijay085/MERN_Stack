import React from 'react'
import products from "../../products.json"
import ProductCard from '../../ui/ProductCard'

function DisplayProducts() {
    return (
        <div className="container-fluid">

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.product_image_url}
                            price={product.product_price}
                            title={product.product_title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayProducts