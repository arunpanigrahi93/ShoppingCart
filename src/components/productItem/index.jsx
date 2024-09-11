function ProductItem({ product }) {
  return (
    <div className="relative group border border-cyan-700 p-6 cursor">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
    </div>
  );
}
export default ProductItem;
