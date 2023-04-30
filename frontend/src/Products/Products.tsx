import data from "./data"

function Products() {
    return (
        <div className="content">
            <ul className="products">
                {data.products.map((Product) => (
                    <li>
                        <div className="product">
                            <img className="product-image" src={Product.imageUrl} alt="product" />
                            <div className="product-name">
                                <a href="product.html">{Product.name}</a>
                            </div>
                            <div className="product-brand">{Product.brand}</div>
                            <div className="product-price">{Product.price}</div>
                            <div className="product-rating">{Product.rating} Stars ({Product.numOfReviews} Reviews)</div>
                        </div>
                    </li>
                ))};
            </ul>
        </div>
    );
}

export default Products;