import { useContext } from "react";
import { ShoppingCartContext } from "../../context"; // Corrected context name from ShopingCartContext to ShoppingCartContext
import ProductItem from "../../components/ProductItem"; // Ensure correct casing

function ProductListPage() {
  const { listOfProducts } = useContext(ShoppingCartContext); // Corrected context name

  console.log(listOfProducts);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
            Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductListPage;
