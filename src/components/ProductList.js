import ProductCard from "./ProductCard";

const ProductList = () => {
  let isLoading = false;
  let loadError = null;
  const data = [];
  if (isLoading) {
    return <div className="loading">Fetching Products ... </div>;
  } else if (loadError) {
    return <div>Please try again ... </div>;
  } else {
    return (
      <div className="products">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    );
  }
};
export default ProductList;
