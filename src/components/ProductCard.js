import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => (
  <div className="product">
    <img src={""} className="image" alt={""} />
    <div className="title">{""}</div>

    <div className="product-body">
      <span style={{ marginTop: 10 }}>${""}</span>
      <AddToCart product={product} />
    </div>
  </div>
);

export default ProductCard;
