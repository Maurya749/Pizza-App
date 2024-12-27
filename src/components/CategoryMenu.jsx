import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCategory } from "../Redux/Slice/categorySlice";

const CategoryMenu = () => {

  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {


    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();

  const selectCategory = useSelector(
    (state) => state.category?.category || "All"
  );

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold mt-5">Find The Best Food</h3>

      <div className="mb-1 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          All
        </button>

        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 font-bold rounded-lg ${
              selectCategory === category
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-green-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
