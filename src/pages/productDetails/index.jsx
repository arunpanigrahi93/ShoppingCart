import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetailsPage() {
  const { id } = useParams();

  const { productDetails, setProductDetails } = useContext(ShoppingCartContext);
  async function fetchProductDetails() {
    const apiresponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiresponse.json();
    // console.log(result);
    if (result) setProductDetails(result);
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);
  console.log(productDetails);

  return (
    <div className="P-6 lg:max-w-7xl max-w-4xl mx-auto">
      <div className="grid utems-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
        <div className="lg:col-sp-3 w-full lg:sticky  top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-lg relative">
            <img
              className="W-4/5 rounded object-cover"
              src={productDetails?.thumbnail}
              alt="Product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsPage;
