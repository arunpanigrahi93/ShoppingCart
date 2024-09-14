import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartItem({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);

  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              className="w-full h-full object-contain"
              alt={singleCartItem?.title}
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 font-bold text-[16px]">
            Quantity: {singleCartItem?.quantity}
          </p>
          <div className="mt-3 flex items-center">
            <button
              onClick={() => {
                if (singleCartItem?.quantity === 1) {
                  handleRemoveFromCart(singleCartItem, true);
                } else {
                  handleRemoveFromCart(singleCartItem, false);
                }
              }}
              className="disabled:opacity-65 border border-[#000] px-2 py-1"
            >
              -
            </button>
            <span className="mx-3">{singleCartItem?.quantity}</span>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="border border-[#000] px-2 py-1"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 mt-4" />
    </Fragment>
  );
}

export default CartItem;
