import FoodCart from './FoodCart';
import FoodData from '../data/FoodData.js';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const Search  = useSelector((state)=>state.search.search)
  const category = useSelector((state) => state.category?.category || "All");

  const handleToast = () => {
    toast.success("Item added to cart");
  };

  return (
    <>

      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mx-5">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(Search.toLowerCase())
            
          } else {
            return category === food.category && 
            food.name.toLowerCase().includes(Search.toLowerCase());

          }
        }).map((food) => (
          <FoodCart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            img={food.img}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
