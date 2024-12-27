import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { AiFillDelete } from "react-icons/ai";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../Redux/Slice/CartSlice";
import { useDispatch } from "react-redux";

const ItemCart = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-5 flex gap-1 shadow-md rounded-lg p-2 relative">
      <AiFillDelete
        onClick={() => dispatch(removeFromCart({ id, img, name, price, qty }))}
        className="absolute right-2  text-grey-600 cursor-pointer"
      />

      <img src={img} alt={name} className="w-[50px] h-[50px]" />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold font-semibold ml-3 mr-2 text-green-500">
            ₹{price}
          </span>

          <div className="flex  justify-between items-center gap-2 abslute right-7  ">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              aria-label="Decrease quantity"
            />

            <span className="font-semibold">{qty}</span>

            <GoPlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              aria-label="Increase quantity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
