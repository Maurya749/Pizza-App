import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slice/CartSlice';

const FoodCart = ({ id, name, rating, img, desc, price, handleToast }) => {

  const dispatch = useDispatch();    
  return (
    <div className="gap-4 ml-6 font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg shadow-md">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500"
      />
      <div className="text-sm flex justify-between mt-2">
        <h2 className="text-lg">{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal mt-2">{desc.slice(0,50)}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center">
          <FaRegStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button onClick={()=>{

          dispatch(addToCart({id, name, price, rating, img, qty: 1}))
        
          handleToast();
        }} 
        
         className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
